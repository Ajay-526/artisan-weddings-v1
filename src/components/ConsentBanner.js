"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  TRACKER_PURPOSES,
  getTrackerConsent,
  onOpenConsentSettings,
  saveTrackerConsent,
} from "@/lib/consent";

const noneSelected = Object.fromEntries(
  TRACKER_PURPOSES.map((purpose) => [purpose.id, false]),
);

// First-party cookies set by GTM/GA and the Meta Pixel. Cleared when the
// visitor withdraws consent so tracking stops, not just future loads.
const TRACKER_COOKIES = [/^_ga/, /^_gid$/, /^_gat/, /^_gcl/, /^_fbp$/, /^_fbc$/];

function clearTrackerCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!TRACKER_COOKIES.some((pattern) => pattern.test(name))) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    });
  });
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [customise, setCustomise] = useState(false);
  const [choices, setChoices] = useState(noneSelected);

  useEffect(() => {
    // Reading localStorage must wait until after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (getTrackerConsent() === null) setOpen(true);
    return onOpenConsentSettings(() => {
      setChoices({ ...noneSelected, ...(getTrackerConsent() || {}) });
      setCustomise(true);
      setOpen(true);
    });
  }, []);

  function save(purposes) {
    const previous = getTrackerConsent() || {};
    saveTrackerConsent(purposes);
    setOpen(false);
    setCustomise(false);

    const withdrawn = Object.keys(previous).some(
      (id) => previous[id] && !purposes[id],
    );
    if (withdrawn) {
      // Scripts that already ran can't be unloaded; clear their cookies and
      // reload so nothing keeps running without consent.
      clearTrackerCookies();
      window.location.reload();
    }
  }

  if (!open) return null;

  const allOn = Object.fromEntries(
    TRACKER_PURPOSES.map((purpose) => [purpose.id, true]),
  );

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-sm border border-[#d4b483]/30 bg-[#1c1410]/97 p-5 text-[#f3e9dc] shadow-2xl backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <p id="consent-title" className="font-serif text-lg">
        Your privacy, your choice
      </p>
      <p className="mt-2 text-sm leading-6 text-[#e8dccb]">
        We use analytics and marketing tools only if you allow them. The site
        works fully without them. You can change your choice any time from
        “Cookie settings” at the bottom of every page. Read our{" "}
        <Link href="/privacy-policy" className="underline text-[#d4b483]">
          Privacy Notice
        </Link>
        .
      </p>

      {customise && (
        <fieldset className="mt-4 space-y-3">
          <legend className="sr-only">Choose which tools to allow</legend>
          <label className="flex items-start gap-3 text-sm opacity-80">
            <input type="checkbox" checked disabled className="mt-1" />
            <span>
              <span className="block font-medium">Strictly necessary</span>
              <span className="text-xs text-[#cbbba6]">
                Needed to show the site and remember this choice. Always on.
              </span>
            </span>
          </label>
          {TRACKER_PURPOSES.map((purpose) => (
            <label
              key={purpose.id}
              className="flex cursor-pointer items-start gap-3 text-sm"
            >
              <input
                type="checkbox"
                name={purpose.id}
                checked={Boolean(choices[purpose.id])}
                onChange={(event) =>
                  setChoices((current) => ({
                    ...current,
                    [purpose.id]: event.target.checked,
                  }))
                }
                className="mt-1 accent-[#d4b483]"
              />
              <span>
                <span className="block font-medium">{purpose.label}</span>
                <span className="text-xs text-[#cbbba6]">
                  {purpose.description}
                </span>
              </span>
            </label>
          ))}
        </fieldset>
      )}

      {/* Reject and accept are equally prominent: no nudging (DPDP s.6). */}
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => save(noneSelected)}
          className="rounded-full border border-[#d4b483]/70 px-5 py-2 text-sm transition hover:bg-[#d4b483]/15"
        >
          Reject non-essential
        </button>
        {customise ? (
          <button
            type="button"
            onClick={() => save(choices)}
            className="rounded-full border border-[#d4b483]/70 px-5 py-2 text-sm transition hover:bg-[#d4b483]/15"
          >
            Save my choices
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCustomise(true)}
            className="rounded-full border border-[#d4b483]/70 px-5 py-2 text-sm transition hover:bg-[#d4b483]/15"
          >
            Choose
          </button>
        )}
        <button
          type="button"
          onClick={() => save(allOn)}
          className="rounded-full border border-[#d4b483]/70 px-5 py-2 text-sm transition hover:bg-[#d4b483]/15"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
