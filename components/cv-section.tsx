import { MapPin, Calendar, Briefcase, GraduationCap, Award, Languages } from "lucide-react"

interface CVEntry {
  period: string
  title: string
  subtitle?: string
  location?: string
  details?: string[]
  type: "education" | "work" | "achievement"
}

const education: CVEntry[] = [
  {
    period: "Sep 2025 - Oct 2027",
    title: "EIT Urban Mobility Master School",
    subtitle: "MSc Smart Mobility Data Science and Analytics",
    location: "Barcelona, Tartu",
    details: [
      "First Year: Universitat Politecnica de Catalunya",
      "Second Year: University of Tartu",
    ],
    type: "education",
  },
  {
    period: "Oct 2021 - Aug 2025",
    title: "HTW Berlin",
    subtitle: "B.Sc. Applied Computer Science",
    location: "Berlin, Germany",
    details: [
      "Dual study program in cooperation with Hitachi Rail",
      "Focus on software development and data processing",
    ],
    type: "education",
  },
  {
    period: "2013 - 2021",
    title: "Beethoven-Gymnasium",
    subtitle: "Abitur",
    location: "Berlin, Germany",
    details: [
      "Grade: 1.6",
      "Focus subjects: Mathematics, Computer Science",
    ],
    type: "education",
  },
]

const workExperience: CVEntry[] = [
  {
    period: "Oct 2021 - Present",
    title: "Hitachi Rail GTS Germany GmbH",
    subtitle: "Dual Student / Working Student",
    location: "Berlin, Germany",
    details: [
      "Software development for railway systems",
      "Data analysis and processing",
      "Working with modern web technologies",
    ],
    type: "work",
  },
  {
    period: "2020 - 2021",
    title: "Freelance Web Developer",
    subtitle: "Self-employed",
    location: "Berlin, Germany",
    details: [
      "Building websites for local businesses",
      "WordPress and custom solutions",
    ],
    type: "work",
  },
]

const skills = {
  languages: ["German (Native)", "English (Fluent)", "Spanish (Basic)"],
  programming: ["TypeScript", "Python", "Java", "SQL", "React", "Next.js", "Node.js"],
  tools: ["Git", "Docker", "Linux", "PostgreSQL", "Figma"],
}

function CVEntryCard({ entry }: { entry: CVEntry }) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background" />
      
      <div className="bg-muted/30 rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-colors">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
            {entry.subtitle && (
              <p className="text-muted-foreground">{entry.subtitle}</p>
            )}
          </div>
          <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {entry.period}
            </span>
            {entry.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {entry.location}
              </span>
            )}
          </div>
        </div>
        
        {entry.details && (
          <ul className="mt-3 space-y-1">
            {entry.details.map((detail, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export function CVSection() {
  return (
    <div className="space-y-12">
      {/* Education */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Education</h2>
        </div>
        <div className="ml-2">
          {education.map((entry, index) => (
            <CVEntryCard key={index} entry={entry} />
          ))}
        </div>
      </section>
      
      {/* Work Experience */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Work Experience</h2>
        </div>
        <div className="ml-2">
          {workExperience.map((entry, index) => (
            <CVEntryCard key={index} entry={entry} />
          ))}
        </div>
      </section>
      
      {/* Skills */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <Languages className="w-4 h-4 text-primary" />
              <h3 className="font-medium text-foreground">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          {/* Programming */}
          <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
            <h3 className="font-medium text-foreground mb-3">Programming & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div className="bg-muted/30 rounded-xl p-5 border border-border/50 md:col-span-2">
            <h3 className="font-medium text-foreground mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
