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
      "First Year: Universitat Politècnica de Catalunya",
      "Second Year: University of Tartu",
    ],
    type: "education",
  },
  {
    period: "Oct 2022 - Sep 2025",
    title: "Berlin School of Economics and Law",
    subtitle: "BSc Computer Science",
    location: "Berlin",
    details: [
      "Final Grade: 1.9",
      "Bachelor project: Design and implementation of a multi-agent system for analysing infrastructure data",
      "Study project: Research and implementation of concurrency in PHP",
      "Dual study partner: Hitachi Rail GTS Deutschland GmbH",
    ],
    type: "education",
  },
  {
    period: "Aug 2009 - Jul 2022",
    title: "Kurt Schwitters School Berlin",
    subtitle: "Abitur (A-lavels)",
    location: "Berlin",
    details: [
      "Final Grade: 1.3",
    ],
    type: "education",
  },
]

const workExperience: CVEntry[] = [
  {
    period: "Oct 2022 - Sep 2025",
    title: "Hitachi Rail Ground Transportation Systems",
    subtitle: "Dual Student",
    location: "Berlin, Oslo",
    details: [
      "Digital Competence Centre: Implementing bachelor project with Python, web technologies and PL/SQL.",
      "Radio Block Centre: Rewrote a release planning tool using Python and web technologies.",
      "Documentation Management: Restructured internal wiki and implemented SharePoint structure.",
      "System Test: Software planning and development to update the ETCS log file analysis tool with Java.",
      "Digital Competence Centre: Developed a method for uploading files for the RCOP Digitisation Project using Python.",
      "Technical Service Centre: Improved interface between a ticketing system and a customer care platform using SQL and PHP."
    ],
    type: "work",
  },
  {
    period: "Jul 2021",
    title: "Hasso Plattner Institute",
    subtitle: "Workshop",
    location: "Potsdam",
    details: [
      "Development of a Website using HTML, CSS & JavaScript",
    ],
    type: "work",
  },
  {
    period: "Nov 2018",
    title: "T-Systems Multimedia Solutions",
    subtitle: "Internship",
    location: "Berlin",
    details: [
      "Machine Learning with Turi Create",
      "Software development with Swift"
    ],
    type: "work",
  },
  {
    period: "Jul 2018",
    title: "Electrical Engineering and Computer Science Laboratory (TU Berlin)",
    subtitle: "Workshop",
    location: "Berlin",
    details: [
      "Implementing a Geo-App with ArcGIS"
    ],
    type: "work",
  },
  {
    period: "Jan 2016",
    title: "Berliner Verkehrsbetriebe (BVG)",
    subtitle: "Internship",
    location: "Berlin",
    details: [
      "Maintenance of underground trains"
    ],
    type: "work",
  },
]

const skills = {
  programming: ["Python", "R", "TypeScript", "JavaScript", "PHP", "PL/SQL", "Java", "Go", "C", "C++", "Swift", "Bash", "AMPL"],
  webDevelopment: ["Svelte", "React", "Next.js", "Shadcn", "NodeJS", "TailwindCSS", "CSS", "HTML"],
  aiMl: ["Deep Learning", "Neural Networks", "NLP", "Foundational Models", "Data Mining"],
  toolsPlatforms: ["Git", "Docker", "PostgreSQL", "Supabase", "MobilityDB", "Geopandas", "Figma", "Notion"],
  languages: ["German (native)", "English (C1)", "Spanish (B1)"],
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
            {entry.details.map((detail, index) => {
              const colonIndex = detail.indexOf(":")
              
              return (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {colonIndex !== -1 ? (
                    <span className="leading-relaxed">
                      <strong className="font-semibold text-foreground">
                        {detail.substring(0, colonIndex + 1)}
                      </strong>
                      {detail.substring(colonIndex + 1)}
                    </span>
                  ) : (
                    <span className="leading-relaxed">{detail}</span>
                  )}
                </li>
              )
            })}
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
      
      {/* Professional Experience */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Professional Experience</h2>
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
          {/* Programming */}
          <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
            <h3 className="font-medium text-foreground mb-3">Programming</h3>
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

          {/* Web Development */}
          <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
            <h3 className="font-medium text-foreground mb-3">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.webDevelopment.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI & ML */}
          <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
            <h3 className="font-medium text-foreground mb-3">AI & ML</h3>
            <div className="flex flex-wrap gap-2">
              {skills.aiMl.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
            <h3 className="font-medium text-foreground mb-3">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {skills.toolsPlatforms.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-muted/30 rounded-xl p-5 border border-border/50 md:col-span-2">
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
        </div>
      </section>
    </div>
  )
}
