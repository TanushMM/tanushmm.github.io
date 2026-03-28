import { motion } from "framer-motion"
import type { ExperienceItem } from "../../types/portfolio"
import GlassPanel from "../ui/GlassPanel"
import SectionHeading from "../ui/SectionHeading"

interface ExperienceSectionProps {
  items: ExperienceItem[]
}

export default function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-stack">
      <SectionHeading
        label="Experience"
        title="A timeline of backend, AI, and data-focused execution."
      />

      <div className="timeline-list">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="timeline-row"
          >
            <div className="timeline-meta">
              <span className="timeline-dot" />
              <p>{item.date}</p>
            </div>

            <GlassPanel className="timeline-card">
              <div className="timeline-head">
                <div>
                  <h3>{item.title}</h3>
                  <p className="timeline-company">{item.company}</p>
                </div>
                <div className="pill-row">
                  {item.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="timeline-summary">{item.summary}</p>
              <ul className="highlight-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
