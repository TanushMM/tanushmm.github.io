import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import PipelineDeploymentPanel from "../hero/PipelineDeploymentPanel"
import type { IntroData } from "../../types/portfolio"
import GlassPanel from "../ui/GlassPanel"

interface IntroductionSectionProps {
  intro: IntroData
}

export default function IntroductionSection({
  intro,
}: IntroductionSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % intro.rotatingRoles.length)
    }, 2200)

    return () => window.clearInterval(timer)
  }, [intro.rotatingRoles.length])

  return (
    <section id="introduction" className="hero-section">
      <div className="hero-grid">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <GlassPanel className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={14} />
              Software Engineer Portfolio
            </div>
            <h1>
              Hello, I&apos;m <span>{intro.name}</span>
            </h1>
            <p className="hero-lead">
              a{" "}
              <span className="hero-inline-role">
                {intro.rotatingRoles[roleIndex]}
              </span>
            </p>
            <p className="hero-body">{intro.summary}</p>
            <p className="hero-body">{intro.description}</p>

            <div className="cta-row">
              <a href="#projects" className="primary-cta">
                View Selected Work
              </a>
              <a href="#contact" className="secondary-cta">
                Let&apos;s Connect
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="meta-label">Focus</span>
                <strong>Backend systems, AI tooling, cloud deployment</strong>
              </div>
              <div>
                <span className="meta-label">Approach</span>
                <strong>Scalable architecture with calm execution</strong>
              </div>
            </div>
          </GlassPanel>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <PipelineDeploymentPanel />
        </motion.div>
      </div>

      {/* <motion.div
        className="hero-secondary"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.18 }}
      >
      </motion.div> */}
    </section>
  )
}
