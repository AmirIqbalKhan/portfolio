import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/contact-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setStatus(data.error || "Failed to send. Try again.");
      }
    } catch {
      setStatus("Failed to send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-concrete-dark text-raw-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <div className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
                GET IN
                <br />
                <span className="electric-text">TOUCH</span>
              </h2>
              <div className="h-2 w-24 sm:w-32 bg-electric brutal-shadow-sm" />
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="font-mono">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6">
                  READY TO BUILD SOMETHING 
                  <span className="electric-text font-bold"> BRUTAL</span> TOGETHER?
                  <br />
                  LET'S DISCUSS YOUR NEXT PROJECT.
                </p>
                <p className="text-xs sm:text-sm text-gray-300">
                  I'M ALWAYS OPEN TO DISCUSSING NEW OPPORTUNITIES,
                  COLLABORATIONS, OR JUST TALKING SHOP ABOUT THE LATEST
                  FULL STACK TECHNOLOGIES.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-industrial-gray brutal-border">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 electric-text" />
                  <div className="font-mono">
                    <div className="text-xs sm:text-sm text-gray-300">EMAIL</div>
                    <div className="font-bold text-sm sm:text-base">aamiriqbalkhan001@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-industrial-gray brutal-border">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 electric-text" />
                  <div className="font-mono">
                    <div className="text-xs sm:text-sm text-gray-300">LOCATION</div>
                    <div className="font-bold text-sm sm:text-base">AVAILABLE GLOBALLY</div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs sm:text-sm font-mono text-gray-300 mb-3 sm:mb-4">FIND ME ON</div>
                <div className="flex gap-2 sm:gap-3">
                  <Button variant="outline" size="icon" className="border-gray-400 hover:border-electric hover:bg-electric text-gray-300 hover:text-raw-white">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-400 hover:border-electric hover:bg-electric text-gray-300 hover:text-raw-white">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-400 hover:border-electric hover:bg-electric text-gray-300 hover:text-raw-white">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-background text-foreground p-3 sm:p-4 md:p-8 brutal-border brutal-shadow-lg">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 electric-text" />
              <h3 className="text-xl sm:text-2xl font-bold">SEND MESSAGE</h3>
            </div>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-mono font-bold mb-1 sm:mb-2">
                    NAME*
                  </label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME"
                    className="brutal-border font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-mono font-bold mb-1 sm:mb-2">
                    EMAIL*
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="YOUR.EMAIL@DOMAIN.COM"
                    className="brutal-border font-mono text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-mono font-bold mb-1 sm:mb-2">
                  SUBJECT*
                </label>
                <Input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="PROJECT DISCUSSION"
                  className="brutal-border font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-mono font-bold mb-1 sm:mb-2">
                  MESSAGE*
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                  rows={4}
                  className="brutal-border font-mono resize-none text-sm"
                />
              </div>
              <Button type="submit" variant="electric" size="lg" className="w-full" disabled={loading}>
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </Button>
              {status && (
                <div className="mt-2 text-center font-mono text-xs sm:text-sm" style={{ color: status.includes("success") ? '#00d1ff' : '#ff3b3b' }}>{status}</div>
              )}
            </form>
            {/* Terminal Style Status */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-raw-black text-electric font-mono text-xs sm:text-sm brutal-border">
              <div className="flex items-center gap-2">
                <span className="animate-pulse">●</span>
                <span>STATUS: READY TO RECEIVE MESSAGES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;