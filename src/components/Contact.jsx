import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshtejani06@gmail.com',
      href: 'mailto:harshtejani06@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9265656769',
      href: 'tel:+919265656769'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Surat, Gujarat, India',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Harsh-tejani-06' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' }
  ]

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In <span className="accent-text">Touch</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="w-20 h-1 accent-bg mx-auto rounded-full mt-4"></div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Let's Connect
          </h3>
          <p className="text-secondary leading-relaxed">
            I'm always excited to discuss new projects, opportunities, and collaborations.
            Click on any contact method below to reach me directly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4 mb-8">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-theme hover:border-accent transition-all duration-200 group"
            >
              <div className="p-3 rounded-lg accent-bg group-hover:scale-110 transition-transform duration-200">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted">{item.label}</p>
                <p className="font-medium text-primary">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-sm text-muted mb-4">Follow me on</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-theme hover:border-accent hover:accent-text transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
