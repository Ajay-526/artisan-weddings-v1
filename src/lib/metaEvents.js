// Browser side of Meta tracking: fires a Pixel event and its Conversions API
// twin with one shared event_id, so Meta counts the pair once.
// Nothing is sent unless the Pixel itself has loaded, so server events always
// follow the same rule that decides whether the Pixel runs.

function newEventId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `e-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

// Sends the server-side copy of an event via /api/meta-events.
function sendServerEvent(eventName, eventId, customData) {
  const body = JSON.stringify({
    eventName,
    eventId,
    eventSourceUrl: window.location.href,
    customData,
  });
  const sent =
    navigator.sendBeacon &&
    navigator.sendBeacon(
      "/api/meta-events",
      new Blob([body], { type: "application/json" }),
    );
  if (!sent) {
    fetch("/api/meta-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  }
}

// Pixel + Conversions API. `custom` uses fbq("trackCustom") for events that
// are not Meta standard events.
export function trackMeta(eventName, customData = {}, { custom = false } = {}) {
  if (typeof window === "undefined" || !window.fbq) return;

  const eventId = newEventId();
  window.fbq(custom ? "trackCustom" : "track", eventName, customData, {
    eventID: eventId,
  });
  sendServerEvent(eventName, eventId, customData);
}
