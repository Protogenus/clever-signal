import { SITE } from "../data/site.ts";
import { SeoHead, organizationJsonLd } from "../components/SeoHead.tsx";
import { SectionLabel } from "../components/Layout.tsx";

/**
 * Contact page. Deliberately no contact form: there is no submission backend,
 * and a form that goes nowhere would be dishonest. Contact details are
 * configurable placeholders, clearly marked TBD until Blake provides real ones.
 */
export function Contact() {
  const { email, socials } = SITE.contact;
  return (
    <>
      <SeoHead
        title="Contact Clever Signal"
        description="Get in touch with Clever Signal: questions about the products, feedback on what we're building, or anything else. Contact details published here as they're confirmed."
        structuredData={[
          organizationJsonLd,
          {
            "@type": "ContactPage",
            name: "Contact Clever Signal",
            url: `${SITE.canonicalBase}/contact`,
          },
        ]}
      />
      <section className="page-hero">
        <div className="wrap">
          <SectionLabel index="CONTACT" label="Get in touch" />
          <h1>
            Talk to <em>us.</em>
          </h1>
          <p className="lede">
            Questions about a product, feedback on what we're building, or a
            problem you think we should solve, we'd like to hear it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <div className="contact-card">
            <h2>Contact information</h2>
            <dl className="contact-list">
              <div>
                <dt>Email</dt>
                <dd>
                  {email ? (
                    <a href={`mailto:${email}`}>{email}</a>
                  ) : (
                    <span className="tbd">
                      To be announced, check back soon.
                    </span>
                  )}
                </dd>
              </div>
              <div>
                <dt>Social</dt>
                <dd>
                  {socials.length > 0 ? (
                    <ul>
                      {socials.map((s) => (
                        <li key={s.label}>
                          <a href={s.url} rel="me noopener">
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="tbd">
                      To be announced, check back soon.
                    </span>
                  )}
                </dd>
              </div>
            </dl>
            <p className="fine-print">
              Contact details are published here as soon as they're confirmed.
              We don't list addresses or accounts we don't actually use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
