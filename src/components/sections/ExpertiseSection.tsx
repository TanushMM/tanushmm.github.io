import type { ExpertiseItem } from "../../types/portfolio"
import GlassPanel from "../ui/GlassPanel"
import SectionHeading from "../ui/SectionHeading"

interface ExpertiseSectionProps {
  items: ExpertiseItem[]
}

export default function ExpertiseSection({ items }: ExpertiseSectionProps) {
  return (
    <section id="expertise" className="section-stack">
      <SectionHeading
        label="Expertise"
        title="Skills and tools."
      />

      <div className="card-grid expertise-grid">
        {items.map((item) => (
          <GlassPanel key={item.id} className="feature-card expertise-card">
            <span className="card-kicker">{item.category}</span>
            <h3>{item.description}</h3>
            <div className="skills-list">
              {item.skills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <span className="skill-pill">{skill.name}</span>
                </div>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  )
}
