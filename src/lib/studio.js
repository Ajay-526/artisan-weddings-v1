function env(value, fallback = "") {
  return (value || fallback).trim();
}

function digits(value) {
  return (value || "").replace(/\D/g, "");
}

export const studio = {
  whatsapp: digits(env(process.env.NEXT_PUBLIC_WHATSAPP)),
  telegram: env(process.env.NEXT_PUBLIC_TELEGRAM).replace(/^@/, ""),
  email: env(process.env.NEXT_PUBLIC_EMAIL),
  phone: env(process.env.NEXT_PUBLIC_PHONE),
  siteUrl: env(process.env.NEXT_PUBLIC_SITE_URL, "https://www.artisanweddings.in"),
  instagram: env(process.env.NEXT_PUBLIC_INSTAGRAM),
  youtube: env(process.env.NEXT_PUBLIC_YOUTUBE),
  facebook: env(process.env.NEXT_PUBLIC_FACEBOOK),
  pinterest: env(process.env.NEXT_PUBLIC_PINTEREST),
};

// Grievance Officer / contact person for personal-data questions
// (DPDP Act s.8(9) and s.13). Falls back to the studio email and WhatsApp.
export const grievance = {
  name: env(process.env.NEXT_PUBLIC_GRIEVANCE_NAME, "Grievance Officer"),
  email: env(process.env.NEXT_PUBLIC_GRIEVANCE_EMAIL, studio.email),
  phone: digits(env(process.env.NEXT_PUBLIC_GRIEVANCE_PHONE, studio.whatsapp)),
  address: env(process.env.NEXT_PUBLIC_GRIEVANCE_ADDRESS),
};

export function whatsappDisplay(number = studio.whatsapp) {
  const n = digits(number);
  if (n.length === 12 && n.startsWith("91")) {
    return `+91 ${n.slice(2, 7)} ${n.slice(7)}`;
  }
  if (n.length === 10) return `+91 ${n.slice(0, 5)} ${n.slice(5)}`;
  return n ? `+${n}` : "";
}

export function socialLinks() {
  return [
    studio.instagram,
    studio.youtube,
    studio.facebook,
    studio.pinterest,
  ].filter(Boolean);
}
