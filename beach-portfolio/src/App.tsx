import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/hero/Hero'
import { AboutSection } from './components/about/AboutSection'
import { TechStackSection } from './components/tech/TechStackSection'
import { ProjectsSection } from './components/projects/ProjectsSection'
import { EducationSection } from './components/education/EducationSection'
import { ContactSection } from './components/contact/ContactSection'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:px-4 focus:py-2 focus:rounded-full focus:bg-[var(--color-cyan)] focus:text-[var(--color-ocean-950)]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
