"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-24 xl:py-28 bg-muted/20 relative overflow-hidden">
      {/* Random floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[8%] left-[3%] w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-accent/8 rounded-lg rotate-[73deg] animate-float" />
        <div
          className="absolute top-[45%] right-[7%] w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 bg-primary/6 rounded-lg -rotate-[127deg] animate-float"
          style={{ animationDelay: "2.1s" }}
        />
        <div
          className="absolute top-[25%] left-[88%] w-10 h-10 lg:w-14 lg:h-14 xl:w-18 xl:h-18 bg-muted/12 rounded-lg rotate-[198deg] animate-float"
          style={{ animationDelay: "4.7s" }}
        />
        <div
          className="absolute bottom-[18%] left-[15%] w-20 h-20 lg:w-26 lg:h-26 xl:w-32 xl:h-32 bg-accent/10 rounded-lg -rotate-[45deg] animate-float"
          style={{ animationDelay: "1.4s" }}
        />
        <div
          className="absolute bottom-[35%] right-[92%] w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-primary/14 rounded-lg rotate-[264deg] animate-float"
          style={{ animationDelay: "3.6s" }}
        />
        <div
          className="absolute top-[78%] right-[25%] w-16 h-16 lg:w-22 lg:h-22 xl:w-28 xl:h-28 bg-muted/9 rounded-lg -rotate-[82deg] animate-float"
          style={{ animationDelay: "0.9s" }}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">About Me</h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            My journey from curiosity to scalable engineering
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div 
              className="prose prose-lg max-w-none"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p 
                className="text-muted-foreground text-justify leading-relaxed hover:text-foreground/90 transition-colors duration-300 cursor-default mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                I began my journey with a strong foundation in Information Technology at
                <span className="text-foreground font-medium hover:text-primary transition-colors duration-200"> Savitribai Phule Pune University</span>, graduating with
                honors in Data Science. Today, I'm pursuing my Master's in Computer Science at
                <span className="text-foreground font-medium hover:text-primary transition-colors duration-200"> Indiana University Bloomington</span> (GPA 3.8/4.0),
                focusing on Cloud Computing, Advanced Databases, and Applied Machine Learning.
              </motion.p>

              <motion.p 
                className="text-muted-foreground text-justify leading-relaxed hover:text-foreground/90 transition-colors duration-300 cursor-default"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                From hackathon leader to hackathon winner, from solving SQL queries to designing cloud-scale ETL
                pipelines, my story is about turning curiosity into scalable engineering. I thrive at the intersection
                of data engineering and cloud architecture, building systems that not only work but scale beautifully.
              </motion.p>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Current Focus</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer">Software Development</Badge>
                    <Badge variant="secondary" className="hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer">Data Science</Badge>
                    <Badge variant="secondary" className="hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer">Cloud Computing</Badge>
                    <Badge variant="secondary" className="hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer">Advanced Databases</Badge>
                    <Badge variant="secondary" className="hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer">Applied Machine Learning</Badge>
                    <Badge variant="secondary" className="hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer">Data Engineering</Badge>
                    <Badge variant="secondary" className="hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer">System Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">Master of Science in Computer Science</h4>
                    <p className="text-muted-foreground">Indiana University, Bloomington</p>
                    <p className="text-sm text-muted-foreground">Aug 2024 - May 2026 • GPA: 3.8/4.0</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Bachelor of Engineering in Information Technology</h4>
                    <p className="text-muted-foreground">Savitribai Phule Pune University</p>
                    <p className="text-sm text-muted-foreground">Aug 2019 - May 2023 • GPA: 8.90/10.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-foreground">AWS Certified Developer – Associate</h4>
                      <p className="text-sm text-muted-foreground">Valid until Aug 4, 2027</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Active
                    </Badge>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-foreground">Azure AI Fundamentals</h4>
                      <p className="text-sm text-muted-foreground">Issued Jul 22, 2022</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Certified
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
