import { Link } from "react-router-dom";
import { SeoHead } from "../components/SeoHead.tsx";

export function NotFound() {
  return (
    <>
      <SeoHead
        title="Page not found: Clever Signal"
        description="The page you're looking for doesn't exist. Browse the Clever Signal product directory instead."
      />
      <section className="page-hero">
        <div className="wrap center">
          <h1>
            Nothing <em>here.</em>
          </h1>
          <p className="lede">
            That page doesn't exist. The products do. Start there.
          </p>
          <div className="hero-actions center">
            <Link to="/products" className="btn btn-primary">
              Browse products
            </Link>
            <Link to="/" className="btn btn-secondary">
              Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
