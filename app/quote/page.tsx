import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request for quotation",
  description:
    "Request a quotation from DosInd for structural analysis, design, or detailing.",
};

export default function QuotePage() {
  return (
    <section className="section page-intro">
      <div className="wrap contact-layout">
        <div>
          <p className="kicker">Request for quotation</p>
          <h1>Get a Quote</h1>
          <p className="lede">
            Share the project type, the stage you are in, and the standards
            the design needs to meet. Name, email, and a project message are
            required.
          </p>
        </div>
        <QuoteForm id="quote" submitLabel="Request quotation" allowAttachment />
      </div>
    </section>
  );
}
