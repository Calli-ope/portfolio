import { TravelGallery } from "@/components/travel-gallery"
import { TravelGlobe } from "@/components/travel-globe"

export default function TravelsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-foreground">Travel </span>
          <span className="text-primary">Experiences</span>
        </h1>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Photos and highlights from my travels around the world.
        </p>
        
        {/* Interactive 3D Globe Component */}
        <TravelGlobe />

        {/* TravelGallery is kept in the code but commented out while we show Coming soon */}
        {/*
        <TravelGallery />
        */}

        <div className="flex items-center justify-center py-28">
          <div className="bg-muted/30 rounded-2xl p-10 text-center border border-border/50">
            <h2 className="text-2xl font-semibold mb-2">Travels — coming soon</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
