import {
  BookOpenText,
  BriefcaseBusiness,
  Braces,
  ExternalLink,
  Trophy,
} from "lucide-react"
import type { Socials } from "../../types/portfolio"
import GlassPanel from "../ui/GlassPanel"
import SectionHeading from "../ui/SectionHeading"

interface FindMeSectionProps {
  socials: Socials
}

const items = [
  { key: "linkedin", label: "LinkedIn", icon: BriefcaseBusiness },
  { key: "medium", label: "Medium", icon: BookOpenText },
  { key: "microsoft", label: "Microsoft Learn", icon: Braces },
  { key: "leetcode", label: "LeetCode", icon: Trophy },
] as const

export default function FindMeSection({ socials }: FindMeSectionProps) {
  return (
    <section className="section-stack">
      <SectionHeading
        label="Find Me"
        title="Public profiles and learning trails that map the work."
        description="A quick way to explore my writing, learning, problem solving, and professional presence."
      />

      <div className="social-grid">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.key}
              href={socials[item.key]}
              target="_blank"
              rel="noreferrer"
            >
              <GlassPanel className="social-card">
                <div className="social-topline">
                  <Icon size={18} />
                  <ExternalLink size={14} />
                </div>
                <h3>{item.label}</h3>
                <p>Open profile</p>
              </GlassPanel>
            </a>
          )
        })}
      </div>
    </section>
  )
}
