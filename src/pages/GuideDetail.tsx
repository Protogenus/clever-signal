import { Link, Navigate, useParams } from "react-router-dom";
import { SITE, STATUS_LABELS } from "../data/site.ts";
import { getGuide } from "../data/guides.ts";
import { getProduct, productUrl } from "../data/products.ts";
import { SeoHead } from "../components/SeoHead.tsx";
import { SectionLabel } from "../components/Layout.tsx";

export function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuide(slug) : undefined;
  if (!guide) return <Navigate to="/guides" replace />;
  const product = getProduct(guide.productSlug);

  return (
    <>
      <SeoHead
        title={`${guide.title}: ${SITE.name}`}
        description={guide.description}
        structuredData={{
          "@type": "HowTo",
          name: guide.title,
          description: guide.description,
          url: `${SITE.canonicalBase}/guides/${guide.slug}`,
          step: guide.steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.title,
            text: s.body,
          })),
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">
            <Link to="/guides">Guides</Link>
            {product && (
              <>
                {" "}
                /{" "}
                <Link to={productUrl(product.slug)}>
                  {product.shortName ?? product.name}
                </Link>
              </>
            )}
          </p>
          <h1>
            {guide.title.split(":")[0]}
            {guide.title.includes(":") && (
              <>
                :<em> {guide.title.split(":").slice(1).join(":").trim()}</em>
              </>
            )}
          </h1>
          <p className="product-positioning">{guide.description}</p>
          {product && (
            <p className="guide-product-note">
              A workflow guide for{" "}
              <Link to={productUrl(product.slug)}>
                {product.shortName ?? product.name}
              </Link>{" "}
              , {STATUS_LABELS[product.status].toLowerCase()}, not yet
              available.
            </p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          {guide.intro.map((p, i) => (
            <p key={i} className="body-large">
              {p}
            </p>
          ))}
        </div>
      </section>

      {product && (
        <section className="section product-shot-section">
          <div className="wrap">
            <figure className="product-shot">
              <img
                src={product.screenshot ?? product.mascot}
                alt={product.screenshotAlt ?? product.mascotAlt}
              />
            </figure>
          </div>
        </section>
      )}

      <section className="section section-tint">
        <div className="wrap">
          <SectionLabel index="01" label="The workflow" />
          <h2>
            Five steps, <em>in order.</em>
          </h2>
          <ol className="workflow">
            {guide.steps.map((s, i) => (
              <li key={s.title}>
                <span
                  className="workflow-step"
                  aria-hidden="true"
                  style={
                    product ? { color: product.accent } : undefined
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <p className="guide-tip">
                    <strong>Tip: </strong>
                    {s.tip}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <SectionLabel index="02" label="The point" />
          <h2>
            {guide.closingTitle}
            <em>.</em>
          </h2>
          {guide.closing.map((p, i) => (
            <p key={i} className="body-large">
              {p}
            </p>
          ))}
          {product && (
            <div className="hero-actions">
              <Link to={productUrl(product.slug)} className="btn btn-primary">
                Explore {product.shortName ?? product.name}
              </Link>
              <Link to="/guides" className="btn btn-secondary">
                All guides
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
