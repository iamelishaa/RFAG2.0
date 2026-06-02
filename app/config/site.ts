export const siteConfig = {
  name: "Rhema Faith AG Church",
  email: "info@rhemafaith.org",
  phoneDisplay: "(555) 123-4567",
  phoneHref: "+15551234567",
  addressLines: ["123 Church Street", "City, State 12345"],
  serviceTime: "Sundays at 10:00 AM",
} as const;

export function createMailto(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${siteConfig.email}?${params.toString()}`;
}
