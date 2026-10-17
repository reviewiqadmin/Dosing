import type { Metadata } from "next";
import Link from "next/link";
import { company, services, servicesIntro, software } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: servicesIntro.lede,
};

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero">
        <div className="wrap">
          <p className="kicker kicker-light">Services</p>
          <h1>{servicesIntro.title}</h1>
          <p className="lede lede-light">{servicesIntro.lede}</p>
        </div>
      </section>

      <section className="motto-strip" aria-label="Our motto">
        <div className="wrap motto-inner">
          <span className="motto-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path
                d="M6 22 L16 8 L26 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M16 14 V24" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
          <p>
            <span className="motto-label">Our motto</span>
            {company.motto}
          </p>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="our-services">
        <div className="wrap">
          <h2 id="our-services">Our services</h2>
          <div className="service-grid service-grid-detail">
            {services.map((service) => (
              <article key={service.slug} id={service.slug} className="service-card">
                <h3>{service.title}</h3>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="software-used">
        <div className="wrap">
          <h2 id="software-used">Software</h2>
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
          <p className="section-note">
            <Link href="/quote" className="text-link">
              Request a quotation
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
