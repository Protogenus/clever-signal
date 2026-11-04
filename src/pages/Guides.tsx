import { Link } from "react-router-dom";
import { SITE } from "../data/site.ts";
import { guides, guideUrl } from "../data/guides.ts";
import { getProduct, productUrl } from "../data/products.ts";
import { SeoHead } from "../components/SeoHead.tsx";
import { SectionLabel } from "../components/Layout.tsx";

export function Guides() {
  return (
    <>
      <SeoHead
        title={`Guides — ${SITE.name}`}
        description="Practical, step-by-step guides to getting real work done with Clever Signal products. Start with the Materialist pricing workflow."
        structuredData={{
          "@type": "CollectionPage",
          name: `Guides — ${SITE.name}`,
          url: `${SITE.canonicalBase}/guides`,
          description:
            "Step-by-step guides to Clever Signal product workflows.",
        }}
      />

      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Guides</p>
          <h1>
            Learn the <em>workflows.</em>
          </h1>
          <p className="product-positioning">
            Short, practical walkthroughs of how each Clever Signal product is
            actually used — the process, step by step, with the reasoning
            behind each one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionLabel index="01" label="All guides" />
          <div className="guides-list">
            {guides.map((g, i) => {
              const product = getProduct(g.productSlug);
              return (
                <article
                  key={g.slug}
                  className="guide-card"
                  style={{ borderTopColor: product?.accent ?? "var(--line)" }}
                >
                  <p className="guide-card-kicker">
                    {String(i + 1).padStart(2, "0")} —{" "}
                    {product ? (
                      <Link to={productUrl(product.slug)}>
                        {product.shortName ?? product.name}
                      </Link>
                    ) : (
                      g.productSlug
                    )}
                  </p>
                  <h2>
                    <Link to={guideUrl(g.slug)}>{g.title}</Link>
                  </h2>
                  <p>{g.description}</p>
                  <p className="guide-card-steps">
                    {g.steps.length} steps
                  </p>
                  <Link to={guideUrl(g.slug)} className="btn btn-secondary">
                    Read the guide
                  </Link>
                </article>
              );
            })}
          </div>
          <p className="fine-print">
            More guides are on the way as products mature. Each guide describes
            intended workflows — planned design intent, not shipped
            functionality.
          </p>
        </div>
      </section>
    </>
  );
}
