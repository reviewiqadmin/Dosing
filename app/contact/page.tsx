import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { offices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact DosInd at the Gurgaon and Haryana offices.",
};

export default function ContactPage() {
  return (
    <section className="section page-intro">
      <div className="wrap contact-layout">
        <div>
          <p className="kicker">Contact us</p>
          <h1>Talk with the team</h1>
          <p className="lede">
            Send a project note or a careers introduction. The offices below
            are named here; street addresses are not published on this page.
          </p>
          <ul className="office-cards">
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
