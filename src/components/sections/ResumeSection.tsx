import { Download, ExternalLink } from "lucide-react"
import type { ResumeData } from "../../types/portfolio"
import GlassPanel from "../ui/GlassPanel"
import SectionHeading from "../ui/SectionHeading"

interface ResumeSectionProps {
  resume: ResumeData
}

export default function ResumeSection({ resume }: ResumeSectionProps) {
  return (
    <section id="resume" className="section-stack">
      <SectionHeading
        label="My Resume"
        title="Resume and highlights."
      />

      <div className="resume-grid">
        <GlassPanel className="resume-hero">
          <h2>Available for thoughtful backend and platform work.</h2>
          <p>
            My resume brings together engineering experience, academic results,
            and the practical work I have shipped across backend, cloud, and AI-focused projects.
          </p>
          <div className="cta-row">
            <a
              href={resume.driveLink}
              target="_blank"
              rel="noreferrer"
              className="primary-cta"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={resume.driveLink}
              target="_blank"
              rel="noreferrer"
              className="secondary-cta"
            >
              <ExternalLink size={16} />
              View Online
            </a>
          </div>
        </GlassPanel>

        <GlassPanel className="contact-card">
          <div className="resume-mini-block">
            <span className="card-kicker">Education</span>
            {resume.education.map((item) => (
              <div key={item.title} className="resume-line">
                <strong>{item.title}</strong>
                <p>{item.subtitle}</p>
                <span>{item.result}</span>
              </div>
            ))}
          </div>
          <div className="resume-mini-block">
            <span className="card-kicker">Highlights</span>
            <ul className="highlight-list compact-list">
              {resume.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}
