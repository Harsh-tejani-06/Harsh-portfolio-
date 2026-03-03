import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Harsh-tejani-06', label: 'GitHub', color: 'hover:text-[#333]' },
    { icon: Linkedin, href: 'https://linkedin.com/in/harsh-tejani-38a56428b', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
    { icon: Mail, href: 'mailto:harshtejani06@gmail.com', label: 'Email', color: 'hover:text-[#ea4335]' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-secondary pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary border border-border-color mb-6"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-green-500 mr-2"
              />
              <span className="text-sm font-medium text-text-secondary">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary mb-4 tracking-tight"
            >
              Harsh{' '}
              <span className="text-accent relative inline-block">
                Tejani
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary mb-6 font-medium"
            >
              IT Student | Backend Developer | ML & AI Enthusiast
            </motion.p>

            {/* Objective */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl mx-auto lg:mx-0 text-text-muted mb-8 text-base leading-relaxed"
            >
              Motivated IT student with strong interest in backend development, machine learning,
              and AI systems. Passionate about building scalable solutions and exploring
              cutting-edge technologies.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 mb-8 text-sm text-text-muted"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-accent" />
                <span>Surat, India</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 92656 56769</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>harshtejani06@gmail.com</span>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-3 mb-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl bg-primary border border-border-color hover:border-accent hover:shadow-lg transition-all duration-300 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary border-2 border-border-color hover:border-accent text-text-primary font-semibold transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ repeat: Infinity, duration: 10 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-accent/30 blur-3xl"
              />

              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl"
              >
                <img
                  src="./Harsh.png"
                  alt="Harsh Tejani"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Status indicator */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 right-8 w-6 h-6 rounded-full bg-green-500 border-4 border-primary"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-text-muted hover:text-accent transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero