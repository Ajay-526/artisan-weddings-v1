"use client";

import { openConsentSettings } from "@/lib/consent";

// Reopens the consent banner so visitors can change or withdraw consent
// as easily as they gave it (DPDP Act s.6(4)).
export default function CookieSettingsButton({ className = "", children }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      {children || "Cookie settings"}
    </button>
  );
}
