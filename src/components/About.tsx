import { Button } from "@/components/ui/button"
import { Terminal, Coffee, Zap } from "lucide-react"

const About = () => {
  const skills = [
    "REACT", "TYPESCRIPT", "NEXT.JS", "NODE.JS",
    "EXPRESS.JS", "POSTGRESQL", "MONGODB", "SUPABASE",
    "TAILWIND CSS", "JAVASCRIPT", "HTML5", "CSS3",
    "GIT", "DOCKER", "AWS", "VERCEL"
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-concrete">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-start">
          {/* Left Column - Terminal Style About */}
          <div className="bg-raw-black text-raw-white p-3 sm:p-4 md:p-8 font-mono brutal-border brutal-shadow-lg">
            <div className="flex items-center gap-2 mb-4 sm:mb-6 text-electric">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">about.exe --verbose</span>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm leading-relaxed">
              <div>
                <span className="text-electric">$</span> whoami
                <br />
                <span className="text-gray-300">
                  AAMIR IQBAL - FULL STACK DEVELOPER WITH 4 YEARS OF RAW EXPERIENCE
                </span>
              </div>
              
              <div>
                <span className="text-electric">$</span> cat experience.txt
                <br />
                <span className="text-gray-300">
                  SPECIALIZED IN BUILDING BRUTALLY EFFICIENT WEB APPLICATIONS.
                  FROM CONCEPT TO DEPLOYMENT, I CRAFT DIGITAL EXPERIENCES THAT
                  DON'T COMPROMISE ON PERFORMANCE OR AESTHETICS.
                </span>
              </div>
              
              <div>
                <span className="text-electric">$</span> grep -i "philosophy" mindset.log
                <br />
                <span className="text-gray-300">
                  CODE SHOULD BE CLEAN, BRUTAL, AND PURPOSEFUL. NO FLUFF.
                  EVERY LINE SERVES A FUNCTION. EVERY DESIGN CHOICE HAS INTENT.
                </span>
              </div>
              
              <div className="pt-3 sm:pt-4">
                <span className="text-electric">$</span> ./start_conversation.sh
                <br />
                <span className="text-gray-300">READY TO DISCUSS YOUR NEXT PROJECT_</span>
                <span className="animate-pulse">█</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Skills & Stats */}
          <div className="space-y-6 sm:space-y-8">
            {/* Skills Section */}
            <div className="bg-background brutal-border brutal-shadow p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 electric-text" />
                TECH ARSENAL
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-secondary p-2 sm:p-3 brutal-border font-mono text-xs sm:text-sm font-bold hover:bg-electric hover:text-raw-white transition-colors cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience Blocks */}
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-electric text-raw-white p-4 sm:p-6 brutal-border brutal-shadow">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold font-mono text-sm sm:text-base">CURRENT STATUS</span>
                </div>
                <p className="font-mono text-xs sm:text-sm">
                  BUILDING EXCEPTIONAL WEB EXPERIENCES & ALWAYS LEARNING NEW TECHNOLOGIES
                </p>
              </div>
              
              <div className="bg-concrete-dark text-raw-white p-4 sm:p-6 brutal-border brutal-shadow">
                <div className="font-bold font-mono mb-2 text-sm sm:text-base">APPROACH</div>
                <ul className="font-mono text-xs sm:text-sm space-y-1">
                  <li>• PIXEL-PERFECT IMPLEMENTATIONS</li>
                  <li>• PERFORMANCE-FIRST MINDSET</li>
                  <li>• ACCESSIBLE & SEMANTIC CODE</li>
                  <li>• COLLABORATIVE PROBLEM SOLVING</li>
                </ul>
              </div>
            </div>
            
            {/* CTA */}
            <Button variant="brutal" size="lg" className="w-full">
              DOWNLOAD CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About