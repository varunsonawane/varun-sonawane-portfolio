"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ExternalLink } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false })
  const controls = useAnimation()

  const roles = [
    'Data Engineer',
    'Software Developer',
    'AI Engineer', 
    'ML Engineer',
    'Cloud Architect',
    
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText !== currentText) {
        setDisplayText(currentText.slice(0, displayText.length + 1))
      } else if (isDeleting && displayText !== '') {
        setDisplayText(currentText.slice(0, displayText.length - 1))
      } else if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1200)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    }, isDeleting ? 60 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  // Animate on scroll
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  if (!mounted) return null

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 bg-background" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-pulse" />
      
      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={
              {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }
            }
          />
        ))}
      </div>

      {/* Enhanced Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-primary/10 rounded-lg rotate-12"
          animate={{
            y: [0, -20, 0],
            rotate: [12, 25, 12],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-accent/20 rounded-lg -rotate-12"
          animate={{
            y: [0, 25, 0],
            rotate: [-12, -30, -12],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-muted/30 rounded-lg rotate-45"
          animate={{
            y: [0, -30, 0],
            rotate: [45, 90, 45],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 bg-primary/5 rounded-lg -rotate-6"
          animate={{
            y: [0, 20, 0],
            rotate: [-6, 10, -6],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 lg:space-y-12"
          >
            <div className="space-y-6 lg:space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-foreground text-xl lg:text-2xl xl:text-3xl font-semibold mb-3"
              >
                Hi, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
              >
                Varun Sonawane
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-medium min-h-[60px] flex items-center"
              >
                <span className="text-foreground">{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-primary ml-1"
                >
                  |
                </motion.span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl lg:max-w-4xl"
            >
              Master's student at Indiana University Bloomington, passionate about Data Engineering, Software Development, Cloud Computing,
              and Machine Learning. I build scalable data pipelines and turn complex data challenges into elegant
              engineering solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 lg:gap-8"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  size="lg" 
                  className="hover:bg-primary/20 hover:text-foreground hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg" 
                  asChild
                >
                  <a href="https://drive.google.com/file/d/1s8hk3Xlj6-aX3xUeYzWDXMZ7RqI7L-fd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-3 h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 hover:animate-bounce" />
                    <span className="font-medium">Resume</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:bg-primary/20 hover:text-foreground hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg" 
                  asChild
                >
                  <a href="https://linkedin.com/in/varun-sonawane" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 hover:animate-pulse" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:bg-primary/20 hover:text-foreground hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg" 
                  asChild
                >
                  <a href="https://github.com/varunsonawane" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 hover:rotate-12" />
                    <span className="font-medium">GitHub</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:bg-primary/20 hover:text-foreground hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg" 
                  asChild
                >
                  <a href="https://leetcode.com/u/vsonawane" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-3 h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 hover:scale-110" />
                    <span className="font-medium">LeetCode</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-10 lg:gap-12 pt-10 lg:pt-12 border-t border-border"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">3.8</div>
                <div className="text-base lg:text-lg text-muted-foreground mt-2">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">10+</div>
                <div className="text-base lg:text-lg text-muted-foreground mt-2">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">1+</div>
                <div className="text-base lg:text-lg text-muted-foreground mt-2">Years Experience</div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Column - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Enhanced Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Portrait container with magnetic effect */}
              <motion.div 
                className="relative bg-gradient-to-br from-muted/10 to-muted/5 rounded-2xl p-10 lg:p-12 xl:p-16 backdrop-blur-sm border border-border/50"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/varun-portrait.png"
                    alt="Varun Sonawane"
                    width={500}
                    height={500}
                    className="rounded-xl w-full max-w-md lg:max-w-lg xl:max-w-xl"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Enhanced Floating tech icons */}
              <motion.div 
                className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 bg-primary/10 backdrop-blur-sm rounded-lg p-4 lg:p-6"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, rotate: 15 }}
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-primary/20 rounded" />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-accent/10 backdrop-blur-sm rounded-lg p-4 lg:p-6"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{ scale: 1.1, rotate: -20 }}
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-accent/20 rounded" />
              </motion.div>

              {/* New orbital elements */}
              <motion.div
                className="absolute top-1/2 -right-12 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full"
                animate={{
                  y: [0, -40, 0],
                  x: [0, 20, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/4 -left-8 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full"
                animate={{
                  y: [0, 30, 0],
                  x: [0, -15, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
