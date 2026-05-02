"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Project {
  year: string
  name: string
  description: string
  longDescription?: string
  logoText?: string
  logoImage?: string
  github?: string
  website?: string
}

const projects: Project[] = [
  {
    year: "2026",
    name: "UrbanStack",
    description: "The Urban Mobility Revolution",
    longDescription: "Lets cities privately simulate how a mobility solution performs in their city before any procurement begins. Instant validation with zero risk.",
    logoImage: "/urbanstack-logo.jpg", // Changed from logoText to logoImage
    github: "https://github.com/Calli-ope/urbanstack",
    website: "https://v0-urbanstack-landing-page.vercel.app/",
  },
  {
    year: "2025",
    name: "Meetly",
    description: "Intelligent, gamified meeting assistant",
    longDescription: "Transforms calendar management using AI-powered voice and text input. Automatically extracts meeting details, provides smart reminders, and rewards you for completing events through a gamified system.",
    logoText: "ML", // Kept as Text because it's just letters
    github: "https://github.com/paulpaulsen55/meetly",
  },
  {
    year: "2024",
    name: "ÖffiFair",
    description: "Next-gen public transport ticketing prototype",
    longDescription: "Calculates fares based on actual travel distance rather than traditional zone-based pricing, aiming to offer fairer and more accurate pricing for commuters.",
    logoText: "ÖF", // Kept as Text because it's just letters
    github: "https://github.com/Calli-ope/OeffiFair",
  },
  {
    year: "2024",
    name: "Trankly",
    description: "Platform for train fans and travellers",
    longDescription: "The ultimate platform for train enthusiasts and travelers to connect, track, and share their railway journeys.",
    logoImage: "/trankly-logo.svg", // Changed from logoText to logoImage
    github: "https://github.com/Calli-ope/trankly",
    website: "https://trankly.vercel.app/",
  },
  {
    year: "2024",
    name: "Clickly",
    description: "Idle web game boredom killer",
    longDescription: "An engaging idle web game where the main goal is to collect the most emojis, upgrade stats, and climb to the top of the global leaderboard.",
    logoImage: "/clickly-logo.svg", // Changed from logoText to logoImage
    github: "https://github.com/OGNylux/clickly",
    website: "https://www.clickly-idle.de/",
  },
  {
    year: "2023",
    name: "meedle.",
    description: "Smart web app for optimal meeting points",
    longDescription: "Developed a smart web app that suggests optimal meeting points between two locations. Designed to simplify planning for meetings, dates, or group hangouts.",
    logoImage: "/meedle-logo.svg", 
    github: "https://github.com/paulpaulsen55/meedle",
    website: "https://map-meedle.de/", 
  },
]

export function ProjectTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
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
        ticking = false
      })
    }

    container.addEventListener("scroll", handleScroll)
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
        className="h-full overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
                  "w-full rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-pointer border",
                  "bg-card text-card-foreground shadow-lg border-border/50",
                  index === activeIndex
                    ? "opacity-100 scale-100 shadow-2xl shadow-primary/20 border-primary/30"
                    : "opacity-35 scale-[0.92]"
                )}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo Section */}
                  <div className="shrink-0">
                    {/* Always apply rounded-xl so images get clipped corners too */}
                    <div className={cn(
                      "relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden rounded-xl",
                      !project.logoImage && "bg-muted/50 backdrop-blur-sm border border-border/50"
                    )}>
                      {project.logoImage ? (
                        <Image 
                          src={project.logoImage} 
                          alt={`${project.name} logo`}
                          fill
                          className="object-contain" 
                        />
                      ) : (
                        <span className="text-2xl md:text-3xl font-bold text-foreground">
                          {project.logoText}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-card-foreground italic mb-3">
                      {project.year} - {project.name}
                    </h3>
                    
                    <p className="text-card-foreground/90 text-sm font-medium mb-1">
                      {project.description}
                    </p>
                    
                    {/* Changed color from text-muted-foreground to text-card-foreground/80 for better contrast */}
                    <p className="text-card-foreground/80 text-sm mb-5 leading-relaxed">
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
                          className="flex items-center gap-2 text-sm text-card-foreground/80 hover:text-card-foreground transition-colors"
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
                          className="flex items-center gap-2 text-sm text-card-foreground/80 hover:text-card-foreground transition-colors"
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
