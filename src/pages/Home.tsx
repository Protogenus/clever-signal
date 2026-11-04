import { Link } from "react-router-dom";
import { SITE } from "../data/site.ts";
import { orderedProducts, productUrl, getProduct } from "../data/products.ts";
import { SeoHead, organizationJsonLd } from "../components/SeoHead.tsx";
import { SectionLabel } from "../components/Layout.tsx";
import { ProductCard } from "../components/ProductCard.tsx";

const ECOSYSTEM_GROUPS: { title: string; body: string; slugs: string[] }[] = [
  {
    title: "Make",
    body: "Formulas, materials, production runs, and true costs — the work of creating the product.",
    slugs: ["elixer", "stockroom", "stagepoint", "materialist", "cutline"],
  },
  {
    title: "Sell",
    body: "Orders, fulfillment, and growth — the work of getting the product to customers and learning what works.",
    slugs: ["orderly", "thrivepoint", "wardrobe"],
  },
  {
    title: "Specialize",
    body: "Deep tools for specific crafts — sublimation and embroidery — that respect the software you already use.",
    slugs: ["sublium", "threadcount"],
  },
];

export function Home() {
  const products = orderedProducts();
  return (
    <>
      <SeoHead
        title="Clever Signal — Software for the people who make things."
        description="Clever Signal builds thoughtful software for businesses that make, produce, sell, and manage physical products. Explore the product family: costing, inventory, production, orders, formulas, cutting, sublimation, embroidery, resale, and growth."
        structuredData={[
          organizationJsonLd,
          {
            "@type": "WebSite",
            name: SITE.name,
            url: SITE.canonicalBase,
          },
        ]}
      />

      <section className="hero">
        <div className="hero-inner">
          <p className="kicker">Independent software company</p>
          <h1>
            Software for the <em>people who make things.</em>
          </h1>
          <p className="lede">
            Clever Signal builds thoughtful tools for the businesses behind
            physical products. From materials and production to orders,
            formulas, and fulfillment — each application solves a real part of
            the work.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Explore the products
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Clever Signal
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionLabel index="SEC.01" label="The company" />
          <h2>
            Built around the <em>actual work.</em>
          </h2>
          <div className="two-col">
            <p>
              Clever Signal exists for the small calculations, repeated
              processes, production decisions, and operational details that keep
              independent businesses moving. We build specialist software for
              businesses that make, produce, sell, and manage physical
              products — makers, small manufacturers, independent sellers, and
              craft businesses.
            </p>
            <p>
              Generic business software treats a candle studio, a sublimation
              shop, and an embroidery business as the same company. They aren't.
              Each Clever Signal application addresses a specific operational
              problem that generic platforms overlook — and each one is useful
              on its own, with optional connections to the others where that
              genuinely helps.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <SectionLabel index="SEC.02" label="Product directory" />
          <h2>
            Ten applications. <em>One family.</em>
          </h2>
          <p className="section-intro">
            Every product is independently useful. Browse the directory, then
            open any product page for the full story — its purpose, its
            features, and how it's used.
          </p>
          <div className="card-grid">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
          <p className="center">
            <Link to="/products" className="btn btn-ghost">
              View the full directory →
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionLabel index="SEC.03" label="Ecosystem" />
          <h2>
            Independent products, <em>optional connections.</em>
          </h2>
          <p className="section-intro">
            The applications complement one another, but none of them requires
            another. Each product owns its own records and does its own job
            well on its own. Where two products can share information usefully
            — material costs flowing into recipe costing, orders feeding
            production planning — those connections are planned as optional
            data exchanges, never as requirements.
          </p>
          <div className="eco-grid">
            {ECOSYSTEM_GROUPS.map((g) => (
              <div key={g.title} className="eco-card">
                <h3>{g.title}</h3>
                <p>{g.body}</p>
                <ul>
                  {g.slugs.map((slug) => {
                    const p = getProduct(slug);
                    if (!p) return null;
                    return (
                      <li key={slug}>
                        <Link to={productUrl(slug)}>{p.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="honesty-box">
            <h3>What we won't claim</h3>
            <p>
              These products are not one monolithic application, and this site
              doesn't present them as one. Integrations between products are
              planned capabilities — we describe what they would do, not what
              they already do. Nothing here is for sale yet; every product page
              carries its honest status.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap center">
          <SectionLabel index="SEC.04" label="Next" />
          <h2>
            See what each one <em>actually does.</em>
          </h2>
          <p className="section-intro">
            Every product page explains the problem it solves, who it's for,
            and how the work flows through it — in concrete terms, not slogans.
          </p>
          <div className="hero-actions center">
            <Link to="/products" className="btn btn-primary">
              Browse all ten products
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
