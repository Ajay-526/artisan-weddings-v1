"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { studio } from "@/lib/studio";

const channels = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    hint: "Opens a chat with your details",
    color: "#25D366",
    icon: faWhatsapp,
  },
  {
    id: "instagram",
    label: "Instagram",
    hint: "Opens Instagram to message us",
    color: "#c13584",
    icon: faInstagram,
  },
  {
    id: "email",
    label: "Email",
    hint: "Opens your mail app",
    color: "#6b2430",
    icon: faEnvelope,
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
    `Budget: ${data.budget || "-"}`,
    `Note: ${data.note || "-"}`,
  ].join("\n");
}

export default function EnquiryForm() {
  const [channel, setChannel] = useState("whatsapp");
  const [date, setDate] = useState("");
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
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
    } else if (channel === "instagram") {
      await navigator.clipboard?.writeText(text);
      window.open(studio.instagram, "_blank", "noopener,noreferrer");
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
          {channel === "email"
            ? "your mail app"
            : channel === "instagram"
              ? "Instagram with your enquiry copied to the clipboard"
              : channel}
          . If nothing appeared, allow pop-ups and try again.
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
      : channel === "instagram"
        ? "Message on Instagram"
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
                <FontAwesomeIcon icon={c.icon} aria-hidden="true" />
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
      <div className="relative">
        {!date && (
          <span className="pointer-events-none absolute inset-y-0 left-[0.85rem] flex items-center text-sm text-[#6b5f52]">
            Wedding Date *
          </span>
        )}
        <input
          required
          type="date"
          name="date"
          aria-label="Wedding Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onClick={(e) => e.currentTarget.showPicker?.()}
          onKeyDown={(e) => e.preventDefault()}
          onPaste={(e) => e.preventDefault()}
          className={date ? "" : "date-input-empty text-transparent"}
        />
      </div>
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
      <select required name="budget" defaultValue="">
        <option value="" disabled>
          Select your budget *
        </option>
        <option>3L to 4L</option>
        <option>4L to 5L</option>
        <option>5L +</option>
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
