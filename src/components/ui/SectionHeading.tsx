interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{label}</span>
      <h2>{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  )
}
