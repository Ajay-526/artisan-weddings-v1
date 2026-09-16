"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

const locations = {
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Other city"],
  "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Tirupati", "Other city"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Other city"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Other city"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Other city"],
  Delhi: ["New Delhi", "Other city"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Other city"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Other city"],
  Goa: ["Panaji", "Other city"],
  Other: ["Other city"],
};

function buildMessage(data) {
  return [
    "Artisan Weddings enquiry",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Wedding date: ${data.date}`,
    `State: ${data.state}`,
    `City: ${data.city}`,
    `Ceremonies: ${data.ceremonies || "-"}`,
    `Budget: ${data.budget || "-"}`,
    `Note: ${data.note || "-"}`,
  ].join("\n");
}

export default function EnquiryForm() {
  const router = useRouter();
  const [channel, setChannel] = useState("whatsapp");
  const [date, setDate] = useState("");
  const [state, setState] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const text = buildMessage(data);
    const qualified =
      data.state === "Telangana" || data.state === "Andhra Pradesh";

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
      if (window.fbq) {
        window.fbq(
          "trackCustom",
          qualified ? "QualifiedEnquiry" : "OutOfAreaEnquiry",
          {
            state: data.state,
            city: data.city,
          },
        );
      }
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "enquiry_submit",
          enquiry_channel: channel,
          enquiry_state: data.state,
          enquiry_city: data.city,
          enquiry_qualified: qualified,
        });
      }
    }
    router.push(qualified ? "/contact/success" : "/contact/sorry");
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
      <select
        required
        name="state"
        value={state}
        onChange={(event) => setState(event.target.value)}
      >
        <option value="" disabled>
          Select your state *
        </option>
        {Object.keys(locations).map((stateName) => (
          <option key={stateName}>{stateName}</option>
        ))}
      </select>
      <select required name="city" defaultValue="" disabled={!state}>
        <option value="" disabled>
          {state ? "Select your city *" : "Select state first"}
        </option>
        {(locations[state] || []).map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
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
