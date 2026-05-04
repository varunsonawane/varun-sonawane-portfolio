"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Trophy, Star, GitFork, Youtube } from "lucide-react"

const featuredProjects = [
  {
    title: "IRIS",
    subtitle: "Intelligent Retail & Ingredient Scanner",
    description:
      "An AI-powered grocery assistant that bridges personal health data with real-time food decisions. Users upload lab reports and scan product labels to receive personalized verdicts — Safe, Caution, or Avoid — powered by Claude's vision and reasoning.",
    achievements: [
      "Built at the Claude Builder Club Hackathon by Indiana University students",
      "Lab report analysis extracting health markers like cholesterol and allergies",
      "Real-time product scanning via camera with instant Safe/Caution/Avoid verdicts",
      "Voice feedback via ElevenLabs for hands-free shopping and smart alternative suggestions",
    ],
    technologies: ["Claude (Anthropic)", "ElevenLabs", "React", "Vite", "Node.js", "Express", "Tailwind CSS", "Python", "JavaScript"],
    githubUrl: "https://github.com/varunsonawane/iris",
    liveUrl: "https://iris-assistant-iu-claude.fly.dev/onboarding",
    videoUrl: "https://youtu.be/0iLcWrAg5fA",
    featured: true,
    award: "Honorable Mention Claude Hackathon",
  },

  {
    title: "DataLens",
    subtitle: "Multimodal AI Data Storytelling Platform",
    description:
      "An AI-powered platform that transforms raw CSV/Excel data into rich, multimodal stories using Google Gemini. Features a real-time voice agent for hands-free data exploration, RAG-powered conversations, and parallel image generation woven into narratives.",
    achievements: [
      "Live deployment on Google Cloud Run with full async FastAPI backend",
      "Triple-perspective storytelling (ELI5, Architecture, Analyst) streamed in real-time",
      "Gemini Live Voice Agent via bidirectional WebSocket for conversational data exploration",
      "RAG pipeline with Vertex AI Vector Search (text-embedding-004, 768 dims)",
    ],
    technologies: ["Google Gemini", "FastAPI", "React", "TypeScript", "Vertex AI", "Cloud Run", "GCS", "Firestore", "WebSockets", "SSE"],
    githubUrl: "https://github.com/varunsonawane/DataLens",
    liveUrl: "https://datalens-backend-844382502061.us-central1.run.app/",
    videoUrl: "https://youtu.be/fWmHkDYD4-4?si=Q0_HFH1HI2krSjHl",
    featured: true,
    award: "Google Gemini 3 Hackathon Project",
  },



  {
    title: "VoiceLegal AI",
    subtitle: "AI-Powered Legal Document Assistant",
    description:
      "A Chrome extension that analyzes legal documents instantly using Google Gemini 2.5 and allows users to ask questions via voice interaction powered by ElevenLabs.",
    achievements: [
      "Built for AI Partner Catalyst Hackathon 2025",
      "Integrated Google Gemini 2.5 Flash for analysis",
      "Real-time voice interaction with ElevenLabs Conversational AI",
      "Seamless browser integration via Chrome Extension",
    ],
    technologies: ["Google Gemini", "ElevenLabs", "React", "FastAPI", "Chrome Extension", "Docker", "GCP"],
    githubUrl: "https://github.com/varunsonawane/voicelegal-ai-web-extension",
    liveUrl: "https://voicelegal-ai-web-extension.vercel.app/",
    videoUrl: "https://youtu.be/6w8ochnLB50",
    featured: true,
    award: "GCP Hackathon Project",
  },



  {
    title: "EngageIU",
    subtitle: "Campus Event Attendance Leaderboard",
    description:
      "A real-time campus event engagement platform built for a 24-hour hackathon. Students earn points by entering event check-in codes, with live leaderboard updates via Server-Sent Events and a JWT-protected admin dashboard for full event management.",
    achievements: [
      "Real-time leaderboard via Server-Sent Events with live connection status indicator",
      "Achievement badges (Top, Rising, Dedicated, Consistent) with week-over-week rank trends",
      "JWT-protected admin dashboard with full event CRUD and QR code generation",
      "Cryptographically secure check-in codes with timestamped attendance logging and CSV export",
    ],
    technologies: ["FastAPI", "PostgreSQL", "Docker", "Python", "SQLAlchemy", "Server-Sent Events", "JWT", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/varunsonawane/Engage_IU",
    liveUrl: "engageiu.mooo.com",
    videoUrl: "https://youtu.be/wctD0pbrwcA",
    featured: true,
    award: "Luddy Hackathon Winner",
  },

  {
    title: "DocWeaver",
    subtitle: "Multi-Agent Clinical Intelligence Platform",
    description:
      "A multi-agent AI orchestration platform that transforms clinical workflows through intelligent document processing. Uses 20+ specialized AI agents working in parallel to analyze medical records, generate SOAP notes, and automate care coordination.",
    achievements: [
      "20+ specialized AI agents for each distinct clinical task",
      "Multi-source data fusion, processes 5+ documents in parallel with temporal analysis",
      "Generates complete SOAP notes automatically from brief clinical notes",
      "Automated referral letters, follow-ups, and patient education materials",
    ],
    technologies: ["Google Gemini", "FastAPI", "Next.js", "TypeScript", "Python", "Streamlit", "Async Processing"],
    githubUrl: "https://github.com/varunsonawane/docweaver",
    liveUrl: null,
    videoUrl: "https://youtu.be/vzvPgJDEwkU?si=4QlNXSTwrzjLhMQ7",
    featured: true,
    award: null,
  },

  {
    title: "IdeaGenie",
    subtitle: "LLM-Powered Innovation Ranking Engine",
    description:
      "Architected an end-to-end idea evaluation engine using Flask, Docker, and Qwen LLM via Ollama, implementing the ReAct (Reasoning + Action) framework to simulate iterative reasoning steps for multi-criteria scoring.",
    achievements: [
      "2nd Prize – Hackathon Winner out of 50+ teams",
      "Handled 100+ idea inputs with sub-180ms latency",
      "Hybrid pipeline combining vector similarity with LLM evaluations",
      "Production-ready REST API with input validation and concurrency",
    ],
    technologies: ["Flask", "Docker", "Qwen LLM", "Ollama", "ReAct Framework", "Python", "REST API", "React"],
    githubUrl: "https://github.com/varunsonawane/IdeaGeine",
    liveUrl: null,
    videoUrl: "https://youtu.be/IvfaKyzZBWM?si=hM1rQZCWILffCo1i",
    featured: true,
    award: "2nd Prize Winner",
  },
  {
    title: "AWS Big Data Pipeline",
    subtitle: "End-to-End Health Data Processing System",
    description:
      "A scalable big data pipeline handling 100,000+ health records using distributed PySpark on AWS EC2. Features automated ML training via SageMaker Autopilot and serverless event-driven processing.",
    achievements: [
      "Processed 100k+ records with distributed PySpark on EC2",
      "Automated ML model training using AWS SageMaker Autopilot",
      "Serverless data pipeline with AWS Lambda & S3 triggers",
      "Discovered 72% population risk via Power BI analytics",
    ],
    technologies: ["AWS SageMaker", "PySpark", "AWS Lambda", "EC2", "S3", "Power BI", "Python"],
    githubUrl: "https://github.com/varunsonawane/Big-data-analytics-aws-pyspark",
    liveUrl: null,
    videoUrl: null,
    featured: true,
    award: null,
  },
  {
    title: "ShieldScraper",
    subtitle: "AWS-Based Automated Data Pipeline",
    description:
      "Developed a secure, fully automated web scraping pipeline leveraging Scrapy for data extraction, containerized with Docker, and deployed on AWS ECS Fargate for scalability and reliability.",
    achievements: [
      "Fully automated web scraping pipeline",
      "Real-time monitoring with CloudWatch and SNS",
      "Interactive analytics dashboards with QuickSight",
      "Daily automated workflows with EventBridge",
    ],
    technologies: [
      "Scrapy",
      "Docker",
      "AWS ECS Fargate",
      "AWS Glue",
      "Lambda",
      "DynamoDB",
      "Athena",
      "QuickSight",
      "CloudWatch",
    ],
    githubUrl: "https://github.com/varunsonawane/shieldscraper",
    liveUrl: null,
    videoUrl: null,
    featured: true,
    award: null,
  },
  {
    title: "ETL Pipeline for Weather Data",
    subtitle: "Airflow and Docker Implementation",
    description:
      "Developed an automated ETL pipeline to extract real-time weather data from the OpenWeather API, transform it using Python, and load it into a PostgreSQL database, processing data for over 10+ locations daily.",
    achievements: [
      "Automated ETL pipeline for 10+ locations daily",
      "Containerized deployment with Docker",
      "Modular DAGs for workflow automation",
      "Seamless analysis and visualization capabilities",
    ],
    technologies: ["Apache Airflow", "Docker", "PostgreSQL", "Python", "OpenWeather API", "ETL"],
    githubUrl: "https://github.com/varunsonawane/ETL-Weather",
    liveUrl: null,
    videoUrl: null,
    featured: true,
    award: null,
  },
  {
    title: "Data Visualization Dashboard",
    subtitle: "Interactive Analytics Platform",
    description:
      "Built a comprehensive data visualization platform with interactive charts and real-time analytics. Features dynamic dashboards, advanced filtering, and multi-source data integration for comprehensive business intelligence.",
    achievements: [
      "Interactive dashboards with real-time data updates",
      "Multi-source data integration and processing",
      "Advanced filtering and drill-down capabilities",
      "Responsive design with mobile optimization",
    ],
    technologies: ["D3.js", "JavaScript", "Python", "Flask", "PostgreSQL", "Data Visualization"],
    githubUrl: "https://github.com/varunsonawane/Data_Viz",
    liveUrl: "https://aryandhuru49.github.io/Indian-Data-Premier-League/src/html/index.html",
    videoUrl: null,
    featured: true,
    award: null,
  },
]

const additionalProjects = [

  {
    title: "Term Deposit Subscription Prediction",
    description: "Machine learning model to predict customer term deposit subscription using classification algorithms and data analysis.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Classification"],
    githubUrl: "https://github.com/varunsonawane/Term-Deposit-Subscription",
    stars: 8,
    forks: 3,
  },
  {
    title: "Stock Market Prediction System",
    description: "Advanced stock market prediction system using time series analysis and machine learning for financial forecasting.",
    technologies: ["Python", "TensorFlow", "Time Series", "Financial Analysis", "Deep Learning"],
    githubUrl: "https://github.com/varunsonawane/Stock-Market-Prediction",
    stars: 12,
    forks: 4,
  },
  {
    title: "Rock Paper Scissors Game",
    description: "Interactive rock paper scissors game with modern UI design and game logic implementation for entertainment and learning.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Game Development", "DOM Manipulation"],
    githubUrl: "https://github.com/varunsonawane/Rock_paper_scissor_game",
    stars: 6,
    forks: 2,
  },


]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-24 xl:py-28 bg-muted/20 relative overflow-hidden">
      {/* Random floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[92%] w-16 h-16 lg:w-22 lg:h-22 xl:w-28 xl:h-28 bg-accent/11 rounded-lg rotate-[234deg] animate-float" />
        <div
          className="absolute top-[52%] right-[18%] w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-primary/14 rounded-lg -rotate-[167deg] animate-float"
          style={{ animationDelay: "2.8s" }}
        />
        <div
          className="absolute top-[8%] left-[25%] w-26 h-26 lg:w-34 lg:h-34 xl:w-42 xl:h-42 bg-muted/7 rounded-lg rotate-[98deg] animate-float"
          style={{ animationDelay: "4.2s" }}
        />
        <div
          className="absolute bottom-[30%] left-[7%] w-22 h-22 lg:w-28 lg:h-28 xl:w-34 xl:h-34 bg-accent/9 rounded-lg -rotate-[312deg] animate-float"
          style={{ animationDelay: "1.3s" }}
        />
        <div
          className="absolute bottom-[12%] right-[55%] w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-primary/12 rounded-lg rotate-[145deg] animate-float"
          style={{ animationDelay: "3.9s" }}
        />
        <div
          className="absolute top-[75%] right-[8%] w-20 h-20 lg:w-26 lg:h-26 xl:w-32 xl:h-32 bg-muted/10 rounded-lg -rotate-[67deg] animate-float"
          style={{ animationDelay: "0.4s" }}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">Featured Projects</h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            Solutions I've built to solve real-world problems
          </p>
        </motion.div>        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 hover:scale-[1.01] transition-all duration-500 group relative overflow-hidden">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                          {project.award && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-medium group-hover:bg-yellow-500/20 group-hover:scale-105 transition-all duration-300">
                              <Trophy className="h-3 w-3 group-hover:rotate-12 transition-transform duration-300" />
                              {project.award}
                            </div>
                          )}
                        </div>
                        <p className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">{project.subtitle}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 flex-shrink-0">
                        <Button variant="outline" size="sm" asChild className="hover:bg-primary/10 hover:border-primary/50 hover:text-primary hover:scale-105 transition-all duration-300">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                            Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button variant="outline" size="sm" asChild className="hover:bg-accent/10 hover:border-accent/50 hover:text-accent hover:scale-105 transition-all duration-300">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                              Live
                            </a>
                          </Button>
                        )}
                        {project.videoUrl && (
                          <Button variant="outline" size="sm" asChild className="hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 hover:scale-105 transition-all duration-300">
                            <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                              <Youtube className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 mt-3">{project.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="flex items-start gap-3 hover:bg-primary/5 rounded-lg p-2 -m-2 transition-all duration-300 group/item"
                            whileHover={{ x: 4 }}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 group-hover/item:bg-accent transition-all duration-300" />
                            <p className="text-muted-foreground text-sm leading-relaxed group-hover/item:text-foreground transition-colors duration-300">{achievement}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.03 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Badge variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/30 hover:scale-105 transition-all duration-400 group relative overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative z-10">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg text-foreground leading-tight group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                        <Button variant="ghost" size="sm" asChild className="flex-shrink-0 hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                          </a>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{project.description}</p>

                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Badge variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/50 group-hover:text-foreground transition-colors duration-300">
                        <div className="flex items-center gap-1 hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer">
                          <Star className="h-3 w-3 group-hover:text-yellow-500 transition-colors duration-300" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1 hover:text-accent hover:scale-110 transition-all duration-300 cursor-pointer">
                          <GitFork className="h-3 w-3 group-hover:text-blue-500 transition-colors duration-300" />
                          {project.forks}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-muted/50 rounded-2xl border border-border/50 hover:bg-muted/70 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 transition-all duration-400 group">
            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Explore More Projects</h4>
            <p className="text-muted-foreground text-sm max-w-md group-hover:text-foreground transition-colors duration-300">
              Check out my GitHub profile for more projects, contributions, and open-source work.
            </p>
            <Button asChild className="hover:scale-110 transition-transform duration-300">
              <a href="https://github.com/varunsonawane" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
