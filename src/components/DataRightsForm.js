"use client";

import { useState } from "react";
import { REQUEST_TYPES } from "@/lib/dataRights";
import { grievance } from "@/lib/studio";

function mailtoFallback(data, reference) {
  const lines = [
    `Data rights request ${reference || ""}`.trim(),
    `Type: ${REQUEST_TYPES[data.type] || data.type}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "-"}`,
    `Details: ${data.details || "-"}`,
  ];
  const subject = encodeURIComponent(
    `Data rights request — ${REQUEST_TYPES[data.type] || data.type}`,
  );
  return `mailto:${grievance.email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export default function DataRightsForm() {
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());
    const payload = { ...data, declaration: data.declaration === "yes" };

    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/data-rights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await response.json().catch(() => ({}));
      if (response.status === 400) {
        setError(json.error || "Please check the form and try again.");
        setStatus("idle");
        return;
      }
      // stored:false means the server couldn't save it durably. Don't claim
      // it was received; send the person to email instead.
      setResult({ ...json, data });
      setStatus(json.stored ? "stored" : "not-stored");
    } catch {
      setResult({ data });
      setStatus("not-stored");
    }
  }

  if (status === "stored") {
    return (
      <div className="rounded-sm border border-[#e3d8c8] bg-white p-6 text-sm leading-7">
        <p className="font-serif text-2xl text-[#1c1612]">Request received</p>
        <p className="mt-3">
          Your reference is <strong>{result.reference}</strong>. We will reply
          to {result.data.email} within 30 days. We may ask you to confirm your
          identity before we act on it.
        </p>
      </div>
    );
  }

  if (status === "not-stored") {
    return (
      <div className="rounded-sm border border-[#e3d8c8] bg-white p-6 text-sm leading-7">
        <p className="font-serif text-2xl text-[#1c1612]">
          One more step, please
        </p>
        <p className="mt-3">
          We couldn’t save your request online just now. Please send it to our
          Grievance Officer by email so it isn’t lost — we’ve filled it in for
          you.
        </p>
        {grievance.email ? (
          <a
            href={mailtoFallback(result.data, result.reference)}
            className="btn-wine mt-5"
          >
            Email my request
          </a>
        ) : (
          <p className="mt-3">
            Please message us on WhatsApp using the contact details below.
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <select
        required
        name="type"
        defaultValue=""
        className="sm:col-span-2"
        aria-label="What would you like to do?"
      >
        <option value="" disabled>
          What would you like to do? *
        </option>
        {Object.entries(REQUEST_TYPES).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <input required name="name" placeholder="Your name *" />
      <input required type="email" name="email" placeholder="Email address *" />
      <input
        name="phone"
        placeholder="Phone number (optional)"
        className="sm:col-span-2"
      />
      <textarea
        name="details"
        rows={5}
        placeholder="Tell us what you need. For corrections, say what should change. If you sent an enquiry, the approximate date helps us find it."
        className="sm:col-span-2"
      />
      {/* Honeypot for bots; hidden from people and screen readers. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#4a4038] sm:col-span-2">
        <input
          type="checkbox"
          name="declaration"
          value="yes"
          required
          className="mt-0.5"
        />
        <span>
          I confirm this request is about my own personal data (or I am
          authorised to act for the person), and I agree that Artisan Weddings
          may use these details only to handle this request. *
        </span>
      </label>
      {error ? (
        <p role="alert" className="text-sm text-[#6b2430] sm:col-span-2">
          {error}
        </p>
      ) : null}
      <div className="flex justify-center pt-2 sm:col-span-2">
        <button
          type="submit"
          className="btn-wine"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send request →"}
        </button>
      </div>
    </form>
  );
}
