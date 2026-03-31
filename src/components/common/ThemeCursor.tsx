import { useEffect, useRef, useState } from "react"

interface ThemeCursorProps {
  theme: "dark" | "light"
}

export default function ThemeCursor({ theme }: ThemeCursorProps) {
  const [enabled, setEnabled] = useState(false)
  const [pointerDown, setPointerDown] = useState(false)
  const [interactive, setInteractive] = useState(false)
  const dotRef = useRef<HTMLDivElement | null>(null)
  const haloRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")
    const updateEnabled = () => {
      setEnabled(media.matches)
      document.body.classList.toggle("has-custom-cursor", media.matches)
    }

    updateEnabled()
    media.addEventListener("change", updateEnabled)

    return () => {
      document.body.classList.remove("has-custom-cursor")
      media.removeEventListener("change", updateEnabled)
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      return
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let haloX = mouseX
    let haloY = mouseY
    let frame = 0

    const setVariant = (target: EventTarget | null) => {
      const element = target instanceof HTMLElement ? target : null
      setInteractive(
        Boolean(element?.closest("a, button, input, textarea, select, [role='button']")),
      )
    }

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
      setVariant(event.target)
    }

    const handleDown = () => setPointerDown(true)
    const handleUp = () => setPointerDown(false)

    const animate = () => {
      haloX += (mouseX - haloX) * 0.14
      haloY += (mouseY - haloY) * 0.14

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${haloX}px, ${haloY}px, 0)`
      }

      frame = window.requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mousedown", handleDown)
    window.addEventListener("mouseup", handleUp)
    frame = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mousedown", handleDown)
      window.removeEventListener("mouseup", handleUp)
      window.cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

  return (
    <>
      <div
        ref={haloRef}
        className={`theme-cursor-halo ${theme} ${interactive ? "is-interactive" : ""} ${pointerDown ? "is-down" : ""}`}
        aria-hidden="true"
      >
        <span className="theme-cursor-halo-glint" />
      </div>
      <div
        ref={dotRef}
        className={`theme-cursor-dot ${theme} ${interactive ? "is-interactive" : ""} ${pointerDown ? "is-down" : ""}`}
        aria-hidden="true"
      >
        <span className="theme-cursor-core" />
        <span className="theme-cursor-spec" />
      </div>
    </>
  )
}
