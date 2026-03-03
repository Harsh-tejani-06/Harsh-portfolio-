import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown } from 'lucide-react'

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary border border-theme mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm font-medium text-secondary">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 tracking-tight">
              Harsh <span className="accent-text">Tejani</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-secondary mb-6 font-medium">
              IT Student | Backend Developer | ML & AI Enthusiast
            </p>

            {/* Objective */}
            <p className="max-w-xl mx-auto lg:mx-0 text-muted mb-8 text-base leading-relaxed">
              Motivated IT student with strong interest in backend development, machine learning,
              and AI systems. Seeking opportunities to apply my skills in C++, Node.js, Machine
              Learning, and LLM-based systems to solve real-world problems.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 mb-8 text-sm text-muted">
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
            <div className="flex justify-center lg:justify-start gap-3 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary border border-theme hover:border-accent hover:accent-text hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl accent-bg accent-hover text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary border-2 border-theme hover:border-accent text-primary font-semibold transition-all duration-300 hover:shadow-md"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full accent-bg opacity-10 scale-110"></div>
              <div className="absolute inset-0 rounded-full border-2 border-theme opacity-30 scale-105"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src="/Harsh.png"
                  alt="Harsh Tejani"
                  className="w-full h-full object-cover object-[center_43%]"
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-green-500 border-4 border-card"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center">
          <a href="#about" className="inline-flex flex-col items-center text-muted hover:accent-text transition-colors duration-300">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
