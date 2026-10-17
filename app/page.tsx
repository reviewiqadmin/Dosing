import type { Metadata } from "next";
import Link from "next/link";
import { home, reasons, services, software } from "@/lib/content";

export const metadata: Metadata = {
  title: "Structural engineering consultancy",
  description: `${home.title} ${home.lede}`,
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-copy">
          <p className="kicker">Structural engineering consultancy</p>
          <h1>{home.title}</h1>
          <p className="lede">{home.lede}</p>
          <Link href="/quote" className="quote-button">
            Get a Quote
          </Link>
        </div>
      </section>

      <section className="band" aria-labelledby="why-heading">
        <div className="wrap">
          <h2 id="why-heading">Why DosInd?</h2>
          <div className="reason-grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="reason-card">
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services-heading">
        <div className="wrap">
          <div className="section-head">
            <h2 id="services-heading">Services</h2>
            <Link href="/services">All services</Link>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.slug} className="service-card">
                <h3>
                  <Link href={`/services#${service.slug}`}>{service.title}</Link>
                </h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="software-heading">
        <div className="wrap">
          <h2 id="software-heading">Software</h2>
          <div className="software-grid">
            {software.map((group) => (
              <article key={group.title} className="software-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="project-heading">
        <div className="wrap">
          <div className="section-head">
            <h2 id="project-heading">Projects</h2>
            <Link href="/projects">Project page</Link>
          </div>
          <article className="project-feature">
            <div className="project-frame">
              <span>Project photograph to be added</span>
            </div>
            <div>
              <h3>Project name to be added</h3>
              <p>
                One project image will be published in this space. Further
                projects can be added to the same list.
              </p>
              <Link href="/projects" className="text-link">
                View projects
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta-inner">
          <h2>Request a quotation</h2>
          <p>Tell us about the structure, the stage of design, and the standards you need to meet.</p>
          <Link href="/quote" className="quote-button quote-button-light">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
