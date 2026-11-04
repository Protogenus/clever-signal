import { Link } from "react-router-dom";
import type { Product } from "../data/products.ts";
import { productUrl } from "../data/products.ts";
import { STATUS_LABELS } from "../data/site.ts";

/** Card display name: shortName when set (e.g. "Materialist"), else full name. */
export function productDisplayName(product: Product): string {
  return product.shortName ?? product.name;
}

export function StatusBadge({ status }: { status: Product["status"] }) {
  return <span className={`status-badge status-${status}`}>{STATUS_LABELS[status]}</span>;
}

/**
 * Lineup card (dark): number badge + category eyebrow, large dithered mascot
 * panel, rounded mascot tile overlapping the panel's bottom edge, white name,
 * description, status pill only, brand-color explore link.
 */
export function ProductCard({ product, index }: { product: Product; index: number }) {
  const displayName = productDisplayName(product);
  const eyebrow = product.shortCategory ?? product.category;
  const num = String(index + 1).padStart(2, "0");
  const statusLabel = STATUS_LABELS[product.status].toUpperCase();
  // Large visual: real app screenshot when captured, mascot tile otherwise.
  // The small overlapping tile is always the mascot.
  const visualSrc = product.screenshot ?? product.mascot;
  const visualAlt = product.screenshotAlt ?? product.mascotAlt;
  return (
    <article className="lineup-card">
      <div className="lineup-top">
        <span className="lineup-number" style={{ color: product.accent }}>
          {num}
        </span>
        <span className="lineup-eyebrow">{eyebrow}</span>
      </div>
      <Link
        to={productUrl(product.slug)}
        className="lineup-panel"
        aria-label={`${displayName} — ${eyebrow}`}
      >
        <img
          src={visualSrc}
          alt={visualAlt}
          className="lineup-panel-art"
          loading="lazy"
        />
      </Link>
      <div className="lineup-body">
        <img
          src={product.mascot}
          alt=""
          aria-hidden="true"
          className="lineup-tile"
          loading="lazy"
        />
        <h3 className="lineup-name">
          <Link to={productUrl(product.slug)}>{displayName}</Link>
        </h3>
        <p className="lineup-desc">{product.shortDescription}</p>
        <div className="lineup-foot">
          <span
            className="lineup-status"
            style={{ borderColor: product.accent, color: product.accent }}
          >
            {statusLabel}
          </span>
          <Link
            to={productUrl(product.slug)}
            className="lineup-explore"
            style={{ color: product.accent }}
          >
            Explore {displayName.replace("Clever Signal ", "")} ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
