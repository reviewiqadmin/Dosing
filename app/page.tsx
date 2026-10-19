import type { Metadata } from "next";
import Link from "next/link";
import { home, projects, reasons, services, sitePhotos, software } from "@/lib/content";

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

      <section className="section" aria-labelledby="site-photos-heading">
        <div className="wrap">
          <h2 id="site-photos-heading">Site photographs</h2>
          <div className="photo-grid">
            {sitePhotos.map((photo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={photo.src} src={photo.src} alt={photo.alt} />
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
          {projects[0] ? (
            <article className="project-feature">
              <div className="project-frame">
                {projects[0].image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={projects[0].image} alt={projects[0].name} />
                ) : (
                  <span>Project photograph to be added</span>
                )}
              </div>
              <div>
                <h3>{projects[0].name}</h3>
                {projects[0].location ? (
                  <p className="meta">{projects[0].location}</p>
                ) : null}
                {projects[0].paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <Link href="/projects" className="text-link">
                  View projects
                </Link>
              </div>
            </article>
          ) : null}
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
