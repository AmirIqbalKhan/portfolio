import { Github, Linkedin, Mail, Terminal, Monitor } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-raw-black text-raw-white py-8 sm:py-12">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 electric-text" />
              <span className="font-mono font-bold text-lg sm:text-xl">AAMIR.DEV</span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-gray-400 leading-relaxed">
              FULL STACK DEVELOPER CRAFTING BRUTAL DIGITAL EXPERIENCES
              WITH 4 YEARS OF UNCOMPROMISING DEDICATION.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-bold mb-3 sm:mb-4 electric-text text-sm sm:text-base">QUICK ACCESS</h4>
            <div className="space-y-1 sm:space-y-2">
              {[
                { label: "ABOUT", href: "#about" },
                { label: "PROJECTS", href: "#projects" },
                { label: "CONTACT", href: "#contact" },
                { label: "RESUME", href: "#resume" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-mono text-xs sm:text-sm text-gray-400 hover:text-electric transition-colors"
                >
                  &gt; {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono font-bold mb-3 sm:mb-4 electric-text text-sm sm:text-base">CONNECT</h4>
            <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-industrial-gray brutal-border flex items-center justify-center hover:bg-electric transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-industrial-gray brutal-border flex items-center justify-center hover:bg-electric transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-industrial-gray brutal-border flex items-center justify-center hover:bg-electric transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <div className="font-mono text-xs text-gray-400">
              <div>EMAIL: aamiriqbalkhan001@gmail.com</div>
              <div>STATUS: AVAILABLE FOR WORK</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-industrial-gray pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="font-mono text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © {currentYear} AAMIR IQBAL. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-gray-400">
              BUILT WITH
              <Monitor className="w-3 h-3 sm:w-4 sm:h-4 electric-text" />
              AND BRUTAL EFFICIENCY
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer