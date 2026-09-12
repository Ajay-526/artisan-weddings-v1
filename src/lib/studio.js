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
  siteUrl: env(process.env.NEXT_PUBLIC_SITE_URL, "https://artisanweddings.in"),
  instagram: env(process.env.NEXT_PUBLIC_INSTAGRAM),
  youtube: env(process.env.NEXT_PUBLIC_YOUTUBE),
  facebook: env(process.env.NEXT_PUBLIC_FACEBOOK),
  pinterest: env(process.env.NEXT_PUBLIC_PINTEREST),
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
