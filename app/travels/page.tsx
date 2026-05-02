import { TravelGallery } from "@/components/travel-gallery"

export default function TravelsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-foreground">Travel </span>
          <span className="text-primary">Experiences</span>
        </h1>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Places I&apos;ve explored and memories I&apos;ve collected along the way.
        </p>
        
        <TravelGallery />
      </div>
    </div>
  )
}
