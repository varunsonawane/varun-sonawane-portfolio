"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 150 // Increased offset for better detection

      // Check if we're at the very top (hero section)
      if (scrollPosition < 200) {
        setActiveSection("")
        return
      }

      // Find the section that is currently most visible
      let currentSection = ""
      let maxVisibility = 0

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          const sectionTop = offsetTop - 150
          const sectionBottom = offsetTop + offsetHeight - 150
          
          // Check if the section is in viewport
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const visibility = Math.min(scrollPosition - sectionTop, sectionBottom - scrollPosition)
            if (visibility > maxVisibility) {
              maxVisibility = visibility
              currentSection = section
            }
          }
        }
      }

      // Fallback: if no section is detected, find the closest one
      if (!currentSection) {
        let minDistance = Infinity
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const distance = Math.abs(element.offsetTop - scrollPosition)
            if (distance < minDistance) {
              minDistance = distance
              currentSection = section
            }
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    // Initial call
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const scrollToSection = (href: string) => {
    const targetSection = href.slice(1) // Remove the # from href
    const element = document.querySelector(href)
    
    if (element) {
      // Immediately update active section
      setActiveSection(targetSection)
      
      const offset = 120 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      
      // Ensure the active section stays updated after smooth scroll
      setTimeout(() => {
        setActiveSection(targetSection)
      }, 100)
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <div className="flex-shrink-0">
            <button 
              onClick={() => {
                setActiveSection("") // Clear active section when going to hero
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img 
                src="/images/VS_logo.png" 
                alt="VS Logo" 
                className="h-16 lg:h-20 xl:h-24 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.textContent = 'Varun Sonawane';
                  fallback.className = 'text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground hover:text-primary transition-colors duration-300';
                  target.parentNode?.appendChild(fallback);
                }}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 lg:px-6 py-3 lg:py-4 rounded-md text-base lg:text-lg xl:text-xl font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
