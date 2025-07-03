import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Terminal } from "lucide-react"
import heroTexture from "@/assets/hero-texture.jpg"

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center brutal-grid overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${heroTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Geometric Accent Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 concrete-dark-bg brutal-border brutal-shadow-lg" />
      <div className="absolute bottom-20 right-10 w-24 h-24 electric-bg brutal-border brutal-shadow" />
      <div className="absolute top-1/2 right-20 w-2 h-48 bg-foreground" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Terminal Header */}
          <div className="mb-8 flex items-center gap-4">
            <Terminal className="w-8 h-8 electric-text" />
            <span className="text-lg font-mono text-muted-foreground">~/portfolio/aamir-iqbal</span>
          </div>
          
          {/* Main Content */}
          <div className="brutal-border-thick bg-background p-12 brutal-shadow-lg">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              AAMIR
              <br />
              <span className="electric-text">IQBAL</span>
            </h1>
            
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-mono mb-4 text-industrial-gray">
                &gt; FRONT-END DEVELOPER
              </h2>
              <p className="text-lg font-mono max-w-2xl leading-relaxed">
                4 YEARS OF EXPERIENCE CRAFTING 
                <span className="electric-text font-bold"> BRUTAL</span> DIGITAL 
                EXPERIENCES. SPECIALIZING IN REACT, TYPESCRIPT, AND 
                <span className="electric-text font-bold"> UNCOMPROMISING</span> 
                USER INTERFACES.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold electric-text">4+</div>
                <div className="font-mono text-sm text-muted-foreground">YEARS EXP</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold electric-text">50+</div>
                <div className="font-mono text-sm text-muted-foreground">PROJECTS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold electric-text">100%</div>
                <div className="font-mono text-sm text-muted-foreground">COMMITTED</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="electric" size="lg" className="group">
                <Code className="w-5 h-5" />
                VIEW PROJECTS
              </Button>
              <Button variant="outline" size="lg">
                GET IN TOUCH
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 electric-text" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero