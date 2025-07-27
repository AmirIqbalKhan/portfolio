import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Terminal } from "lucide-react"
import heroTexture from "@/assets/hero-texture.jpg"

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center brutal-grid overflow-hidden pt-16 sm:pt-20">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${heroTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Geometric Accent Elements - Responsive */}
      <div className="absolute top-16 sm:top-20 left-2 sm:left-4 md:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-32 md:h-32 concrete-dark-bg brutal-border brutal-shadow-lg" />
      <div className="absolute bottom-16 sm:bottom-20 right-2 sm:right-4 md:right-10 w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 electric-bg brutal-border brutal-shadow" />
      <div className="absolute top-1/2 right-4 sm:right-8 md:right-20 w-1 md:w-2 h-16 sm:h-24 md:h-48 bg-foreground" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content - Responsive */}
          <div className="brutal-border-thick bg-background p-4 sm:p-6 md:p-12 brutal-shadow-lg">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight">
              AAMIR
              <br />
              <span className="electric-text">IQBAL</span>
            </h1>
            
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono mb-2 sm:mb-3 md:mb-4 text-industrial-gray">
                &gt; FULL STACK DEVELOPER
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-mono max-w-2xl leading-relaxed">
                4 YEARS OF EXPERIENCE CRAFTING 
                <span className="electric-text font-bold"> BRUTAL</span> DIGITAL 
                EXPERIENCES. SPECIALIZING IN REACT, TYPESCRIPT, AND 
                <span className="electric-text font-bold"> UNCOMPROMISING </span> 
                USER INTERFACES.
              </p>
            </div>
            
            {/* Stats Grid - Responsive */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 mb-4 sm:mb-6 md:mb-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold electric-text">4+</div>
                <div className="font-mono text-xs sm:text-sm text-muted-foreground">YEARS EXP</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold electric-text">50+</div>
                <div className="font-mono text-xs sm:text-sm text-muted-foreground">PROJECTS</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold electric-text">100%</div>
                <div className="font-mono text-xs sm:text-sm text-muted-foreground">COMMITTED</div>
              </div>
            </div>
            
            {/* CTA Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <Button variant="electric" size="lg" className="group">
                <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                VIEW PROJECTS
              </Button>
              <Button variant="outline" size="lg">
                GET IN TOUCH
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 electric-text" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero