import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshtejani06@gmail.com',
      href: 'mailto:harshtejani06@gmail.com',
      copyable: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 92656 56769',
      href: 'tel:+919265656769',
      copyable: true
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Surat, Gujarat, India',
      href: '#',
      copyable: false
    }
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Harsh-tejani-06', color: 'hover:text-[#333]' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/harsh-tejani-38a56428b', color: 'hover:text-[#0077b5]' },
  ]

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Let's Connect
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I'm always excited to discuss new projects, opportunities, and collaborations.
                Feel free to reach out through any of these channels.
              </p>
            </motion.div>

            {/* Contact Cards */}
            {contactInfo.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border-color hover:border-accent transition-all duration-200">
                  <a
                    href={item.href}
                    className="flex items-center gap-4 flex-1"
                  >
                    <div className="p-3 rounded-lg bg-accent group-hover:scale-110 transition-transform duration-200">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{item.label}</p>
                      <p className="font-medium text-text-primary">{item.value}</p>
                    </div>
                  </a>
                  {item.copyable && (
                    <button
                      onClick={() => handleCopy(item.value)}
                      className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                      aria-label="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-text-muted" />
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-text-muted mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`p-3 rounded-lg bg-card border border-border-color hover:border-accent transition-all duration-200 ${link.color}`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>


        </div>
      </div>
    </section>
  )
}

export default Contact