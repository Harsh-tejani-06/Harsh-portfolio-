import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Harsh-tejani-06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/harsh-tejani-38a56428b', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:harshtejani06@gmail.com', label: 'Email' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary border-t border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <a href="#home" className="text-2xl font-bold text-accent hover:opacity-80 transition-opacity">
              HT
            </a>
            <p className="text-sm text-text-muted">
              © {currentYear} Harsh Tejani. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          {/* Social Links & Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 rounded-lg bg-secondary hover:bg-accent/10 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border-color text-center"
        >
          <p className="text-sm text-text-muted flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Harsh Tejani
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer