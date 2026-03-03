import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Harsh-tejani-06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:harshtejani06@gmail.com', label: 'Email' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-secondary pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary border border-theme mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            <span className="text-sm text-secondary">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            Harsh <span className="accent-text">Tejani</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-secondary mb-6">
            IT Student | Backend Developer | ML & AI Enthusiast
          </p>

          {/* Objective */}
          <p className="max-w-2xl mx-auto text-muted mb-8 text-lg">
            Motivated IT student with strong interest in backend development, machine learning,
            and AI systems. Seeking opportunities to apply my skills in C++, Node.js, Machine
            Learning, and LLM-based systems to solve real-world problems.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-8 text-muted">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Surat, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>9265656769</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>harshtejani06@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary border border-theme hover:border-accent hover:accent-text transition-all duration-200 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg accent-bg accent-hover text-white font-semibold transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary border-2 border-theme hover:border-accent text-primary font-semibold transition-all duration-200"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-muted hover:accent-text transition-colors">
              <ArrowDown className="w-6 h-6 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
