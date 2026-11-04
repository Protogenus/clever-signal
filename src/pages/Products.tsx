import { SITE } from "../data/site.ts";
import { orderedProducts } from "../data/products.ts";
import { SeoHead, organizationJsonLd } from "../components/SeoHead.tsx";
import { SectionLabel } from "../components/Layout.tsx";
import { ProductCard } from "../components/ProductCard.tsx";

export function Products() {
  const products = orderedProducts();
  return (
    <>
      <SeoHead
        title="Product Directory — All Clever Signal Applications"
        description="The complete Clever Signal product directory: Materialist, Stockroom, StagePoint, Orderly, Elixer, Cutline, Sublium, Threadcount, Wardrobe, and Thrivepoint. Specialist software for makers, manufacturers, and sellers."
        structuredData={[
          organizationJsonLd,
          {
            "@type": "ItemList",
            name: "Clever Signal product directory",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `${SITE.canonicalBase}/products/${p.slug}`,
            })),
          },
        ]}
      />
      <section className="page-hero">
        <div className="wrap">
          <SectionLabel index="DIR" label="Product directory" />
          <h1>
            Every application, <em>in one place.</em>
          </h1>
          <p className="lede">
            Ten specialist applications for the businesses behind physical
            products. Each one solves a specific operational problem — and each
            one stands on its own.
          </p>
        </div>
      </section>
      <section className="section section-dark">
        <div className="wrap">
          <div className="card-grid">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
