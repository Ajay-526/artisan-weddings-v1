import "server-only";

// Meta Conversions API (server-side events), sent alongside the browser Pixel.
// Each event carries the same event_id as its Pixel twin so Meta counts it
// once (deduplication). Only called from /api/meta-events, which the browser
// calls only once the Pixel has loaded, so server events follow whatever
// decides whether the Pixel loads (the consent banner, once that ships).
//
// Data minimisation: we send what the Pixel itself would see (IP,
// user agent, the _fbp/_fbc cookies, page URL) and nothing typed into the
// enquiry form. No name, email or phone leaves the site through here.

const PIXEL_ID =
  process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const API_VERSION = process.env.META_GRAPH_API_VERSION || "v24.0";
// Set while checking events in Events Manager > Test events; leave empty in production.
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

export function metaCapiConfigured() {
  return Boolean(PIXEL_ID && ACCESS_TOKEN);
}

export async function sendMetaEvent({
  eventName,
  eventId,
  eventSourceUrl,
  customData,
  ip,
  userAgent,
  fbp,
  fbc,
}) {
  if (!metaCapiConfigured()) {
    return { sent: false, reason: "not-configured" };
  }

  const userData = {
    ...(ip ? { client_ip_address: ip } : {}),
    ...(userAgent ? { client_user_agent: userAgent } : {}),
    ...(fbp ? { fbp } : {}),
    ...(fbc ? { fbc } : {}),
  };

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: eventSourceUrl || undefined,
        user_data: userData,
        custom_data:
          customData && Object.keys(customData).length ? customData : undefined,
      },
    ],
    ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error(
        `[meta-capi] ${eventName} rejected (${response.status})`,
        detail.slice(0, 500),
      );
      return { sent: false, reason: "meta-error" };
    }
    return { sent: true };
  } catch (error) {
    console.error(`[meta-capi] ${eventName} request failed`, error);
    return { sent: false, reason: "meta-unreachable" };
  }
}
