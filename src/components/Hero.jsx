import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 }
      );

      // Scroll indicator animation
      gsap.to('.scroll-indicator', {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power2.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Harsh-tejani-06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:harshtejani06@gmail.com', label: 'Email' },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <ThreeBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/50 to-[#050508] z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Title */}
          <div ref={textRef} className="mb-6">
            <h1 className="font-space text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Harsh</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-inter">
              IT Student & Developer
            </p>
          </div>

          {/* Subtitle */}
          <div ref={subtitleRef} className="mb-10">
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-inter">
              Backend Developer | AI Systems Explorer
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#projects"
              className="neon-button hoverable"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 hoverable"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hoverable group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <link.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors hoverable">
          <span className="text-sm tracking-widest">SCROLL</span>
          <ChevronDown className="w-6 h-6 scroll-indicator" />
        </a>
      </motion.div>

      {/* Side Decorative Elements */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500 opacity-50"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-50"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;