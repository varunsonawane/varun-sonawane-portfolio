"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                >
                    <div className="pointer-events-auto">
                        <Button
                            onClick={scrollToTop}
                            variant="outline"
                            className="rounded-full shadow-lg backdrop-blur-md bg-background/50 border-primary/20 hover:bg-background/80 hover:border-primary/50 transition-all duration-300 gap-2 pr-6 pl-5 group"
                        >
                            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                            <span className="text-sm font-medium">Back to Top</span>
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
