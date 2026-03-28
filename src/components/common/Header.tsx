import { useEffect, useState, type CSSProperties } from "react"
import { Moon, Sun } from "lucide-react"

interface HeaderProps {
  theme: "dark" | "light"
  onThemeChange: (theme: "dark" | "light") => void
}

const navItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
]

export default function Header({ theme, onThemeChange }: HeaderProps) {
  const [activeSection, setActiveSection] = useState(navItems[0].href)

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""))

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.28

      let current = navItems[0].href

      sectionIds.forEach((id, index) => {
        const element = document.getElementById(id)
        if (!element) {
          return
        }

        if (element.offsetTop <= scrollPosition) {
          current = navItems[index].href
        }
      })

      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  const activeIndex = Math.max(
    0,
    navItems.findIndex((item) => item.href === activeSection),
  )

  return (
    <header className="site-header">
      <div className="site-header-backdrop" />
      <div className="shell">
        <div className="header-inner">
          <a href="#top" className="brand-mark">
            <span className="brand-dot" />
            <span className="brand-name">Tanush MM</span>
          </a>

          <div className="header-docks">
            <nav
              className="nav-cluster nav-dock"
              aria-label="Primary"
              style={
                {
                  "--nav-count": navItems.length,
                  "--nav-active-index": activeIndex,
                } as CSSProperties
              }
            >
              <span className="nav-thumb" aria-hidden="true" />
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${activeSection === item.href ? "is-active" : ""}`}
                  aria-current={activeSection === item.href ? "page" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <fieldset className="theme-switcher" aria-label="Choose theme">
              <legend className="theme-switcher-legend">Choose theme</legend>
              <label
                className={`theme-option ${theme === "light" ? "is-active" : ""}`}
              >
                <input
                  className="theme-option-input"
                  type="radio"
                  name="theme"
                  value="light"
                  checked={theme === "light"}
                  onChange={() => onThemeChange("light")}
                />
                <Sun size={16} />
                <span>Light</span>
              </label>
              <label
                className={`theme-option ${theme === "dark" ? "is-active" : ""}`}
              >
                <input
                  className="theme-option-input"
                  type="radio"
                  name="theme"
                  value="dark"
                  checked={theme === "dark"}
                  onChange={() => onThemeChange("dark")}
                />
                <Moon size={16} />
                <span>Dark</span>
              </label>
              <span
                className={`theme-thumb ${theme === "dark" ? "is-dark" : ""}`}
                aria-hidden="true"
              />
            </fieldset>
          </div>
        </div>
      </div>
    </header>
  )
}
