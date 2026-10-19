import type { Metadata } from "next";
import { about, company, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story",
  description: about.paragraphs[0],
};

export default function OurStoryPage() {
  return (
    <>
      <section className="section page-intro">
        <div className="wrap story-top">
          <p className="established">Established {company.established}</p>
          <h1>Company profile</h1>
          <p className="accent-line">{about.discipline}</p>
          <p className="meta">{about.capabilities}</p>
          <div className="story-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-label="Our motto">
        <div className="wrap">
          <article className="motto-card">
            <h2>Our motto</h2>
            <p>{company.motto}</p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="team-heading">
        <div className="wrap">
          <h2 id="team-heading">Main core team</h2>
          <div className="team-list">
            {team.map((member) => (
              <article key={member.name} className="member">
                <header>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <p>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </p>
                  <p>
                    <a href={member.phoneHref}>{member.phone}</a>
                  </p>
                </header>
                <div>
                  {member.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
