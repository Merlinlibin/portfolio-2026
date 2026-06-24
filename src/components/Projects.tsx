import { Reveal } from "./ui/Reveal";
import { projects, type Project } from "../data/content";

function monogram(project: Project): string {
  return project.name.toUpperCase();
}

const ExternalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={15}
    height={15}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
  </svg>
);

const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={15}
    height={15}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

// Tile cleanly into a 6-column grid: full rows of 3 (span 2 each),
// and if the last row has 2 items, they each span 3 to fill the width.
function spanClass(index: number, total: number): string {
  const remainder = total % 3;
  if (remainder === 0) return "span-2";
  const inLastRow = index >= total - remainder;
  if (!inLastRow) return "span-2";
  if (remainder === 2) return "span-3";
  return "span-6";
}

export function Projects() {
  const total = projects.length;
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal as="p" className="section-tag">
          <span>04</span> Projects
        </Reveal>
        <Reveal as="h2" className="section-title">
          Selected <span className="gradient-text">work</span>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              className={`project-card glass ${spanClass(i, total)}`}
              delay={(i % 3) * 80}
              key={project.name}
            >
              <div
                className="project-banner"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
                }}
                aria-hidden="true"
              >
                <span className="project-monogram">{monogram(project)}</span>
                <span className="project-banner-kind">{project.kind}</span>
              </div>

              <div className="project-body">
                <div className="project-top">
                  <h3>
                    {project.name}{" "}
                    {project.sub && (
                      <span className="muted">{project.sub}</span>
                    )}
                  </h3>
                  <span className="project-domain">{project.domain}</span>
                </div>
                <p>{project.description}</p>
                <ul className="tag-list small">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                {(project.live || project.code) && (
                  <div className="project-links">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalIcon /> Live
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <CodeIcon /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
