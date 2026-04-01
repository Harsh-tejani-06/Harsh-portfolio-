import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshtejani06@gmail.com',
      href: 'mailto:harshtejani06@gmail.com',
      gradient: 'from-cyan-400 to-blue-500',
      glow: 'rgba(0,243,255,0.4)',
      desc: 'Drop me a mail anytime',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 92656 56769',
      href: 'tel:+919265656769',
      gradient: 'from-purple-400 to-pink-500',
      glow: 'rgba(168,85,247,0.4)',
      desc: 'Available Mon – Sat, 10am – 8pm IST',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Surat, Gujarat, India',
      href: 'https://maps.google.com/?q=Surat,Gujarat,India',
      gradient: 'from-orange-400 to-red-500',
      glow: 'rgba(251,146,60,0.4)',
      desc: 'Open to remote & on-site roles',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: '@Harsh-tejani-06',
      href: 'https://github.com/Harsh-tejani-06',
      gradient: 'from-gray-400 to-gray-600',
      glow: 'rgba(156,163,175,0.3)',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'harsh-tejani',
      href: 'https://linkedin.com/in/harsh-tejani-38a56428b',
      gradient: 'from-blue-500 to-blue-700',
      glow: 'rgba(59,130,246,0.35)',
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#050508] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.22em' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-space tracking-widest text-sm mb-4 block"
          >
            GET IN TOUCH
          </motion.span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto font-inter">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14"
        >
          {contactInfo.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: `0 20px 60px ${item.glow}`,
              }}
              className="glass-card p-7 rounded-2xl flex flex-col items-center text-center gap-5 group hoverable relative overflow-hidden border border-white/8 hover:border-cyan-400/30 transition-colors duration-300"
            >
              {/* Top glow on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${item.glow}, transparent)` }}
              />

              {/* Icon with orbit ring */}
              <div className="relative flex items-center justify-center">
                {/* Orbit ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-20 h-20 rounded-full border border-dashed border-white/10 group-hover:border-cyan-400/30 transition-colors duration-500"
                />
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 15 }}
                  transition={{ duration: 0.35 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              <div>
                <p className="text-xs text-gray-500 font-space tracking-widest uppercase mb-1">{item.label}</p>
                <p className="font-space font-semibold text-white text-lg group-hover:text-cyan-300 transition-colors duration-300 break-all">
                  {item.value}
                </p>
                <p className="text-gray-500 text-xs mt-2 font-inter">{item.desc}</p>
              </div>

              <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

              {/* Corner shimmer */}
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 100% 100%, ${item.glow}, transparent 70%)` }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-gray-500 text-sm font-space tracking-wider">FIND ME ON</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          <div className="flex gap-5">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.4, ease: 'backOut' }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, y: -5, boxShadow: `0 12px 40px ${link.glow}` }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-6 py-4 glass-card rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hoverable group"
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white font-space font-semibold text-sm group-hover:text-cyan-300 transition-colors">{link.label}</p>
                  <p className="text-gray-500 text-xs font-inter">{link.username}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 ml-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            ))}
          </div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="mt-4 flex items-center gap-3 px-6 py-3 glass rounded-full border border-green-400/25 hover:border-green-400/50 transition-all duration-300 cursor-default"
          >
            <div className="relative flex-shrink-0">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-60" />
            </div>
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-space font-semibold text-sm">Available for opportunities</span>
            <span className="text-gray-500 text-xs font-inter hidden sm:block">— Internships & freelance welcome</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;