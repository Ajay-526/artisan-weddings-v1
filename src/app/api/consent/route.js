import {
  clean,
  clientIp,
  hashIp,
  rateLimited,
  storeRecord,
} from "@/lib/records";

const SOURCES = new Set(["consent-banner", "enquiry-form", "data-rights-form"]);

// Receives consent records from src/lib/consent.js and stores them so the
// studio can show when, where and for which purposes consent was given.
export async function POST(request) {
  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return Response.json({ stored: false }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || !SOURCES.has(body.source) || typeof body.purposes !== "object") {
    return Response.json({ error: "Invalid consent record" }, { status: 400 });
  }

  const purposes = Object.fromEntries(
    Object.entries(body.purposes)
      .slice(0, 10)
      .map(([key, value]) => [clean(key, 40), Boolean(value)]),
  );

  const result = await storeRecord("consent", {
    consentId: clean(body.consentId, 80),
    source: body.source,
    purposes,
    noticeVersion: clean(body.noticeVersion, 20),
    clientTimestamp: clean(body.timestamp, 40),
    page: clean(body.page, 200),
    // Name/email given on the form, so a withdrawal or access request can be
    // matched to this record. Only sent from forms, never from the banner.
    subjectHint: clean(body.subjectHint, 200) || undefined,
    userAgent: clean(request.headers.get("user-agent"), 300),
    ipHash: hashIp(ip),
  });

  return Response.json(result, { status: result.stored ? 201 : 202 });
}
