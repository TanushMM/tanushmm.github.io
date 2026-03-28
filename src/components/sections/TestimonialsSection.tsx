import { Star } from "lucide-react"
import type { TestimonialItem } from "../../types/portfolio"
import GlassPanel from "../ui/GlassPanel"
import SectionHeading from "../ui/SectionHeading"

interface TestimonialsSectionProps {
  items: TestimonialItem[]
}

export default function TestimonialsSection({
  items,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="section-stack">
      <SectionHeading
        label="Testimonials"
        title="What people say."
      />

      <div className="testimonial-grid">
        {items.map((item) => (
          <GlassPanel key={item.id} className="testimonial-card">
            <div className="stars">
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star key={index} size={14} fill="currentColor" />
              ))}
            </div>
            <p>&ldquo;{item.content}&rdquo;</p>
            <footer>
              <strong>{item.author}</strong>
              <span>
                {item.role} · {item.company}
              </span>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  View LinkedIn
                </a>
              ) : null}
            </footer>
          </GlassPanel>
        ))}
      </div>
    </section>
  )
}
