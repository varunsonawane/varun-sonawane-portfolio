"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Database, Code2, Brain, Server, BarChart3 } from "lucide-react"

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    color: "text-blue-500",
  },
  {
    title: "Data Engineering", 
    icon: Database,
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Data Modeling"],
    color: "text-green-500",
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "Java", "C++", "TypeScript", "R"],
    color: "text-purple-500",
  },
  {
    title: "ML & LLMs",
    icon: Brain,
    skills: ["Scikit-learn", "TensorFlow", "LangChain", "Prompt Engineering", "ReAct"],
    color: "text-pink-500",
  },
  {
    title: "Big Data & ETL",
    icon: Server,
    skills: ["Apache Airflow", "PySpark", "Spark", "Hadoop", "Batch Processing"],
    color: "text-orange-500",
  },
  {
    title: "Visualization & Tools",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "Git", "Linux", "VS Code", "System Design"],
    color: "text-cyan-500",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-24 xl:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[6%] left-[78%] w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-accent/7 rounded-lg rotate-[117deg] animate-float" />
        <div
          className="absolute top-[38%] right-[4%] w-14 h-14 lg:w-18 lg:h-18 xl:w-22 xl:h-22 bg-primary/11 rounded-lg -rotate-[203deg] animate-float"
          style={{ animationDelay: "3.4s" }}
        />
        <div
          className="absolute top-[65%] left-[12%] w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-muted/8 rounded-lg rotate-[341deg] animate-float"
          style={{ animationDelay: "1.7s" }}
        />
        <div
          className="absolute bottom-[22%] right-[68%] w-10 h-10 lg:w-14 lg:h-14 xl:w-18 xl:h-18 bg-accent/13 rounded-lg -rotate-[56deg] animate-float"
          style={{ animationDelay: "4.9s" }}
        />
        <div
          className="absolute bottom-[8%] left-[35%] w-18 h-18 lg:w-24 lg:h-24 xl:w-30 xl:h-30 bg-primary/9 rounded-lg rotate-[289deg] animate-float"
          style={{ animationDelay: "2.6s" }}
        />
        <div
          className="absolute top-[20%] right-[85%] w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-muted/15 rounded-lg -rotate-[178deg] animate-float"
          style={{ animationDelay: "0.3s" }}
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
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6 cursor-default"
            whileHover={{ 
              scale: 1.02,
              color: "hsl(var(--primary))",
              transition: { duration: 0.3 }
            }}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto cursor-default"
            whileHover={{ 
              color: "hsl(var(--foreground))",
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            Technologies and tools I use to build scalable solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group-hover:border-primary/30 cursor-pointer overflow-hidden relative">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="pb-4 relative z-10">
                  <motion.div 
                    className="flex items-center gap-3 mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.3 }
                      }}
                      className="p-2 rounded-lg bg-background/10 group-hover:bg-primary/10 transition-colors duration-300 relative overflow-hidden"
                    >
                      {/* Shine effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <category.icon className={`h-6 w-6 ${category.color} group-hover:text-primary transition-colors duration-300 relative z-10`} />
                    </motion.div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{category.title}</CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { 
                            duration: 0.3, 
                            delay: (index * 0.1) + (skillIndex * 0.05)
                          }
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-muted/50 hover:bg-primary/20 text-foreground hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}