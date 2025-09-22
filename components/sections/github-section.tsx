"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, ExternalLink, Calendar } from "lucide-react"
import { fetchGitHubUser, fetchGitHubRepos, fetchGitHubContributions, type GitHubUser, type GitHubRepo, type GitHubContributions } from "@/lib/github"

export function GitHubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [contributions, setContributions] = useState<GitHubContributions | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [userData, reposData, contributionsData] = await Promise.all([
          fetchGitHubUser("varunsonawane"),
          fetchGitHubRepos("varunsonawane"),
          fetchGitHubContributions("varunsonawane"),
        ])

        setUser(userData)
        setRepos(reposData)
        setContributions(contributionsData)
      } catch (error) {
        console.error("Error loading GitHub data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4" />
              <div className="h-4 bg-muted rounded w-96 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="github" className="py-20 lg:py-24 xl:py-28 bg-background relative overflow-hidden">
      {/* Random floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[12%] left-[85%] w-16 h-16 lg:w-22 lg:h-22 xl:w-28 xl:h-28 bg-accent/9 rounded-lg rotate-[145deg] animate-float" />
        <div
          className="absolute top-[48%] right-[8%] w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-primary/7 rounded-lg -rotate-[78deg] animate-float"
          style={{ animationDelay: "2.7s" }}
        />
        <div
          className="absolute top-[25%] left-[5%] w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-muted/12 rounded-lg rotate-[234deg] animate-float"
          style={{ animationDelay: "4.1s" }}
        />
        <div
          className="absolute bottom-[28%] right-[72%] w-20 h-20 lg:w-26 lg:h-26 xl:w-32 xl:h-32 bg-accent/11 rounded-lg -rotate-[167deg] animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-[12%] left-[65%] w-14 h-14 lg:w-18 lg:h-18 xl:w-22 xl:h-22 bg-primary/13 rounded-lg rotate-[92deg] animate-float"
          style={{ animationDelay: "3.3s" }}
        />
        <div
          className="absolute top-[72%] right-[15%] w-10 h-10 lg:w-14 lg:h-14 xl:w-18 xl:h-18 bg-muted/8 rounded-lg -rotate-[123deg] animate-float"
          style={{ animationDelay: "0.6s" }}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">GitHub Activity</h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            Open source contributions and project repositories
          </p>
        </motion.div>

        {user && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              whileHover={{ 
                scale: 1.03,
                y: -5,
                boxShadow: "0 25px 50px rgba(var(--primary), 0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-border hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer relative overflow-hidden group">
                {/* Glow effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: 10, 
                      scale: 1.1,
                      filter: "drop-shadow(0 0 20px rgba(var(--primary), 0.5))"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github className="h-8 w-8 text-foreground mx-auto mb-3" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold text-foreground mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {user.public_repos}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">Public Repositories</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.03,
                y: -5,
                boxShadow: "0 25px 50px rgba(var(--primary), 0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-border hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer relative overflow-hidden group">
                {/* Glow effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div 
                    className="h-8 w-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-3"
                    whileHover={{ 
                      rotate: 15, 
                      scale: 1.1,
                      boxShadow: "0 0 25px rgba(var(--primary), 0.6)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-primary-foreground font-bold text-sm">F</span>
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold text-foreground mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {user.followers}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.03,
                y: -5,
                boxShadow: "0 25px 50px rgba(var(--primary), 0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-border hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer relative overflow-hidden group">
                {/* Glow effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: -10, 
                      scale: 1.1,
                      filter: "drop-shadow(0 0 20px rgba(var(--primary), 0.5))"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold text-foreground mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {new Date().getFullYear() - new Date(user.created_at).getFullYear()}+
                  </motion.div>
                  <div className="text-sm text-muted-foreground">Years on GitHub</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {/* GitHub Contribution Activity Graph */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Contribution Activity</h3>
          
          {/* Figma-inspired clean GitHub contribution graph */}
          <motion.div 
            className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm w-full hover:shadow-lg hover:shadow-blue-500/15 hover:border-gray-300 dark:hover:border-[#484f58] transition-all duration-300 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.01,
              y: -2,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.1)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Subtle glow effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-transparent to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Header with contribution count */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white">
                  {contributions?.totalContributions || 0} contributions in the last year
                </h4>
                
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium hidden sm:inline">Live</span>
              </div>
            </div>

            {/* Month labels */}
            <div className="flex justify-start mb-3 ml-6 sm:ml-8 lg:ml-12 text-xs font-medium text-gray-600 dark:text-gray-400 overflow-x-auto github-contributions-mobile-scroll" style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}>
              <div className="min-w-[280px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px] xl:min-w-[900px] flex justify-between">
                <div className="text-left">Oct</div>
                <div className="text-left">Dec</div>
                <div className="text-left">Feb</div>
                <div className="text-left">Apr</div>
                <div className="text-left">Jun</div>
                <div className="text-left">Aug</div>
              </div>
            </div>

            {/* Contribution graph with day labels */}
            <div className="flex items-start gap-2 sm:gap-3">
              {/* Day labels */}
              <div className="flex flex-col gap-1 text-xs font-medium text-gray-600 dark:text-gray-400 pt-2 flex-shrink-0">
                <div className="h-3 leading-3">Mon</div>
                <div className="h-3"></div>
                <div className="h-3 leading-3">Wed</div>
                <div className="h-3"></div>
                <div className="h-3 leading-3">Fri</div>
                <div className="h-3"></div>
                <div className="h-3 leading-3">Sun</div>
              </div>

              {/* Actual contribution graph */}
              <div className="w-full overflow-x-auto pb-2 github-contributions-mobile-scroll" style={{ 
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth',
                overscrollBehaviorX: 'contain'
              }}>
                <div className="min-w-[280px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px] xl:min-w-[900px]">
                  <img
                    src="https://ghchart.rshah.org/39d353/varunsonawane"
                    alt="GitHub Contribution Graph"
                    className="w-full h-auto max-w-none"
                    loading="lazy"
                    style={{
                      height: 'auto',
                      background: 'transparent'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Clean legend at bottom */}
            <div className="flex items-center justify-center sm:justify-between mt-4 sm:mt-6 pt-4 border-t border-gray-200 dark:border-[#30363d]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#ebedf0] dark:bg-[#161b22] rounded-sm border border-gray-300 dark:border-[#30363d]"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#9be9a8] dark:bg-[#0e4429] rounded-sm"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#40c463] dark:bg-[#006d32] rounded-sm"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#30a14e] dark:bg-[#26a641] rounded-sm"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#216e39] dark:bg-[#39d353] rounded-sm"></div>
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">More</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
