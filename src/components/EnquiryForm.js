"use client";

import { useState } from "react";
import { studio } from "@/lib/data";

const channels = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    hint: "Opens a chat with your details",
    color: "#25D366",
  },
  {
    id: "telegram",
    label: "Telegram",
    hint: "Sends a message in Telegram",
    color: "#2AABEE",
  },
  {
    id: "email",
    label: "Email",
    hint: "Opens your mail app",
    color: "#6b2430",
  },
];

function buildMessage(data) {
  return [
    "Artisan Weddings enquiry",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Wedding date: ${data.date}`,
    `City / venue: ${data.venue || "-"}`,
    `Ceremonies: ${data.ceremonies || "-"}`,
    `Note: ${data.note || "-"}`,
  ].join("\n");
}

export default function EnquiryForm() {
  const [channel, setChannel] = useState("whatsapp");
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const text = buildMessage(data);

    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else if (channel === "telegram") {
      window.open(
        `https://t.me/${studio.telegram}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      const subject = encodeURIComponent(`Wedding enquiry — ${data.name}`);
      window.location.href = `mailto:${studio.email}?subject=${subject}&body=${encodeURIComponent(text)}`;
    }
    if (typeof window !== "undefined") {
      if (window.fbq) window.fbq("track", "Lead", { content_name: channel });
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "enquiry_submit",
          enquiry_channel: channel,
        });
      }
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-[#e3d8c8] bg-white p-8 text-center">
        <p className="font-serif text-2xl">On its way.</p>
        <p className="mt-3 text-sm text-[#4a4038]">
          Your enquiry opened in{" "}
          {channel === "email" ? "your mail app" : channel}. If nothing
          appeared, allow pop-ups and try again.
        </p>
        <button
          type="button"
          className="btn-wine mt-6"
          onClick={() => setSent(false)}
        >
          Send another
        </button>
      </div>
    );
  }

  const actionLabel =
    channel === "whatsapp"
      ? "Send on WhatsApp"
      : channel === "telegram"
        ? "Send on Telegram"
        : "Send by Email";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <p className="mb-2 text-xs tracking-[0.16em] uppercase text-[#6b5a42]">
          How should we receive this?
        </p>
        <div className="grid grid-cols-3 gap-2">
          {channels.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setChannel(c.id)}
              className={`channel-card ${channel === c.id ? "active" : ""}`}
            >
              <span
                className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium text-white"
                style={{ background: c.color }}
              >
                {c.label[0]}
              </span>
              <span className="block text-sm">{c.label}</span>
              <span className="mt-1 hidden text-[10px] text-[#6b5f52] sm:block">
                {c.hint}
              </span>
            </button>
          ))}
        </div>
      </div>

      <input required name="name" placeholder="Your Name *" />
      <input required type="email" name="email" placeholder="Email Address *" />
      <input required name="phone" placeholder="Phone Number *" />
      <input required type="date" name="date" aria-label="Wedding Date" />
      <input name="venue" placeholder="City / Venue" />
      <select name="ceremonies" defaultValue="">
        <option value="" disabled>
          Which ceremonies are you planning?
        </option>
        <option>Full wedding (all rituals)</option>
        <option>Wedding day only</option>
        <option>Pre-wedding + wedding</option>
        <option>Destination wedding</option>
      </select>
      <textarea
        name="note"
        rows={4}
        placeholder="Tell us about your wedding..."
        className="sm:col-span-2"
      />
      <div className="sm:col-span-2 flex justify-center pt-2">
        <button type="submit" className="btn-wine">
          {actionLabel} →
        </button>
      </div>
    </form>
  );
}
