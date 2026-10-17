import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected DosInd structural engineering and detailing projects.",
};

export default function ProjectsPage() {
  return (
    <section className="section page-intro">
      <div className="wrap">
        <p className="kicker">Projects</p>
        <h1>Selected work</h1>
        <p className="lede">
          Project names and photographs will be published here. The page is
          ready for four or five entries.
        </p>

        {projects.length === 0 ? (
          <article className="project-feature">
            <div className="project-frame">
              <span>Project photograph to be added</span>
            </div>
            <div>
              <h2>Project name to be added</h2>
              <p>
                This first space is reserved for one project image. Additional
                projects join the same list when their names and photographs
                are ready.
              </p>
            </div>
          </article>
        ) : (
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.name} className="project-feature">
                <div className="project-frame">
                  {project.image ? (
                    // Photographs are local files added under public/.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.image} alt="" />
                  ) : (
                    <span>Project photograph to be added</span>
                  )}
                </div>
                <div>
                  <h2>{project.name}</h2>
                  {project.location ? <p className="meta">{project.location}</p> : null}
                  <p>{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="section-note">
          <Link href="/quote" className="text-link">
            Discuss a project
          </Link>
        </p>
      </div>
    </section>
  );
}
