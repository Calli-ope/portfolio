"use client"

import { useState } from "react"
import { MapPin, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface TravelExperience {
  id: string
  destination: string
  country: string
  date: string
  description: string
  thumbnail: string
  images: string[]
}

const experiences: TravelExperience[] = [
  {
    id: "barcelona",
    destination: "Barcelona",
    country: "Spain",
    date: "Summer 2024",
    description: "Explored the vibrant Catalan capital, from Gaudi's architectural masterpieces to the bustling streets of the Gothic Quarter.",
    thumbnail: "/images/travels/barcelona-thumb.jpg",
    images: [
      "/images/travels/barcelona-1.jpg",
      "/images/travels/barcelona-2.jpg",
      "/images/travels/barcelona-3.jpg",
    ],
  },
  {
    id: "amsterdam",
    destination: "Amsterdam",
    country: "Netherlands",
    date: "Spring 2023",
    description: "Discovered the charming canals, world-class museums, and unique cycling culture of the Dutch capital.",
    thumbnail: "/images/travels/amsterdam-thumb.jpg",
    images: [
      "/images/travels/amsterdam-1.jpg",
      "/images/travels/amsterdam-2.jpg",
      "/images/travels/amsterdam-3.jpg",
    ],
  },
  {
    id: "copenhagen",
    destination: "Copenhagen",
    country: "Denmark",
    date: "Winter 2022",
    description: "Experienced the hygge lifestyle and Scandinavian design in this beautiful Nordic city.",
    thumbnail: "/images/travels/copenhagen-thumb.jpg",
    images: [
      "/images/travels/copenhagen-1.jpg",
      "/images/travels/copenhagen-2.jpg",
      "/images/travels/copenhagen-3.jpg",
    ],
  },
  {
    id: "prague",
    destination: "Prague",
    country: "Czech Republic",
    date: "Autumn 2022",
    description: "Wandered through the fairytale streets of one of Europe's most beautiful historic cities.",
    thumbnail: "/images/travels/prague-thumb.jpg",
    images: [
      "/images/travels/prague-1.jpg",
      "/images/travels/prague-2.jpg",
      "/images/travels/prague-3.jpg",
    ],
  },
]

export function TravelGallery() {
  const [selectedExperience, setSelectedExperience] = useState<TravelExperience | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openGallery = (experience: TravelExperience) => {
    setSelectedExperience(experience)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setSelectedExperience(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (!selectedExperience) return
    setCurrentImageIndex((prev) => 
      prev === selectedExperience.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    if (!selectedExperience) return
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedExperience.images.length - 1 : prev - 1
    )
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((experience) => (
          <button
            key={experience.id}
            onClick={() => openGallery(experience)}
            className={cn(
              "group relative bg-muted/30 rounded-2xl overflow-hidden border border-border/50",
              "cursor-pointer transition-all duration-300",
              "hover:border-primary/30 hover:shadow-lg hover:scale-[1.02]",
              "text-left"
            )}
          >
            {/* Thumbnail */}
            <div className="relative aspect-[4/3] bg-muted">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <MapPin className="w-12 h-12 opacity-20" />
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {experience.destination}
              </h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {experience.country}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {experience.date}
                </span>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {experience.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Image Gallery Dialog */}
      <Dialog open={!!selectedExperience} onOpenChange={closeGallery}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl">
              {selectedExperience?.destination}
              <span className="text-muted-foreground font-normal ml-2">
                {selectedExperience?.country}
              </span>
            </DialogTitle>
          </DialogHeader>
          
          {selectedExperience && (
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[16/10] bg-muted mx-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 opacity-20 mx-auto mb-2" />
                    <p className="text-sm opacity-50">Image placeholder</p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={prevImage}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={nextImage}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-sm">
                {currentImageIndex + 1} / {selectedExperience.images.length}
              </div>
            </div>
          )}

          {/* Thumbnails */}
          <div className="p-6 pt-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {selectedExperience?.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "flex-shrink-0 w-20 h-14 rounded-lg bg-muted overflow-hidden border-2 transition-all",
                    currentImageIndex === index
                      ? "border-primary"
                      : "border-transparent hover:border-primary/50"
                  )}
                >
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <MapPin className="w-4 h-4 opacity-30" />
                  </div>
                </button>
              ))}
            </div>
            <p className="text-muted-foreground mt-4">
              {selectedExperience?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
