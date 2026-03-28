import data from "./data/data.json"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import ThemeCursor from "./components/common/ThemeCursor"
import ContactSection from "./components/sections/ContactSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import ExpertiseSection from "./components/sections/ExpertiseSection"
import FindMeSection from "./components/sections/FindMeSection"
import IntroductionSection from "./components/sections/IntroductionSection"
import MiniGameSection from "./components/sections/MiniGameSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import ResumeSection from "./components/sections/ResumeSection"
import TestimonialsSection from "./components/sections/TestimonialsSection"
import { useTheme } from "./hooks/useTheme"
import type { PortfolioData } from "./types/portfolio"

const portfolio = data as PortfolioData

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="app-shell" data-theme={theme}>
      <ThemeCursor theme={theme} />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />

      <Header theme={theme} onThemeChange={setTheme} />

      <main id="top" className="shell page-stack">
        <IntroductionSection intro={portfolio.introduction} />
        <FindMeSection socials={portfolio.socials} />
        <ExperienceSection items={portfolio.experience} />
        <ExpertiseSection items={portfolio.expertise} />
        <ProjectsSection items={portfolio.projects} />
        <ResumeSection resume={portfolio.resume} />
        <TestimonialsSection items={portfolio.testimonials} />
        <ContactSection
          contact={portfolio.contact}
          socials={portfolio.socials}
        />
        <MiniGameSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
