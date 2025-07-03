import { Github, Linkedin, Mail, Terminal, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-raw-black text-raw-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 electric-text" />
              <span className="font-mono font-bold text-xl">AAMIR.DEV</span>
            </div>
            <p className="font-mono text-sm text-gray-400 leading-relaxed">
              FRONT-END DEVELOPER CRAFTING BRUTAL DIGITAL EXPERIENCES
              WITH 4 YEARS OF UNCOMPROMISING DEDICATION.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-bold mb-4 electric-text">QUICK ACCESS</h4>
            <div className="space-y-2">
              {[
                { label: "ABOUT", href: "#about" },
                { label: "PROJECTS", href: "#projects" },
                { label: "CONTACT", href: "#contact" },
                { label: "RESUME", href: "#resume" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-mono text-sm text-gray-400 hover:text-electric transition-colors"
                >
                  &gt; {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono font-bold mb-4 electric-text">CONNECT</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-industrial-gray brutal-border flex items-center justify-center hover:bg-electric transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-industrial-gray brutal-border flex items-center justify-center hover:bg-electric transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-industrial-gray brutal-border flex items-center justify-center hover:bg-electric transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="font-mono text-xs text-gray-400">
              <div>EMAIL: aamir.dev@email.com</div>
              <div>STATUS: AVAILABLE FOR WORK</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-industrial-gray pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-sm text-gray-400">
              © {currentYear} AAMIR IQBAL. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-2 font-mono text-sm text-gray-400">
              BUILT WITH
              <Heart className="w-4 h-4 electric-text" />
              AND BRUTAL EFFICIENCY
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer