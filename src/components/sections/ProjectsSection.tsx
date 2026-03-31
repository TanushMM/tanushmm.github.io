import { ExternalLink, Globe } from "lucide-react"
import { useState } from "react"
import type { ProjectItem, ProjectSection } from "../../types/portfolio"
import GlassPanel from "../ui/GlassPanel"
import ProjectDetailModal from "../ui/ProjectDetailModal"
import SectionHeading from "../ui/SectionHeading"

interface ProjectsSectionProps {
  items: ProjectItem[]
  sections: ProjectSection[]
}

export default function ProjectsSection({
  items,
  sections,
}: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null)
  const [activeSectionId, setActiveSectionId] = useState(
    sections[0]?.id ?? "work",
  )

  const activeSection = sections.find((section) => section.id === activeSectionId)
  const filteredProjects = items.filter(
    (project) => project.sectionId === activeSectionId,
  )

  return (
    <section id="projects" className="section-stack">
      <SectionHeading
        label="Projects"
        title="Selected projects."
      />

      <GlassPanel className="project-board">
        <div className="board-tabs">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`tab ${section.id === activeSectionId ? "active" : ""}`}
              onClick={() => setActiveSectionId(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${index === 0 ? "project-card-wide" : ""}`}
            >
              <div className="project-topline">
                <span className="card-kicker">{project.eyebrow}</span>
                <div className="pill-row compact-pills">
                  {activeSection?.projectPillLabel &&
                  activeSection?.projectPillAnchor ? (
                    <a href={activeSection.projectPillAnchor} className="tiny-badge">
                      {activeSection.projectPillLabel}
                    </a>
                  ) : null}
                  <span className="tiny-badge">{project.slug}</span>
                </div>
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
          {filteredProjects.length === 0 ? (
            <article className="project-card project-card-wide">
              <h3>No projects in this section yet.</h3>
              <p>Update `projectSections` and `projects` in data to add entries.</p>
            </article>
          ) : null}
        </div>
      </GlassPanel>

      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
