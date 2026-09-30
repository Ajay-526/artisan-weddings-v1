import "server-only";
import { createHash } from "node:crypto";

// Durable storage for consent records and data-rights requests.
//
// This site has no database. Records are POSTed as JSON to RECORDS_WEBHOOK_URL
// (for example a Google Apps Script bound to a private Sheet, Zapier, or a
// small backend you control). Until that is set, records are only written to
// the server log, which is NOT durable — see DPDP_PROGRESS.md, open items.
//
// Fails closed: if the webhook is configured but the write fails, callers get
// { stored: false } and must not tell the person it was saved.

const WEBHOOK_URL = process.env.RECORDS_WEBHOOK_URL;
const WEBHOOK_SECRET = process.env.RECORDS_WEBHOOK_SECRET;
const IP_SALT = process.env.RECORDS_IP_SALT;

// Best-effort abuse limit. In-memory, so it resets per serverless instance;
// a real limiter (Vercel Firewall / Upstash) is listed as an open item.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 20;
const hits = new Map();

export function clientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    ""
  );
}

export function rateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

// A salted hash lets us link repeat submissions from one address without
// keeping the raw IP (data minimisation). No salt configured → no IP kept.
export function hashIp(ip) {
  if (!ip || !IP_SALT) return undefined;
  return createHash("sha256").update(`${IP_SALT}:${ip}`).digest("hex");
}

export function clean(value, max = 500) {
  if (value === undefined || value === null) return "";
  return String(value).slice(0, max).trim();
}

export async function storeRecord(kind, record) {
  const payload = {
    kind,
    receivedAt: new Date().toISOString(),
    ...record,
  };

  if (!WEBHOOK_URL) {
    console.warn(
      `[records] RECORDS_WEBHOOK_URL is not set; ${kind} record logged only`,
      JSON.stringify(payload),
    );
    return { stored: false, reason: "not-configured" };
  }

  if (!WEBHOOK_URL.startsWith("https://")) {
    console.error("[records] RECORDS_WEBHOOK_URL must use https; refusing");
    return { stored: false, reason: "insecure-webhook" };
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(WEBHOOK_SECRET ? { "X-Records-Secret": WEBHOOK_SECRET } : {}),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      console.error(`[records] webhook returned ${response.status}`);
      return { stored: false, reason: "webhook-error" };
    }
    return { stored: true };
  } catch (error) {
    console.error("[records] webhook request failed", error);
    return { stored: false, reason: "webhook-unreachable" };
  }
}
