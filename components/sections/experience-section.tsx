"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    title: "Data Engineer Intern",
    company: "The Commons XR",
    location: "San Diego, USA",
    period: "May 2025 - Aug 2025",
    type: "Internship",
    achievements: [
      "Achieved real-time, cross-system data syncing, as measured by a 100% reduction in manual handoffs and faster reporting cycles, by building data pipelines from PostgreSQL to both PostgreSQL and BigQuery, and implementing CDC using Google Cloud Datastream.",
      "Improved query maintainability and execution reliability, as measured by a 40% drop in SQL runtime errors and smoother dev handoffs, by refactoring legacy SQL into modular SQLx files and integrating them into Python-based BigQuery pipelines.",
      "Delivered ready-to-serve datasets for XR session analytics, as measured by improved dashboard and insight accuracy, by designing batch transformation workflows in BigQuery and developing interactive dashboards using Plotly and Dash.",
      "Enabled scalable LLM-driven activity scoring, as measured by faster prompt iteration and consistent response quality, by building a tuned Retrieval-Augmented Generation (RAG) model in Vertex AI and documenting the full prompt architecture.",
    ],
    technologies: [
      "PostgreSQL",
      "BigQuery",
      "Google Cloud Datastream",
      "SQLx",
      "Python",
      "Plotly",
      "Dash",
      "Vertex AI",
      "RAG",
    ],
  },
  {
    title: "Technical Lead",
    company: "Unstop Igniters",
    location: "India",
    period: "Mar 2022 - Jul 2023",
    type: "Leadership",
    achievements: [
      "Implemented structured project management for 4 hackathons and 8+ coding competitions, enhancing team work while showing attention to detail in requirements gathering across technical challenges.",
      "Coordinated 10+ member teams for 5 industry speaker sessions and 7 technical workshops, defining clear project scope and success metrics while demonstrating communication, organization, and problem-solving abilities.",
      "Engineered systematic technical evaluation rubrics for multi-tier hackathon judging, implementing quantifiable metrics for algorithmic efficiency, code maintainability, system architecture, and API design patterns while delivering technical mentorship on RESTful services, containerization, and cloud-native deployment methodologies.",
    ],
    technologies: [
      "Project Management",
      "Team Leadership",
      "System Architecture",
      "API Design",
      "RESTful Services",
      "Containerization",
      "Cloud Deployment",
    ],
  },
  {
    title: "Data Science Intern",
    company: "CodeClause",
    location: "Pune, Maharashtra, India",
    period: "Feb 2022 - Mar 2022",
    type: "Internship",
    achievements: [
      "Led the project 'Predicting Term Deposit Subscription,' showcasing proficiency in data science through extensive research and advanced analytical techniques.",
      "Employed web scraping for comprehensive data acquisition and implemented advanced data cleaning techniques to ensure high-quality datasets.",
      "Developed a machine learning model using regression algorithms to predict term deposit subscriptions, demonstrating logical thinking and comprehensive understanding of the data science lifecycle.",
      "Showcased readiness to tackle complex challenges in Data Science through practical implementation of end-to-end ML solutions.",
    ],
    technologies: [
      "Data Analytics",
      "Statistics",
      "Python",
      "Machine Learning",
      "Data Science",
      "Web Scraping",
      "Regression Algorithms",
    ],
  },
  {
    title: "Ethical Hacking & Cyber Security Intern",
    company: "Supraja Technologies",
    location: "India",
    period: "Aug 2020 - Sep 2020",
    type: "Internship",
    achievements: [
      "Specialized in Ethical Hacking and Cyber Security, gaining expertise in identifying system vulnerabilities through intrusion evasion, firewall management, and honeypot analysis.",
      "Honed skills in proposing effective mitigation strategies through comprehensive ethical hacking exercises and security assessments.",
      "Utilized advanced security tools including Nmap, Wireshark, Nessus, and firewalls for comprehensive security assessments and penetration testing.",
      "Gained hands-on experience with Kali Linux, employing advanced ethical hacking and vulnerability analysis techniques to contribute to security protocol refinement alongside the cybersecurity team.",
    ],
    technologies: [
      "Kali Linux",
      "Ethical Hacking",
      "Cybersecurity",
      "Nmap",
      "Wireshark",
      "Tenable Nessus",
      "Penetration Testing",
      "Vulnerability Analysis",
    ],
  },
]

export function ExperienceSection() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})

  const toggleExpanded = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }
  return (
    <section id="experience" className="py-20 lg:py-24 xl:py-28 bg-background relative overflow-hidden">
      {/* Random floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[18%] left-[85%] w-14 h-14 lg:w-20 lg:h-20 xl:w-26 xl:h-26 bg-accent/8 rounded-lg rotate-[276deg] animate-float" />
        <div
          className="absolute top-[42%] right-[12%] w-30 h-30 lg:w-38 lg:h-38 xl:w-46 xl:h-46 bg-primary/6 rounded-lg -rotate-[189deg] animate-float"
          style={{ animationDelay: "3.7s" }}
        />
        <div
          className="absolute top-[65%] left-[22%] w-10 h-10 lg:w-14 lg:h-14 xl:w-18 xl:h-18 bg-muted/13 rounded-lg rotate-[123deg] animate-float"
          style={{ animationDelay: "1.9s" }}
        />
        <div
          className="absolute bottom-[8%] right-[75%] w-18 h-18 lg:w-24 lg:h-24 xl:w-30 xl:h-30 bg-accent/11 rounded-lg -rotate-[234deg] animate-float"
          style={{ animationDelay: "4.1s" }}
        />
        <div
          className="absolute bottom-[45%] left-[5%] w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-primary/9 rounded-lg rotate-[67deg] animate-float"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="absolute top-[25%] right-[35%] w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-muted/14 rounded-lg -rotate-[145deg] animate-float"
          style={{ animationDelay: "0.8s" }}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">Experience</h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>        
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                <CardHeader className="pb-4">
                  <div className="flex flex-col gap-3">
                    <div>
                      <CardTitle className="text-lg xl:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{experience.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1 group-hover:text-foreground transition-colors duration-300">
                          <ExternalLink className="h-4 w-4 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1 group-hover:text-foreground transition-colors duration-300">
                          <MapPin className="h-4 w-4 group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-1 text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                        <Calendar className="h-4 w-4 group-hover:scale-110 group-hover:text-secondary transition-all duration-300" />
                        <span>{experience.period}</span>
                      </div>
                      <Badge variant="outline" className="self-start sm:self-auto group-hover:bg-primary/10 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">{experience.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm group-hover:text-primary transition-colors duration-300">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.slice(0, expandedCards[index] ? experience.achievements.length : 2).map((achievement, achievementIndex) => (
                        <motion.li 
                          key={achievementIndex} 
                          className="flex items-start gap-2 hover:bg-primary/5 rounded-lg p-2 -m-2 transition-all duration-300 group/item"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          whileHover={{ x: 4 }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 group-hover/item:bg-accent transition-all duration-300" />
                          <p className="text-muted-foreground leading-relaxed text-sm group-hover/item:text-foreground transition-colors duration-300">{achievement}</p>
                        </motion.li>
                      ))}
                      {experience.achievements.length > 2 && (
                        <motion.li 
                          className="flex items-center gap-2 mt-3"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="flex items-center gap-2 text-primary hover:text-primary/80 hover:bg-primary/10 px-3 py-1 rounded-lg transition-all duration-300 text-sm font-medium group/btn border border-transparent hover:border-primary/30"
                          >
                            {expandedCards[index] ? (
                              <>
                                <ChevronUp className="h-4 w-4 group-hover/btn:scale-125 group-hover/btn:rotate-180 transition-all duration-300" />
                                Show Less
                              </>
                            ) : (
                              <>
                                <ChevronDown className="h-4 w-4 group-hover/btn:scale-125 group-hover/btn:bounce transition-all duration-300" />
                                +{experience.achievements.length - 2} more achievements...
                              </>
                            )}
                          </button>
                        </motion.li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors duration-300">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {experience.technologies.slice(0, 6).map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge variant="secondary" className="text-xs px-2 py-1 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                      {experience.technologies.length > 6 && (
                        <Badge variant="outline" className="text-xs px-2 py-1 hover:bg-accent/20 hover:text-accent hover:border-accent/50 hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse">
                          +{experience.technologies.length - 6}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-muted/50 rounded-full border border-border/50 hover:bg-muted/70 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group/timeline">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse group-hover/timeline:scale-125 group-hover/timeline:bg-accent transition-all duration-300" />
              <span className="text-sm font-medium text-foreground group-hover/timeline:text-primary transition-colors duration-300">Currently seeking full-time opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
