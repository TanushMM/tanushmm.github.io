import { ExternalLink, Globe } from "lucide-react"
import { useState } from "react"
import type { ProjectItem } from "../../types/portfolio"
import GlassPanel from "../ui/GlassPanel"
import ProjectDetailModal from "../ui/ProjectDetailModal"
import SectionHeading from "../ui/SectionHeading"

interface ProjectsSectionProps {
  items: ProjectItem[]
}

export default function ProjectsSection({ items }: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null)

  return (
    <section id="projects" className="section-stack">
      <SectionHeading
        label="Projects"
        title="Selected projects across backend systems, cloud builds, and product thinking."
      />

      <GlassPanel className="project-board">
        <div className="board-tabs">
          <span className="tab active">Featured</span>
          <span className="tab">Systems</span>
          <span className="tab">Cloud</span>
          <span className="tab">Data</span>
        </div>

        <div className="project-grid">
          {items.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${index === 0 ? "project-card-wide" : ""}`}
            >
              <div className="project-topline">
                <span className="card-kicker">{project.eyebrow}</span>
                <span className="tiny-badge">{project.slug}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="pill-row">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="highlight-list">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="project-actions">
                <div className="project-links">
                  {project.links.github ? (
                    <a href={project.links.github} target="_blank" rel="noreferrer">
                      <Globe size={15} />
                      GitHub
                    </a>
                  ) : null}
                  {project.links.live ? (
                    <a href={project.links.live} target="_blank" rel="noreferrer">
                      <ExternalLink size={15} />
                      Live
                    </a>
                  ) : null}
                </div>

                <button
                  type="button"
                  className="secondary-cta detail-button"
                  onClick={() => setActiveProject(project)}
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </GlassPanel>

      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
