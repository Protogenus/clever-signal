# Clever Signal Website — Build Checklist (from the master brief, incl. Materialist + Thrivepoint expansion)

14 routes: `/`, `/products`, `/products/materialist`, `/products/thrivepoint`,
`/products/stockroom`, `/products/stagepoint`, `/products/orderly`, `/products/elixer`,
`/products/cutline`, `/products/sublium`, `/products/threadcount`, `/products/wardrobe`,
`/about`, `/contact`.

## Stage 1 — Foundation
- [ ] App architecture (Vite + React + TS + react-router)
- [ ] Routing configured for all 14 routes (+ 404)
- [ ] Centralized product data module: id, name, slug, category, short/full description,
      feature list, audience, status, image refs, integration relationships, CTA config, SEO title/description
- [ ] Shared page components (layout, header/nav, footer, SEO head, product card, artwork)
- [ ] Metadata handling per route

## Stage 2 — Website implementation
- [ ] Homepage: intro, 10-product directory preview (name, category, short desc, purpose, link, illustration),
      ecosystem section (independent products, optional integrations), closing section
- [ ] /products: complete directory of 10
- [ ] 10 product pages, each with: name+category, positioning statement, problem solved,
      audience, detailed features, practical examples, primary workflow,
      optional integrations (planned, contract-only), CTA — all product-specific content
- [ ] About page: philosophy, no invented founder/history/team/credentials
- [ ] Contact page: configurable contact info (TBD placeholders, clearly marked), no fake form
- [ ] Ecosystem relationships displayed (Stockroom→inventory, StagePoint→production,
      Orderly→orders, Elixer→formulas, Cutline→cutting, Sublium→sublimation prepress,
      Threadcount→embroidery, Wardrobe→garments, Materialist→costing, Thrivepoint→growth)
- [ ] No monolith implication; no product requires another

## Stage 3 — Functional implementation
- [ ] Nav works on all pages; all 14 routes directly accessible; every internal link verified
- [ ] Responsive (desktop/tablet/mobile)
- [ ] SEO: unique title+meta per page, canonical URLs, OG + social meta, structured data,
      sitemap.xml, robots.txt, alt text, internal links between related products
- [ ] Product data renders correctly from the central module

## Stage 4 — Final delivery
- [ ] Production build green; TypeScript checks green
- [ ] All 14 routes visited and verified; nav + internal links clicked, no dead links
- [ ] sitemap.xml + robots.txt generated and served; spot-checked title/meta/OG per page
- [ ] Implementation report with this checklist reported line by line

## Honesty rules (fail the build if violated)
- [ ] All 10 statuses "In development" / "Coming soon"; nothing claimed available/shipped/purchasable
- [ ] No testimonials, no pricing, no invented emails/socials, no founder bio/team/history/office/credentials
- [ ] No fake product screenshots; abstract brand illustrations only (generative halftone SVG)
- [ ] No AI features, no chatbot, no AI APIs; no unnecessary backend; dependencies justified
- [ ] Integrations presented as planned/contract-only, never claimed as existing
