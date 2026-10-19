import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "No roles are open at DosInd as of now.",
};

export default function CareersPage() {
  return (
    <section className="section page-intro">
      <div className="wrap narrow">
        <p className="kicker">Careers</p>
        <h1>Work with DosInd</h1>
        <p className="lede">
          No roles are open as of now. If you would like to be considered
          later, send a note through the contact form with your background
          and the kind of work you do.
        </p>
        <Link href="/contact" className="quote-button">
          Contact us
        </Link>
      </div>
    </section>
  );
}
