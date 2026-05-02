"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Project {
  year: string
  name: string
  description: string
  longDescription?: string
  logoText?: string
  github?: string
  website?: string
}

const projects: Project[] = [
  {
    year: "2024",
    name: "RailTrack Analytics",
    description: "Data visualization platform",
    longDescription: "Real-time analytics dashboard for railway system performance monitoring and predictive maintenance.",
    logoText: "RTA",
    github: "https://github.com/konradmartens/railtrack",
    website: "https://railtrack.demo",
  },
  {
    year: "2023",
    name: "meedle.",
    description: "Project with students",
    longDescription: "Calculation middle point between 2 input points for easy meetup location finding.",
    logoText: "meedle.",
    github: "https://github.com/konradmartens/meedle",
    website: "https://meedle.app",
  },
  {
    year: "2023",
    name: "SmartCommute",
    description: "Mobility optimization app",
    longDescription: "AI-powered route planning for urban commuters with real-time traffic integration.",
    logoText: "SC",
    github: "https://github.com/konradmartens/smartcommute",
  },
  {
    year: "2022",
    name: "Portfolio v1",
    description: "Personal portfolio website",
    longDescription: "First iteration of my personal portfolio showcasing projects and skills built with React.",
    logoText: "KM",
    github: "https://github.com/konradmartens/portfolio",
    website: "https://v1.konradmartens.dev",
  },
  {
    year: "2022",
    name: "CodeCollab",
    description: "Real-time collaboration tool",
    longDescription: "Live code sharing and collaboration platform for pair programming sessions.",
    logoText: "CC",
    github: "https://github.com/konradmartens/codecollab",
  },
  {
    year: "2021",
    name: "Study Planner",
    description: "University project",
    longDescription: "A collaborative study planning tool for university students with calendar sync.",
    logoText: "SP",
    github: "https://github.com/konradmartens/study-planner",
  },
  {
    year: "2021",
    name: "WeatherWise",
    description: "Weather forecasting app",
    longDescription: "Minimal weather app with location-based forecasts and severe weather alerts.",
    logoText: "WW",
    github: "https://github.com/konradmartens/weatherwise",
    website: "https://weatherwise.demo",
  },
]

export function ProjectTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.height / 2

      let closestIndex = 0
      let closestDistance = Infinity

      cardRefs.current.forEach((card, index) => {
        if (!card) return
        const cardRect = card.getBoundingClientRect()
        const cardCenterRelative = cardRect.top - containerRect.top + cardRect.height / 2
        const distance = Math.abs(containerCenter - cardCenterRelative)
        
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    container.addEventListener("scroll", handleScroll)
    handleScroll()
    
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index]
    const container = scrollContainerRef.current
    if (!card || !container) return
    
    const containerRect = container.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()
    const scrollTop = container.scrollTop + cardRect.top - containerRect.top - containerRect.height / 2 + cardRect.height / 2
    
    container.scrollTo({ top: scrollTop, behavior: "smooth" })
  }

  return (
    <div className="relative h-[calc(100vh-12rem)]">
      {/* Scroll container */}
      <div 
        ref={scrollContainerRef}
        className="h-full overflow-y-auto scroll-smooth scrollbar-thin"
        style={{ scrollSnapType: "y proximity" }}
      >
        {/* Top padding to center first card */}
        <div className="h-[calc(50%-120px)]" />
        
        <div className="flex flex-col items-center">
          {projects.map((project, index) => (
            <div
              key={`${project.year}-${project.name}`}
              ref={(el) => { cardRefs.current[index] = el }}
              className="w-full max-w-2xl flex flex-col items-center"
              style={{ scrollSnapAlign: "center" }}
            >
              {/* Project Card */}
              <div
                onClick={() => scrollToCard(index)}
                className={cn(
                  "w-full rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-pointer",
                  "bg-[#9A9ACD] shadow-lg",
                  index === activeIndex
                    ? "opacity-100 scale-100 shadow-2xl shadow-primary/20"
                    : "opacity-35 scale-[0.92]"
                )}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo Section */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      {project.logoText === "meedle." ? (
                        <div className="flex items-center gap-1">
                          <svg viewBox="0 0 32 32" className="w-7 h-7">
                            <circle cx="10" cy="10" r="4" fill="#F59E0B" />
                            <circle cx="22" cy="10" r="4" fill="#F59E0B" />
                            <ellipse cx="16" cy="22" rx="10" ry="6" fill="#F59E0B" />
                          </svg>
                          <span className="text-lg md:text-xl font-bold text-[#1a1a2e]">
                            {project.logoText}
                          </span>
                        </div>
                      ) : (
                        <span className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                          {project.logoText}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a2e] italic mb-3">
                      {project.year} - {project.name}
                    </h3>
                    
                    <p className="text-[#1a1a2e]/90 text-sm font-medium mb-1">
                      {project.description}
                    </p>
                    <p className="text-[#1a1a2e]/70 text-sm mb-5 line-clamp-2">
                      {project.longDescription}
                    </p>
                    
                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-sm text-[#1a1a2e]/70 hover:text-[#1a1a2e] transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code on Github</span>
                        </Link>
                      )}
                      {project.website && (
                        <Link
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-sm text-[#1a1a2e]/70 hover:text-[#1a1a2e] transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                          <span>Visit Website</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < projects.length - 1 && (
                <div className={cn(
                  "flex flex-col items-center py-3 transition-opacity duration-500",
                  index === activeIndex || index === activeIndex - 1 ? "opacity-60" : "opacity-20"
                )}>
                  <div className="w-px h-6 bg-muted-foreground/50" />
                  <ChevronDown className="w-5 h-5 text-muted-foreground/50 -mt-1" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom padding to center last card */}
        <div className="h-[calc(50%-120px)]" />
      </div>

      {/* Scroll indicator dots */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === activeIndex 
                ? "bg-primary scale-125" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
