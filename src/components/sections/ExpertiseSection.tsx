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
        title="Technical strengths organized as reusable capability groups."
      />

      <div className="card-grid expertise-grid">
        {items.map((item) => (
          <GlassPanel key={item.id} className="feature-card expertise-card">
            <span className="card-kicker">{item.category}</span>
            <h3>{item.description}</h3>
            <div className="skills-list">
              {item.skills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-copy">
                    <span>{skill.name}</span>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  )
}
