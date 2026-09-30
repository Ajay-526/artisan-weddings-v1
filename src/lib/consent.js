// Consent storage for the DPDP Act, 2023 (India).
//
// Two kinds of consent live here:
//   1. Tracker consent (analytics / marketing), chosen in the consent banner.
//   2. Per-purpose consent given on forms (enquiry, marketing updates).
//
// Every choice produces a consent record. A copy is kept in this browser
// (localStorage) and sent to /api/consent so the studio can prove when and
// for what the person consented (DPDP s.6(10)).

export const NOTICE_VERSION = "2026-09-30";

const CHOICE_KEY = "aw_consent_choice_v1";
const LOG_KEY = "aw_consent_log_v1";
const CHANGE_EVENT = "aw:consent-change";
const OPEN_EVENT = "aw:consent-open";

// Purposes a visitor can switch on in the banner. Anything not listed here
// (the site itself, the hero video) is strictly necessary and loads anyway.
export const TRACKER_PURPOSES = [
  {
    id: "analytics",
    label: "Analytics",
    description:
      "Google Tag Manager / Google Analytics, to understand which pages people visit so we can improve the site.",
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Meta (Facebook/Instagram) Pixel, to measure our ads and show our work to people who visited this site.",
  },
];

function safeGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage blocked (private mode, browser settings). The choice still
    // applies for this page view; the banner will ask again next time.
  }
}

export function newConsentId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `c-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

// Returns { analytics: bool, marketing: bool, ... } or null if the visitor
// has not chosen yet (or the stored choice was made under an older notice).
export function getTrackerConsent() {
  if (typeof window === "undefined") return null;
  const raw = safeGet(CHOICE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed.noticeVersion !== NOTICE_VERSION) return null;
    return parsed.purposes || null;
  } catch {
    return null;
  }
}

export function hasTrackerConsent(purpose) {
  return Boolean(getTrackerConsent()?.[purpose]);
}

// Appends a record to the local log and sends it to the server log.
// Never blocks the caller: a failed network call is kept locally and
// reported in the console.
export function recordConsent({ source, purposes, subjectHint }) {
  const record = {
    consentId: newConsentId(),
    source,
    purposes,
    noticeVersion: NOTICE_VERSION,
    timestamp: new Date().toISOString(),
    page: typeof window !== "undefined" ? window.location.pathname : "",
    subjectHint: subjectHint || undefined,
  };

  if (typeof window !== "undefined") {
    let log = [];
    try {
      log = JSON.parse(safeGet(LOG_KEY) || "[]");
    } catch {
      log = [];
    }
    log.push(record);
    safeSet(LOG_KEY, JSON.stringify(log.slice(-50)));

    const body = JSON.stringify(record);
    const sent =
      typeof navigator !== "undefined" &&
      navigator.sendBeacon &&
      navigator.sendBeacon(
        "/api/consent",
        new Blob([body], { type: "application/json" }),
      );
    if (!sent) {
      fetch("/api/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch((error) =>
        console.warn("Consent record could not be sent", error),
      );
    }
  }

  return record;
}

export function saveTrackerConsent(purposes) {
  const record = recordConsent({ source: "consent-banner", purposes });
  safeSet(
    CHOICE_KEY,
    JSON.stringify({
      purposes,
      noticeVersion: NOTICE_VERSION,
      consentId: record.consentId,
      timestamp: record.timestamp,
    }),
  );
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: purposes }));
  return record;
}

export function onTrackerConsentChange(callback) {
  const handler = (event) => callback(event.detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

// Lets any button (e.g. "Cookie settings" in the footer) reopen the banner.
export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenConsentSettings(callback) {
  window.addEventListener(OPEN_EVENT, callback);
  return () => window.removeEventListener(OPEN_EVENT, callback);
}
