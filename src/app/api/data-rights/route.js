import {
  clean,
  clientIp,
  hashIp,
  rateLimited,
  storeRecord,
} from "@/lib/records";
import { REQUEST_TYPES } from "@/lib/dataRights";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Data Principal requests under DPDP Act ss.11-14.
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

  // Honeypot: real people never see or fill this field.
  if (clean(body?.website)) {
    return Response.json({ stored: true, reference: "AW-DR-OK" });
  }

  const type = clean(body?.type, 20);
  const name = clean(body?.name, 120);
  const email = clean(body?.email, 200);
  const phone = clean(body?.phone, 30);
  const details = clean(body?.details, 3000);

  if (!REQUEST_TYPES[type] || !name || !EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please choose a request type and give your name and email." },
      { status: 400 },
    );
  }
  if (body?.declaration !== true) {
    return Response.json(
      { error: "Please confirm the declaration." },
      { status: 400 },
    );
  }

  const reference = `AW-DR-${Date.now().toString(36).toUpperCase()}`;

  const result = await storeRecord("data-rights-request", {
    reference,
    type,
    typeLabel: REQUEST_TYPES[type],
    name,
    email,
    phone,
    details,
    // Respond within the timeline in the Privacy Notice; see DPDP_PROGRESS.md.
    status: "received",
    userAgent: clean(request.headers.get("user-agent"), 300),
    ipHash: hashIp(ip),
  });

  return Response.json(
    { ...result, reference },
    { status: result.stored ? 201 : 202 },
  );
}
