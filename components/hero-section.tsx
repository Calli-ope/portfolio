import Link from "next/link"
import { ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24">
      <div className="max-w-2xl w-full flex flex-col items-center">
        {/* Increased bottom margin from mb-8 to mb-12 */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-12">
          <span className="text-foreground">Hey, I&apos;m </span>
          <span className="text-primary">Konrad Martens</span>
          <span className="ml-2 inline-block animate-wave origin-[70%_70%]">
            <span role="img" aria-label="waving hand">&#128075;</span>
          </span>
        </h1>
        
        {/* Increased bottom margin from mb-10 to mb-16 */}
        <div className="text-muted-foreground text-base md:text-lg leading-relaxed text-center mb-16">
          <p>
            I&apos;m currently pursuing my Master&apos;s in Smart Mobility Data Science{" "}
            <span role="img" aria-label="student">&#128104;&#8205;&#127891;</span>{" "}
            at EIT Urban Mobility Master School in Barcelona{" "}
            <span role="img" aria-label="Spain flag">&#127466;&#127480;</span>{" "}
            and Tartu{" "}
            <span role="img" aria-label="Estonia flag">&#127466;&#127466;</span>. 
            Prior to this, I completed my Computer Science degree in Berlin{" "}
            <span role="img" aria-label="German flag">&#127465;&#127466;</span>{" "}
            in dual cooperation with Hitachi Rail{" "}
            <span role="img" aria-label="train">&#128644;</span>.
          </p>
        </div>

        {/* Added CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/projects">
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="rounded-full px-6">
            <Link href="/about">
              <User className="w-4 h-4 mr-2" />
              More About Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
