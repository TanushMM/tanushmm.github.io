import { motion } from "framer-motion"
import gsap from "gsap"
import { ArrowLeftRight, CandlestickChart, Sigma } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import GlassPanel from "../ui/GlassPanel"

const scenarios = [
  {
    id: "scan",
    label: "Scan",
    path: "M18 166 L78 140 L136 146 L190 118 L244 126 L306 92 L370 72 L432 52",
    marker: { x: 190, y: 118 },
    guideHeight: 88,
    signalWidth: "46%",
    pnl: "+1.82%",
    zScore: "1.24",
    adf: "0.018",
    halfLife: "4.8h",
    note: "Cointegration confirmed, spread drifting toward the upper band.",
  },
  {
    id: "entry",
    label: "Entry",
    path: "M18 170 L76 148 L132 158 L188 122 L242 118 L298 106 L366 74 L432 58",
    marker: { x: 242, y: 118 },
    guideHeight: 96,
    signalWidth: "71%",
    pnl: "+3.64%",
    zScore: "2.08",
    adf: "0.011",
    halfLife: "3.9h",
    note: "Mean-reversion entry opened with hedge ratio locked and risk capped.",
  },
  {
    id: "exit",
    label: "Exit",
    path: "M18 176 L74 156 L130 164 L186 130 L242 112 L302 88 L370 66 L432 46",
    marker: { x: 370, y: 66 },
    guideHeight: 148,
    signalWidth: "88%",
    pnl: "+4.72%",
    zScore: "0.19",
    adf: "0.009",
    halfLife: "3.4h",
    note: "Spread normalized, inventory flattened, and execution logs archived.",
  },
] as const

export default function TradingSimulationPanel() {
  const [activeScenario, setActiveScenario] = useState(0)
  const markerRef = useRef<SVGCircleElement | null>(null)
  const glowRef = useRef<SVGCircleElement | null>(null)
  const guideRef = useRef<SVGLineElement | null>(null)
  const meterRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveScenario((current) => (current + 1) % scenarios.length)
    }, 3200)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const scenario = scenarios[activeScenario]

    if (markerRef.current) {
      gsap.to(markerRef.current, {
        attr: { cx: scenario.marker.x, cy: scenario.marker.y },
        duration: 0.7,
        ease: "power3.out",
      })
    }

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        attr: { cx: scenario.marker.x, cy: scenario.marker.y },
        duration: 0.7,
        ease: "power3.out",
      })
    }

    if (guideRef.current) {
      gsap.to(guideRef.current, {
        attr: {
          x1: scenario.marker.x,
          x2: scenario.marker.x,
          y1: scenario.marker.y,
          y2: scenario.marker.y + scenario.guideHeight,
        },
        duration: 0.7,
        ease: "power3.out",
      })
    }

    if (meterRef.current) {
      gsap.to(meterRef.current, {
        width: scenario.signalWidth,
        duration: 0.7,
        ease: "power3.out",
      })
    }
  }, [activeScenario])

  const scenario = scenarios[activeScenario]

  return (
    <GlassPanel className="hero-sim-panel trading-panel">
      <div className="hero-sim-head">
        <div>
          <span className="card-kicker">Stat-Arb Simulation</span>
          <h3>Cointegration and mean-reversion preview</h3>
        </div>
        <div className="scenario-switch" role="tablist" aria-label="Trading scenarios">
          {scenarios.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              className={`scenario-chip ${index === activeScenario ? "is-active" : ""}`}
              onClick={() => setActiveScenario(index)}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="trading-chart-shell">
        <svg
          className="spread-svg"
          viewBox="0 0 450 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 64 H432"
            className="spread-band-top"
          />
          <path
            d="M18 118 H432"
            className="spread-band-mid"
          />
          <path
            d="M18 172 H432"
            className="spread-band-bottom"
          />
          <motion.path
            key={scenario.path}
            d={scenario.path}
            className="spread-path"
            initial={{ pathLength: 0.2, opacity: 0.45 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          />
          <circle ref={glowRef} cx="190" cy="118" r="18" className="spread-glow" />
          <line
            ref={guideRef}
            x1="190"
            y1="118"
            x2="190"
            y2="206"
            className="spread-guide"
          />
          <circle ref={markerRef} cx="190" cy="118" r="8" className="spread-marker" />
        </svg>

        <div className="trading-side-data">
          <div className="signal-meter">
            <span className="signal-meter-fill" ref={meterRef} />
          </div>
          <p>{scenario.note}</p>
        </div>
      </div>

      <div className="trade-metrics-grid">
        <div className="trade-metric">
          <span className="meta-label">P&amp;L</span>
          <strong className="trade-positive">{scenario.pnl}</strong>
        </div>
        <div className="trade-metric">
          <span className="meta-label">Z-Score</span>
          <strong>
            <Sigma size={14} />
            {scenario.zScore}
          </strong>
        </div>
        <div className="trade-metric">
          <span className="meta-label">ADF p-value</span>
          <strong>
            <ArrowLeftRight size={14} />
            {scenario.adf}
          </strong>
        </div>
        <div className="trade-metric">
          <span className="meta-label">Half-life</span>
          <strong>
            <CandlestickChart size={14} />
            {scenario.halfLife}
          </strong>
        </div>
      </div>
    </GlassPanel>
  )
}
