import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "How to get in touch with DosInd about future roles.",
};

export default function CareersPage() {
  return (
    <section className="section page-intro">
      <div className="wrap narrow">
        <p className="kicker">Careers</p>
        <h1>Work with DosInd</h1>
        <p className="lede">
          DosInd is not listing open roles on this page. If you would like to
          be considered, send a note through the contact form with your
          background and the kind of work you do.
        </p>
        <Link href="/contact" className="quote-button">
          Contact us
        </Link>
      </div>
    </section>
  );
}
