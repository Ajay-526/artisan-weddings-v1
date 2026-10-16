import { sendMetaEvent } from "@/lib/metaCapi";

// Receives events from the browser (src/lib/metaEvents.js and the Pixel
// snippet in src/components/Analytics.js) and forwards them to the Meta
// Conversions API. The browser sends the same event_id it gave the Pixel so
// Meta deduplicates the pair.

// Events the site actually fires, with the custom_data keys each may carry.
const EVENTS = {
  PageView: [],
  Lead: ["content_name"],
  QualifiedEnquiry: ["state", "city"],
  OutOfAreaEnquiry: ["state", "city"],
};

function clean(value, max = 500) {
  if (value === undefined || value === null) return "";
  return String(value).slice(0, max).trim();
}

function clientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    ""
  );
}

function cookie(request, name) {
  const match = (request.headers.get("cookie") || "")
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : undefined;
}

// Only accept calls from this site's own pages.
function sameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // same-origin sendBeacon/fetch may omit it
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}

// _fbc is set by the Pixel when a visitor arrives from an ad. If the cookie
// is not there yet (first page of the visit), build it from ?fbclid=.
function clickId(cookieValue, pageUrl) {
  if (cookieValue) return cookieValue;
  try {
    const fbclid = new URL(pageUrl).searchParams.get("fbclid");
    return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined;
  } catch {
    return undefined;
  }
}

export async function POST(request) {
  if (!sameOrigin(request)) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const allowedKeys = EVENTS[body?.eventName];
  if (!allowedKeys || typeof body.eventId !== "string" || !body.eventId) {
    return Response.json({ error: "Invalid event" }, { status: 400 });
  }

  const customData = Object.fromEntries(
    allowedKeys
      .filter((key) => body.customData?.[key] !== undefined)
      .map((key) => [key, clean(body.customData[key], 100)]),
  );
  const eventSourceUrl = clean(body.eventSourceUrl, 500);

  const result = await sendMetaEvent({
    eventName: body.eventName,
    eventId: clean(body.eventId, 80),
    eventSourceUrl,
    customData,
    ip: clientIp(request),
    userAgent: clean(request.headers.get("user-agent"), 400),
    fbp: cookie(request, "_fbp"),
    fbc: clickId(cookie(request, "_fbc"), eventSourceUrl),
  });

  return Response.json(result, { status: result.sent ? 200 : 202 });
}
