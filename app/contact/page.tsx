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
            Send a project note or a careers introduction. Quotation requests,
            contact messages, and applications go to both email addresses.
          </p>
          <ul className="office-cards">
            {team.map((member) => (
              <li key={member.email} className="contact-card">
                <span>{member.name}</span>
                <a href={`mailto:${member.email}`}>{member.email}</a>
                <a href={member.phoneHref}>{member.phone}</a>
              </li>
            ))}
            {offices.map((office) => (
              <li key={office.name}>{office.name}</li>
            ))}
          </ul>
        </div>
        <QuoteForm id="contact" submitLabel="Send message" />
      </div>
    </section>
  );
}
