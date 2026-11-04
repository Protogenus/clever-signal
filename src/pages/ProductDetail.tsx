import { Link, Navigate, useParams } from "react-router-dom";
import { SITE, STATUS_LABELS } from "../data/site.ts";
import { getProduct, productUrl } from "../data/products.ts";
import { SeoHead } from "../components/SeoHead.tsx";
import { SectionLabel } from "../components/Layout.tsx";
import { Halftone } from "../components/Halftone.tsx";
import { StatusBadge } from "../components/ProductCard.tsx";

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;
  if (!product) return <Navigate to="/products" replace />;

  const related = product.integrations
    .map((i) => getProduct(i.productSlug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <>
      <SeoHead
        title={product.seo.title}
        description={product.seo.description}
        structuredData={{
          "@type": "SoftwareApplication",
          name: product.name,
          url: `${SITE.canonicalBase}${productUrl(product.slug)}`,
          applicationCategory: product.category,
          description: product.shortDescription,
          operatingSystem: "Windows",
          author: { "@type": "Organization", name: SITE.name },
        }}
      />

      <section className="page-hero product-hero">
        <div className="wrap">
          <p className="kicker">
            <Link to="/products">Products</Link> / {product.category}
          </p>
          <div className="product-hero-grid">
            <div>
              <h1>{product.name}</h1>
              <p className="product-positioning">{product.positioning}</p>
              <div className="product-hero-meta">
                <StatusBadge status={product.status} />
                <span className="status-note">
                  Status: {STATUS_LABELS[product.status]} — not yet available.
                </span>
              </div>
              <div className="hero-actions">
                <Link to={product.cta.href} className="btn btn-primary">
                  {product.cta.label}
                </Link>
                <Link to="/products" className="btn btn-secondary">
                  All products
                </Link>
              </div>
            </div>
            <Halftone
              seed={product.artSeed}
              accent={product.accent}
              alt={product.artAlt}
              idPrefix={`hero-${product.slug}`}
              className="product-hero-art"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <SectionLabel index="01" label="The problem" />
          <h2>
            What <em>{product.name.replace("Clever Signal ", "")}</em> solves
          </h2>
          <p className="body-large">{product.problem}</p>
          <p className="body-large">{product.fullDescription}</p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap narrow">
          <SectionLabel index="02" label="Who it's for" />
          <h2>
            Built for <em>this work.</em>
          </h2>
          <ul className="check-list">
            {product.audience.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionLabel index="03" label="Capabilities" />
          <h2>
            What it <em>does.</em>
          </h2>
          <div className="feature-grid">
            {product.features.map((f) => (
              <article key={f.title} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap narrow">
          <SectionLabel index="04" label="In practice" />
          <h2>
            How it's <em>used.</em>
          </h2>
          <div className="examples">
            {product.examples.map((e, i) => (
              <figure key={i} className="example">
                <blockquote>{e}</blockquote>
              </figure>
            ))}
          </div>
          <p className="fine-print">
            Illustrative scenarios describing intended use — not customer
            stories.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <SectionLabel index="05" label="Workflow" />
          <h2>
            The primary <em>workflow.</em>
          </h2>
          <ol className="workflow">
            {product.workflow.map((w, i) => (
              <li key={w.title}>
                <span className="workflow-step" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap narrow">
          <SectionLabel index="06" label="Ecosystem" />
          <h2>
            Plays well with <em>others.</em>
          </h2>
          <p className="body-large">
            {product.name.replace("Clever Signal ", "")} is independently
            useful — it doesn't require any other Clever Signal product. Where
            sharing information would genuinely help, optional connections to
            sibling products are planned:
          </p>
          <div className="integration-list">
            {product.integrations.map((integ) => {
              const other = getProduct(integ.productSlug);
              if (!other) return null;
              return (
                <article key={integ.productSlug} className="integration-card">
                  <h3>
                    <Link to={productUrl(other.slug)}>↔ {other.name}</Link>
                  </h3>
                  <p>{integ.description}</p>
                </article>
              );
            })}
          </div>
          <p className="fine-print">
            Integrations described here are planned design intent, not shipped
            functionality. Each product works fully on its own.
          </p>
          {related.length > 0 && (
            <p className="related-links">
              Related:{" "}
              {related.map((r, i) => (
                <span key={r.slug}>
                  {i > 0 && " · "}
                  <Link to={productUrl(r.slug)}>{r.name}</Link>
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap center">
          <h2>
            Follow <em>{product.name.replace("Clever Signal ", "")}</em> as it
            develops.
          </h2>
          <p className="section-intro">
            {STATUS_LABELS[product.status]}. Tell us what you'd need it to do —
            that feedback shapes what gets built.
          </p>
          <div className="hero-actions center">
            <Link to={product.cta.href} className="btn btn-primary">
              {product.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
