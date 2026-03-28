import { useEffect, useState } from "react"

type Theme = "dark" | "light"

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setThemeState(initialTheme)
    document.documentElement.setAttribute("data-theme", initialTheme)
  }, [])

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme)
    localStorage.setItem("theme", nextTheme)
    document.documentElement.setAttribute("data-theme", nextTheme)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return { theme, setTheme, toggleTheme }
}
