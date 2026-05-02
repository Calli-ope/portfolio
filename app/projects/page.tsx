import { ProjectTimeline } from "@/components/project-timeline"

export default function ProjectsPage() {
  return (
    <div className="h-screen pt-24 pb-8 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        <div className="text-center mb-6 flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-foreground">My </span>
            <span className="text-primary">Projects</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Scroll through my work
          </p>
        </div>
        <div className="flex-1 min-h-0">
          <ProjectTimeline />
        </div>
      </div>
    </div>
  )
}
