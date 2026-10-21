import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { offices, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact DosInd at the Gurgaon and Kurukshetra offices.",
};

export default function ContactPage() {
  return (
    <section className="section page-intro">
      <div className="wrap contact-layout">
        <div>
          <p className="kicker">Contact us</p>
          <h1>Talk with the team</h1>
          <p className="lede">
            Call the team or send a project note or careers introduction through
            the form.
          </p>

          <div className="contact-people">
            {team.map((member) => (
              <div key={member.name} className="contact-person">
                <p className="contact-person-name">{member.name}</p>
                <p className="contact-person-role">{member.role}</p>
                <a className="contact-person-phone" href={member.phoneHref}>
                  {member.phone}
                </a>
              </div>
            ))}
          </div>

          <div className="contact-locations">
            <p className="contact-locations-label">Locations</p>
            <p className="contact-locations-list">
              {offices.map((office) => office.name).join(" · ")}
            </p>
          </div>
        </div>
        <QuoteForm id="contact" submitLabel="Send message" />
      </div>
    </section>
  );
}
