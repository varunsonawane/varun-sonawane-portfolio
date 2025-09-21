import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { GitHubSection } from "@/components/sections/github-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background" style={{ backgroundColor: 'var(--color-background)' }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubSection />
      <ContactSection />
    </main>
  )
}
