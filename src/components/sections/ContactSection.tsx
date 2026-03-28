import { Globe, Mail, MapPin, Send } from "lucide-react"
import type { ContactData, Socials } from "../../types/portfolio"
import GlassPanel from "../ui/GlassPanel"
import SectionHeading from "../ui/SectionHeading"

interface ContactSectionProps {
  contact: ContactData
  socials: Socials
}

export default function ContactSection({
  contact,
  socials,
}: ContactSectionProps) {
  return (
    <section id="contact" className="section-stack">
      <SectionHeading
        label="Contact"
        title="A calm final section for direct outreach and profile handoff."
      />

      <div className="resume-grid">
        <GlassPanel className="resume-hero">
          <span className="card-kicker">Let&apos;s build</span>
          <h2>Open to system-focused roles, collaborations, and thoughtful products.</h2>
          <p>{contact.availability}</p>
          <div className="cta-row">
            <a href={`mailto:${contact.email}`} className="primary-cta">
              <Send size={16} />
              Send an Email
            </a>
          </div>
        </GlassPanel>

        <GlassPanel className="contact-card">
          <div className="contact-row">
            <span>
              <Mail size={15} />
              Email
            </span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="contact-row">
            <span>
              <MapPin size={15} />
              Location
            </span>
            <strong>{contact.location}</strong>
          </div>
          <div className="contact-socials">
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              <Send size={15} />
              LinkedIn
            </a>
            <a href={socials.github} target="_blank" rel="noreferrer">
              <Globe size={15} />
              GitHub
            </a>
            <a href={socials.medium} target="_blank" rel="noreferrer">
              <Mail size={15} />
              Medium
            </a>
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}
