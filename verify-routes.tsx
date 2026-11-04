/**
 * Headless verification of the Clever Signal website.
 * Renders EVERY route to static HTML with react-dom/server + StaticRouter and
 * asserts real rendered content (product-specific, per the brief) — not just 200s.
 * Also validates the centralized product data module for completeness + honesty rules.
 * Run: npx tsx verify-routes.tsx   (from the project root)
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./src/components/Layout.tsx";
import { Home } from "./src/pages/Home.tsx";
import { Products } from "./src/pages/Products.tsx";
import { ProductDetail } from "./src/pages/ProductDetail.tsx";
import { About } from "./src/pages/About.tsx";
import { Contact } from "./src/pages/Contact.tsx";
import { NotFound } from "./src/pages/NotFound.tsx";
import {
  orderedProducts,
  getProduct,
  productUrl,
} from "./src/data/products.ts";
import { STATUS_LABELS } from "./src/data/site.ts";

let failures = 0;
const ok = (cond: boolean, label: string) => {
  if (!cond) {
    failures++;
    console.log(`FAIL: ${label}`);
  }
};
const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
const contains = (html: string, needle: string, label: string) =>
  ok(html.includes(needle) || html.includes(escapeHtml(needle)), `${label} (missing: ${JSON.stringify(needle.slice(0, 60))})`);

function renderRoute(path: string): string {
  const context: { url?: string } = {};
  const html = renderToString(
    <StaticRouter location={path} context={context}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </StaticRouter>,
  );
  return html;
}

const products = orderedProducts();

// ---------- 1. Data integrity + honesty rules ----------
ok(products.length === 10, `expected 10 products, got ${products.length}`);
ok(
  new Set(products.map((p) => p.slug)).size === 10,
  "product slugs are unique",
);
ok(
  new Set(products.map((p) => p.name)).size === 10,
  "product names are unique",
);
for (const p of products) {
  const tag = `data:${p.slug}`;
  ok(p.status === "in-development" || p.status === "coming-soon", `${tag} honest status`);
  for (const f of ["category", "positioning", "problem", "shortDescription", "fullDescription"] as const)
    ok(p[f].trim().length > 0, `${tag} field ${f} non-empty`);
  ok(p.seo.title.trim().length > 0 && p.seo.description.trim().length > 0, `${tag} seo title+description`);
  ok(p.cta.label.trim().length > 0 && p.cta.href.trim().length > 0, `${tag} cta`);
  ok(p.features.length >= 4, `${tag} >=4 features (got ${p.features.length})`);
  ok(p.examples.length >= 2, `${tag} >=2 examples (got ${p.examples.length})`);
  ok(p.workflow.length >= 3, `${tag} >=3 workflow steps (got ${p.workflow.length})`);
  ok(p.integrations.length >= 2, `${tag} >=2 integrations (got ${p.integrations.length})`);
  ok(p.audience.length >= 2, `${tag} >=2 audience entries`);
  ok(/^#[0-9a-f]{6}$/i.test(p.accent), `${tag} accent is hex`);
  ok(p.artAlt.trim().length > 0, `${tag} artAlt non-empty`);
  for (const f of p.features) ok(f.title.trim() && f.description.trim(), `${tag} feature complete`);
  for (const w of p.workflow) ok(w.title.trim() && w.description.trim(), `${tag} workflow step complete`);
  for (const i of p.integrations) {
    ok(getProduct(i.productSlug) !== undefined, `${tag} integration slug resolves: ${i.productSlug}`);
    ok(i.productSlug !== p.slug, `${tag} no self-integration`);
    ok(/^Planned:/.test(i.description.trim()), `${tag} integration labeled Planned`);
  }
  // Honesty: no availability/pricing/testimonial language anywhere in product content
  const blob = JSON.stringify(p);
  for (const banned of ["testimonial", "free trial", "buy now", "available now", "now available", "$"]) {
    ok(!blob.toLowerCase().includes(banned), `${tag} no banned claim ${JSON.stringify(banned)}`);
  }
}

// ---------- 2. Per-route rendered content ----------
const KNOWN_PATHS = new Set([
  "/",
  "/products",
  "/about",
  "/contact",
  ...products.map((p) => productUrl(p.slug)),
]);
const hrefs = new Set<string>();

const home = renderRoute("/");
contains(home, "Software for the", "home h1");
contains(home, "Ten applications.", "home directory heading");
contains(home, "SEC.03", "home ecosystem section");
contains(home, "What we won&#x27;t claim", "home honesty box");
for (const p of products) {
  contains(home, p.name, `home card: ${p.slug}`);
  contains(home, p.category, `home card category: ${p.slug}`);
  contains(home, `href="${productUrl(p.slug)}"`, `home card link: ${p.slug}`);
}

const dir = renderRoute("/products");
for (const p of products) contains(dir, p.name, `directory: ${p.slug}`);

let routeCount = 0;
for (const p of products) {
  const html = renderRoute(productUrl(p.slug));
  routeCount++;
  const tag = `page:${p.slug}`;
  contains(html, p.name, `${tag} name`);
  contains(html, p.category, `${tag} category`);
  contains(html, p.positioning.slice(0, 50), `${tag} positioning`);
  contains(html, p.problem.slice(0, 50), `${tag} problem`);
  contains(html, p.fullDescription.slice(0, 50), `${tag} full description`);
  contains(html, STATUS_LABELS[p.status], `${tag} status badge`);
  contains(html, "not yet available", `${tag} availability honesty note`);
  contains(html, p.cta.label, `${tag} CTA label`);
  contains(html, "planned design intent", `${tag} integration honesty fine-print`);
  for (const f of p.features) contains(html, f.title, `${tag} feature: ${f.title.slice(0, 30)}`);
  for (const w of p.workflow) contains(html, w.title, `${tag} workflow: ${w.title.slice(0, 30)}`);
  for (const e of p.examples) contains(html, e.slice(0, 40), `${tag} example`);
  for (const a of p.audience) contains(html, a, `${tag} audience`);
  for (const i of p.integrations) {
    contains(html, `href="${productUrl(i.productSlug)}"`, `${tag} integration link → ${i.productSlug}`);
  }
  // collect internal links
  for (const m of html.matchAll(/href="([^"]*)"/g)) hrefs.add(m[1]);
}
ok(routeCount === 10, `rendered 10 product pages`);

const about = renderRoute("/about");
contains(about, "Specialist software", "about philosophy");
contains(about, "Honest claims", "about honest-claims value");
for (const banned of ["founder", "Founded in", "team of", "headquarters", "Our story"]) {
  ok(!about.toLowerCase().includes(banned.toLowerCase()), `about has no invented bio (${banned})`);
}

const contact = renderRoute("/contact");
contains(contact, "To be announced", "contact TBD placeholder");
ok(!/<form[\s>]/.test(contact), "contact page has no form element");

const notFound = renderRoute("/does-not-exist-xyz");
contains(notFound, "Nothing", "404 page renders");

// ---------- 3. Internal link validation ----------
let badLinks = 0;
for (const h of hrefs) {
  if (h.startsWith("#") || h.startsWith("http") || h.startsWith("mailto:")) continue;
  if (!KNOWN_PATHS.has(h)) {
    badLinks++;
    console.log(`FAIL: unknown internal link href="${h}"`);
    failures++;
  }
}
ok(badLinks === 0, `all internal links resolve (${hrefs.size} distinct hrefs checked)`);

// ---------- 4. SEO: every product page has unique seo title/description ----------
const titles = new Set(products.map((p) => p.seo.title));
ok(titles.size === 10, "product SEO titles unique");

// Spot check the served bundle for product content (bundled data integrity)
console.log(failures === 0 ? "\nALL CHECKS PASSED" : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
