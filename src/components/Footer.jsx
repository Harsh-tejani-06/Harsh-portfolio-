import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Harsh-tejani-06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:harshtejani06@gmail.com', label: 'Email' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary border-t border-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="text-2xl font-bold accent-text">
              HT
            </a>
            <p className="text-sm text-muted">
              © {currentYear} Harsh Tejani. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-secondary hover:accent-text transition-colors duration-200 text-sm">
              Home
            </a>
            <a href="#about" className="text-secondary hover:accent-text transition-colors duration-200 text-sm">
              About
            </a>
            <a href="#skills" className="text-secondary hover:accent-text transition-colors duration-200 text-sm">
              Skills
            </a>
            <a href="#projects" className="text-secondary hover:accent-text transition-colors duration-200 text-sm">
              Projects
            </a>
            <a href="#contact" className="text-secondary hover:accent-text transition-colors duration-200 text-sm">
              Contact
            </a>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:accent-text transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg accent-bg text-white hover:opacity-90 transition-opacity duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 pt-8 border-t border-theme text-center">
          <p className="text-sm text-muted flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Harsh Tejani
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
