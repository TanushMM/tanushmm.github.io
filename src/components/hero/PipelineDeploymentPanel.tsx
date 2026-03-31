import { motion } from "framer-motion"
import { Activity, Cloud, Container, Workflow } from "lucide-react"
import { useEffect, useState } from "react"
import GlassPanel from "../ui/GlassPanel"

const pipelineSteps = [
  {
    id: "checkout",
    icon: Workflow,
    command: "git checkout main && pnpm test",
    output: "tests green - strategy-engine contract checks passed",
    label: "Validate",
  },
  {
    id: "docker",
    icon: Container,
    command: "docker build -t ghcr.io/tanushmm/trade-engine:sha-a81c .",
    output: "image layered - base runtime, market adapter, risk worker",
    label: "Package",
  },
  {
    id: "push",
    icon: Cloud,
    command: "docker push ghcr.io/tanushmm/trade-engine:sha-a81c",
    output: "registry synced - immutable artifact promoted to release",
    label: "Publish",
  },
  {
    id: "deploy",
    icon: Activity,
    command: "terraform apply && aws ecs update-service trade-engine-prod",
    output: "service converged - ALB healthy - live logs streaming",
    label: "Deploy",
  },
] as const

export default function PipelineDeploymentPanel() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % pipelineSteps.length)
    }, 1800)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <GlassPanel className="hero-sim-panel pipeline-panel">
      <div className="terminal-bar">
        <span className="dot red" />
        <span className="dot amber" />
        <span className="dot green" />
        <span className="terminal-title">trade-engine-prod / ci-cd stream</span>
      </div>

      <div className="hero-sim-head">
        <div>
          <span className="card-kicker">Backend Deployment Simulation</span>
          <h3>CI/CD pipeline for a trading backend</h3>
        </div>
        <span className="status-pill">
          <span className="live-dot" />
          live
        </span>
      </div>

      <div className="pipeline-stage-row">
        {pipelineSteps.map((step, index) => {
          const Icon = step.icon
          const state =
            index < activeStep ? "done" : index === activeStep ? "running" : "queued"

          return (
            <div key={step.id} className={`pipeline-stage is-${state}`}>
              <Icon size={14} />
              <span>{step.label}</span>
            </div>
          )
        })}
      </div>

      <div className="terminal-body pipeline-stream">
        {pipelineSteps.map((step, index) => {
          const state =
            index < activeStep ? "done" : index === activeStep ? "running" : "queued"

          return (
            <motion.div
              key={step.id}
              className={`stream-line is-${state}`}
              animate={{ opacity: state === "queued" ? 0.42 : 1, x: 0 }}
              initial={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.28 }}
            >
              <div className="stream-command">
                <span className="prompt">$</span>
                <span>{step.command}</span>
              </div>
              <div className="stream-output">{step.output}</div>
            </motion.div>
          )
        })}

        <div className="stream-line stream-line-cursor">
          <span className="prompt">$</span>
          <span>tail -f /aws/ecs/trade-engine-prod</span>
          <span className="terminal-cursor" />
        </div>
      </div>

      <div className="pipeline-meta-grid">
        <div>
          <span className="meta-label">Artifact</span>
          <strong>trade-engine:sha-a81c</strong>
        </div>
        <div>
          <span className="meta-label">Runtime</span>
          <strong>Docker + ECS Fargate</strong>
        </div>
        <div>
          <span className="meta-label">Region</span>
          <strong>ap-south-1</strong>
        </div>
      </div>
    </GlassPanel>
  )
}
