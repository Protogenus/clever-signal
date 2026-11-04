import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SITE } from "../data/site.ts";
import { orderedProducts, productUrl } from "../data/products.ts";

/** Scroll to top on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label="Clever Signal — home">
      <span className="wordmark-signal" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      Clever&nbsp;Signal
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Wordmark />
        <nav aria-label="Primary">
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const products = orderedProducts();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Wordmark />
          <p>{SITE.tagline}</p>
          <p className="footer-note">
            Independent software for businesses that make, produce, sell, and
            manage physical products.
          </p>
        </div>
        <nav aria-label="Products">
          <h2>Products</h2>
          <ul>
            {products.map((p) => (
              <li key={p.slug}>
                <Link to={productUrl(p.slug)}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <h2>Company</h2>
          <ul>
            <li>
              <Link to="/products">Product directory</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <small>
          © {new Date().getFullYear()} {SITE.name}. All products currently in
          development or coming soon.
        </small>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

/** Small "SEC.01 —" style section label, after the reference site's voice. */
export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <p className="section-label">
      <span>{index}</span> — {label}
    </p>
  );
}
