import { ExternalLink, Globe, X } from "lucide-react"
import type { ProjectItem } from "../../types/portfolio"
import GlassPanel from "./GlassPanel"

interface ProjectDetailModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <div className="modal-shell" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={onClose} />
      <GlassPanel className="modal-card">
        <button type="button" className="modal-close" onClick={onClose}>
          <X size={18} />
        </button>

        <span className="section-kicker">{project.eyebrow}</span>
        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-summary">{project.summary}</p>

        <div className="pill-row">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="modal-grid">
          {project.details.map((detail) => (
            <div key={detail.title} className="modal-block">
              <h4>{detail.title}</h4>
              <p>{detail.content}</p>
            </div>
          ))}
        </div>

        <div className="project-links modal-links">
          {project.links.github ? (
            <a href={project.links.github} target="_blank" rel="noreferrer">
              <Globe size={15} />
              GitHub
            </a>
          ) : null}
          {project.links.live ? (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : null}
        </div>
      </GlassPanel>
    </div>
  )
}
