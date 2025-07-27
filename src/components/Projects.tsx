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
      title: "STARKFUNDED.COM",
      description: "DISCOVER AND TRACK PROJECTS FUNDED BY STARKNET ECOSYSTEM. REAL-TIME DATA, ANALYTICS, AND PROJECT INSIGHTS.",
      tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "SUPABASE"],
      status: "LIVE",
      year: "2024",
      liveUrl: "https://starkfunded.com",
      codeUrl: null,
      image: "/starkfunded.png"
    }
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 electric-text" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">PROJECTS</h2>
          </div>
          <div className="h-2 w-24 sm:w-32 bg-electric brutal-shadow-sm" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <div className="bg-concrete p-3 sm:p-4 md:p-8 brutal-border brutal-shadow">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-4xl md:text-6xl font-bold text-electric font-mono">
                      {project.id}
                    </span>
                    <div className="text-right">
                      <div className={`inline-block px-2 sm:px-3 py-1 brutal-border text-xs font-mono font-bold ${
                        project.status === 'LIVE' 
                          ? 'bg-electric text-raw-white' 
                          : 'bg-industrial-gray text-raw-white'
                      }`}>
                        {project.status}
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">
                        {project.year}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="font-mono text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 md:mb-6 text-muted-foreground">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-3 sm:mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-1 sm:px-2 md:px-3 py-1 bg-background brutal-border text-xs font-mono font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="electric" size="sm">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          LIVE DEMO
                        </Button>
                      </a>
                    ) : (
                      <Button variant="electric" size="sm" disabled>
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        LIVE DEMO
                      </Button>
                    )}
                    {project.codeUrl && (
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
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
                        <Code2 className="w-12 h-12 sm:w-16 sm:h-16 text-electric mx-auto mb-2 sm:mb-4" />
                        <div className="font-mono text-electric font-bold text-sm sm:text-base">
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
        <div className="text-center mt-12 sm:mt-16">
          <a href="https://github.com/AmirIqbalKhan" target="_blank" rel="noopener noreferrer">
            <Button variant="brutal" size="lg">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              VIEW ALL ON GITHUB
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects