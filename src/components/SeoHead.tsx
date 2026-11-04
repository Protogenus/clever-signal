import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "../data/site.ts";

export interface SeoProps {
  title: string;
  description: string;
  /** JSON-LD structured data object(s) for this page. */
  structuredData?: object | object[];
}

/** Sets document title, meta description, canonical, and OG/social tags per route. */
export function SeoHead({ title, description, structuredData }: SeoProps) {
  const location = useLocation();
  const canonical = `${SITE.canonicalBase}${location.pathname}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      const selector = `meta[${attr}="${key}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:site_name", SITE.name);
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let link = document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // Structured data: replace any prior JSON-LD blocks with this page's.
    document.head
      .querySelectorAll('script[data-seo-jsonld="true"]')
      .forEach((el) => el.remove());
    if (structuredData) {
      const blocks = Array.isArray(structuredData) ? structuredData : [structuredData];
      for (const block of blocks) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify({
          "@context": "https://schema.org",
          ...block,
        });
        document.head.appendChild(script);
      }
    }
  }, [title, description, canonical, structuredData]);

  return null;
}

export const organizationJsonLd = {
  "@type": "Organization",
  name: SITE.name,
  url: SITE.canonicalBase,
  slogan: SITE.tagline,
  description:
    "Clever Signal is an independent software company building specialized tools for " +
    "businesses that make, produce, sell, and manage physical products.",
};
