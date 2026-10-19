import Link from "next/link";
import { company, offices, services, team } from "@/lib/content";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="footer-line">{company.footerLine}</p>
          <p className="footer-copy">© {year} DosInd</p>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Locations</h2>
          <ul className="office-list">
            {offices.map((office) => (
              <li key={office.name}>{office.name}</li>
            ))}
          </ul>
          <h2 className="footer-subhead">Contact</h2>
          <ul>
            {team.map((member) => (
              <li key={member.email}>
                <a href={`mailto:${member.email}`}>{member.email}</a>
                <br />
                <a href={member.phoneHref}>{member.phone}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
