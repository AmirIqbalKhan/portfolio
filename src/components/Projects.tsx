import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code2 } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "EVENTMASHUPS.COM",
      description: "A MODERN EVENT DISCOVERY PLATFORM CONNECTING USERS TO THE LATEST EVENTS, CONFERENCES, AND MEETUPS WORLDWIDE.",
      tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "SUPABASE"],
      status: "LIVE",
      year: "2024",
      liveUrl: "https://eventmashups.com",
      codeUrl: null,
      image: "/eventmashups.png"
    },
    {
      id: "02", 
      title: "PORTFOLIO DASHBOARD",
      description: "ADMINISTRATIVE DASHBOARD FOR PORTFOLIO MANAGEMENT WITH REAL-TIME ANALYTICS AND CONTENT MANAGEMENT.",
      tech: ["NEXT.JS", "TYPESCRIPT", "PRISMA", "POSTGRESQL"],
      status: "DEVELOPMENT",
      year: "2024"
    },
    {
      id: "03",
      title: "TASK MANAGEMENT APP", 
      description: "MINIMALIST TASK TRACKER WITH DRAG-AND-DROP FUNCTIONALITY AND TEAM COLLABORATION FEATURES.",
      tech: ["REACT", "TAILWIND", "SUPABASE", "FRAMER MOTION"],
      status: "LIVE",
      year: "2023"
    },
    {
      id: "04",
      title: "WEATHER FORECAST APP",
      description: "BRUTAL WEATHER APPLICATION WITH LOCATION-BASED FORECASTS AND MINIMALIST DATA VISUALIZATION.",
      tech: ["JAVASCRIPT", "API", "CHART.JS", "CSS3"],
      status: "LIVE", 
      year: "2023"
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Code2 className="w-8 h-8 electric-text" />
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">PROJECTS</h2>
          </div>
          <div className="h-2 w-32 bg-electric brutal-shadow-sm" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-12 gap-6 md:gap-8 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <div className="bg-concrete p-4 md:p-8 brutal-border brutal-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl md:text-6xl font-bold text-electric font-mono">
                      {project.id}
                    </span>
                    <div className="text-right">
                      <div className={`inline-block px-3 py-1 brutal-border text-xs font-mono font-bold ${
                        project.status === 'LIVE' 
                          ? 'bg-electric text-raw-white' 
                          : 'bg-industrial-gray text-raw-white'
                      }`}>
                        {project.status}
                      </div>
                      <div className="text-sm font-mono text-muted-foreground mt-1">
                        {project.year}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="font-mono text-xs md:text-sm leading-relaxed mb-4 md:mb-6 text-muted-foreground">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 md:px-3 py-1 bg-background brutal-border text-xs font-mono font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="electric" size="sm">
                          <ExternalLink className="w-4 h-4" />
                          LIVE DEMO
                        </Button>
                      </a>
                    ) : (
                      <Button variant="electric" size="sm" disabled>
                        <ExternalLink className="w-4 h-4" />
                        LIVE DEMO
                      </Button>
                    )}
                    {project.codeUrl && (
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <Github className="w-4 h-4" />
                          CODE
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Visual */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="aspect-video bg-concrete-dark brutal-border brutal-shadow-lg relative overflow-hidden">
                  {/* Project image or placeholder */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-contain bg-black p-2"
                      style={{ objectPosition: 'center' }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Code2 className="w-16 h-16 text-electric mx-auto mb-4" />
                        <div className="font-mono text-electric font-bold">
                          {project.title}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-electric/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="brutal" size="lg">
            <Github className="w-5 h-5" />
            VIEW ALL ON GITHUB
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects