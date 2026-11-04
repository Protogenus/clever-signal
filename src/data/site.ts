// Clever Signal — site-wide configuration.
// Contact details are placeholders (TBD) until Blake provides real ones.
// Nothing here invents an email address, social account, address, or team.

export const SITE = {
  name: "Clever Signal",
  tagline: "Software for the people who make things.",
  // Canonical production base URL. Update if the domain changes.
  // NOTE: clever-signal.vercel.app is owned by an unrelated party; Vercel
  // assigned this project the stable production domain clever-signal-omega.vercel.app.
  canonicalBase: "https://clever-signal-omega.vercel.app",
  contact: {
    // Configurable placeholders — marked TBD on the contact page until provided.
    email: null as string | null, // e.g. "hello@cleversignal.example" — TBD
    socials: [] as { label: string; url: string }[], // TBD
  },
} as const;

export const STATUS_LABELS = {
  "in-development": "In development",
  "coming-soon": "Coming soon",
  available: "Available",
} as const;

export type ProductStatus = keyof typeof STATUS_LABELS;
