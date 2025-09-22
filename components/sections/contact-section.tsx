"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto URL with pre-filled information
    const mailtoSubject = formData.subject ? `${formData.subject}` : "Contact from Portfolio"
    const mailtoBody = `Hi Varun,

${formData.message}

Best regards,
${formData.name}
${formData.email ? `Email: ${formData.email}` : ''}`

    const mailtoURL = `mailto:vsonawa23@gmail.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`
    
    // Open default mail client
    window.location.href = mailtoURL
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vsonawa23@gmail.com",
      href: "mailto:vsonawa23@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (812) 929-3270",
      href: "tel:+18129293270",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bloomington, IN",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/varun-sonawane",
      color: "text-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/varunsonawane",
      color: "text-foreground",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/varun__sonawane/",
      color: "text-pink-500",
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      href: "https://leetcode.com/u/vsonawane",
      color: "text-orange-500",
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-24 xl:py-28 bg-muted/20 relative overflow-hidden">
      {/* Random floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[65%] w-16 h-16 lg:w-22 lg:h-22 xl:w-28 xl:h-28 bg-accent/12 rounded-lg rotate-[312deg] animate-float" />
        <div
          className="absolute top-[55%] right-[3%] w-22 h-22 lg:w-30 lg:h-30 xl:w-38 xl:h-38 bg-primary/8 rounded-lg -rotate-[89deg] animate-float"
          style={{ animationDelay: "2.4s" }}
        />
        <div
          className="absolute top-[30%] left-[8%] w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 bg-muted/7 rounded-lg rotate-[156deg] animate-float"
          style={{ animationDelay: "4.3s" }}
        />
        <div
          className="absolute bottom-[15%] left-[82%] w-10 h-10 lg:w-14 lg:h-14 xl:w-18 xl:h-18 bg-accent/15 rounded-lg -rotate-[267deg] animate-float"
          style={{ animationDelay: "1.6s" }}
        />
        <div
          className="absolute bottom-[38%] right-[58%] w-20 h-20 lg:w-26 lg:h-26 xl:w-32 xl:h-32 bg-primary/10 rounded-lg rotate-[198deg] animate-float"
          style={{ animationDelay: "3.8s" }}
        />
        <div
          className="absolute top-[78%] right-[88%] w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-muted/11 rounded-lg -rotate-[45deg] animate-float"
          style={{ animationDelay: "0.2s" }}
        />
      </div>
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            Let's discuss opportunities and ideas
          </p>
        </motion.div>        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  const content = (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:bg-card/70 hover:border-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                        boxShadow: "0 20px 40px rgba(var(--primary), 0.15)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Glow effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <motion.div 
                        className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 relative z-10"
                        whileHover={{ rotate: 5, boxShadow: "0 0 20px rgba(var(--primary), 0.3)" }}
                      >
                        <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </motion.div>
                  )

                  return info.href ? (
                    <a key={info.label} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <motion.div
                      key={link.label}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 relative overflow-hidden group h-12 px-4 min-w-[120px]"
                        asChild
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="relative z-10">
                          {/* Glow effect overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <IconComponent className={`h-5 w-5 mr-2 ${link.color} transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative z-10`} />
                          {link.label}
                        </a>
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 25px 50px rgba(var(--primary), 0.15)",
              transition: { duration: 0.3 }
            }}
            className="relative"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 hover:border-border hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 relative overflow-hidden group">
              {/* Glow effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Varun Sonawane. All rights reserved.  
          </p>
          <p className="text-muted-foreground text-sm mt-2">  </p>
        </motion.div>
      </div>
    </section>
  )
}
