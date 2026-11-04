import { Link } from "react-router-dom";
import { SITE } from "../data/site.ts";
import { SeoHead, organizationJsonLd } from "../components/SeoHead.tsx";
import { SectionLabel } from "../components/Layout.tsx";

export function About() {
  return (
    <>
      <SeoHead
        title="About Clever Signal: Specialist Software for Makers"
        description="Clever Signal exists to build software around the work that actually happens: the small calculations, repeated processes, and operational details that keep independent businesses moving."
        structuredData={[
          organizationJsonLd,
          {
            "@type": "AboutPage",
            name: "About Clever Signal",
            url: `${SITE.canonicalBase}/about`,
          },
        ]}
      />
      <section className="page-hero">
        <div className="wrap">
          <SectionLabel index="ABOUT" label="The company" />
          <h1>
            Software around the <em>work that actually happens.</em>
          </h1>
          <p className="lede">
            Clever Signal exists to build software around the work that
            actually happens. The small calculations, repeated processes,
            production decisions, and operational details that keep independent
            businesses moving.
          </p>
          <img
            src="/logo.png"
            alt="Clever Signal lighthouse mark and wordmark"
            className="about-lockup"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <SectionLabel index="01" label="Philosophy" />
          <h2>
            Specialist software, <em>not bloated platforms.</em>
          </h2>
          <p className="body-large">
            Generic business software tries to be everything to everyone and
            ends up being precisely nothing to the person standing at the
            production table. Clever Signal takes the opposite approach: each
            application addresses one specific operational problem, deeply, for
            the people who live with it every day.
          </p>
          <p className="body-large">
            A candle maker pricing a batch, a sublimation shop nesting a gang
            sheet, an embroiderer checking whether a file will run on their
            machine, these are real moments with real stakes, and they deserve
            software designed around them rather than adapted to them.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap narrow">
          <SectionLabel index="02" label="How we build" />
          <h2>
            Practical problem solving, <em>thoughtful engineering.</em>
          </h2>
          <ul className="value-list">
            <li>
              <h3>Independent products</h3>
              <p>
                Every application is developed as its own product with its own
                purpose. Nothing is a module of a suite you have to buy into,
                and no product requires another to be useful.
              </p>
            </li>
            <li>
              <h3>Optional integration</h3>
              <p>
                Where products can share information usefully, connections are
                planned as optional data exchanges. Independence first;
                integration where it earns its place.
              </p>
            </li>
            <li>
              <h3>Honest claims</h3>
              <p>
                We describe what software does, not what it might do someday.
                Statuses are public, integrations are labeled as planned until
                they exist, and nothing is presented as available before it is.
              </p>
            </li>
            <li>
              <h3>Built for the work</h3>
              <p>
                Features come from operational reality: the batch that needs
                costing, the order that needs packing, the file that needs
                checking, not from a feature matrix.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap center">
          <SectionLabel index="03" label="Next" />
          <h2>
            Judge us by the <em>products.</em>
          </h2>
          <p className="section-intro">
            The philosophy is only as good as the software. Explore the product
            directory and see what each application is being built to do.
          </p>
          <div className="hero-actions center">
            <Link to="/products" className="btn btn-primary">
              Browse the products
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
