import { useEffect, useMemo, useState } from "react"
import { RotateCcw, Sparkles, Target } from "lucide-react"
import GlassPanel from "../ui/GlassPanel"
import SectionHeading from "../ui/SectionHeading"

const CELL_COUNT = 12
const MAX_LIVES = 3

const nextCell = (current: number) => {
  const candidate = Math.floor(Math.random() * CELL_COUNT)
  if (candidate === current) {
    return (candidate + 1) % CELL_COUNT
  }
  return candidate
}

export default function MiniGameSection() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [lives, setLives] = useState(MAX_LIVES)
  const [activeCell, setActiveCell] = useState(() =>
    Math.floor(Math.random() * CELL_COUNT),
  )
  const [status, setStatus] = useState<"ready" | "running" | "lost">("ready")

  const tickMs = useMemo(() => Math.max(420, 1100 - score * 22), [score])

  useEffect(() => {
    if (status !== "running") {
      return
    }

    const timer = window.setTimeout(() => {
      setActiveCell((previous) => nextCell(previous))
      setLives((previous) => {
        const updated = previous - 1
        if (updated <= 0) {
          setStatus("lost")
          setBestScore((best) => Math.max(best, score))
          return 0
        }
        return updated
      })
    }, tickMs)

    return () => {
      window.clearTimeout(timer)
    }
  }, [score, status, tickMs])

  const handleReset = () => {
    setScore(0)
    setLives(MAX_LIVES)
    setStatus("ready")
    setActiveCell(Math.floor(Math.random() * CELL_COUNT))
  }

  const handleCellClick = (cellIndex: number) => {
    if (status === "lost") {
      return
    }

    if (status === "ready") {
      setStatus("running")
    }

    if (cellIndex === activeCell) {
      setScore((previous) => {
        const updated = previous + 1
        setBestScore((best) => Math.max(best, updated))
        return updated
      })
      setActiveCell((previous) => nextCell(previous))
      return
    }

    setLives((previous) => {
      const updated = previous - 1
      if (updated <= 0) {
        setStatus("lost")
        return 0
      }
      return updated
    })
  }

  return (
    <section className="section-stack mini-game-section" id="playground">
      <SectionHeading
        label="Playground"
        title="Quick break."
      />

      <GlassPanel className="mini-game-panel">
        <div className="mini-game-top">
          <span className="card-kicker">Glass Tap Game</span>
          <div className="pill-row">
            <span className="status-pill">
              <Target size={13} />
              Score {score}
            </span>
            <span className="status-pill">Best {bestScore}</span>
            <span className="status-pill">Lives {lives}</span>
          </div>
        </div>

        <p className="mini-game-copy">
          Tap the glowing droplet before it hops away. Misses cost lives.
        </p>

        <div className="mini-game-grid" role="grid" aria-label="Mini game board">
          {Array.from({ length: CELL_COUNT }, (_, index) => {
            const active = index === activeCell
            return (
              <button
                key={index}
                type="button"
                className={`mini-game-cell ${active ? "is-active" : ""}`}
                onClick={() => handleCellClick(index)}
                aria-label={active ? "Active target" : "Empty slot"}
              >
                {active ? <Sparkles size={16} /> : null}
              </button>
            )
          })}
        </div>

        <div className="mini-game-actions">
          <span className={`tiny-badge ${status === "lost" ? "is-danger" : ""}`}>
            {status === "lost"
              ? "You lost. Reset to play again."
              : status === "ready"
                ? "Click any cell to start."
                : "Running"}
          </span>
          <button type="button" className="secondary-cta detail-button" onClick={handleReset}>
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
      </GlassPanel>
    </section>
  )
}
