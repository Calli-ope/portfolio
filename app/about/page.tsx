import { CVSection } from "@/components/cv-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-foreground">About </span>
          <span className="text-primary">Me</span>
        </h1>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          My background, education, and experiences that have shaped who I am today.
        </p>
        
        <CVSection />
      </div>
    </div>
  )
}
