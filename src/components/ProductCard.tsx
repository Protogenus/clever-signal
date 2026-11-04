import { Link } from "react-router-dom";
import type { Product } from "../data/products.ts";
import { productUrl } from "../data/products.ts";
import { STATUS_LABELS } from "../data/site.ts";
import { Halftone } from "./Halftone.tsx";

export function StatusBadge({ status }: { status: Product["status"] }) {
  return <span className={`status-badge status-${status}`}>{STATUS_LABELS[status]}</span>;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link
        to={productUrl(product.slug)}
        className="product-card-art"
        aria-label={`${product.name} — ${product.category}`}
      >
        <Halftone
          seed={product.artSeed}
          accent={product.accent}
          alt={product.artAlt}
          idPrefix={`card-${product.slug}`}
          className="product-card-svg"
        />
      </Link>
      <div className="product-card-body">
        <div className="product-card-meta">
          <span className="product-card-category">{product.category}</span>
          <StatusBadge status={product.status} />
        </div>
        <h3>
          <Link to={productUrl(product.slug)}>{product.name}</Link>
        </h3>
        <p>{product.shortDescription}</p>
        <Link to={productUrl(product.slug)} className="card-link">
          Explore {product.name.replace("Clever Signal ", "")} →
        </Link>
      </div>
    </article>
  );
}
