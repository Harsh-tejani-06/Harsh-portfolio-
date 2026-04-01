import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, Code2, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const objectiveText =
    'Motivated IT student with strong interest in backend development, machine learning, and AI systems. Seeking opportunities to apply my skills in C++, Node.js, Machine Learning, and LLM-based systems to solve real-world problems and grow as a software engineer.';

  const words = objectiveText.split(' ');

  const skills = [
    { icon: Target, title: 'Problem Solving', desc: 'Strong analytical skills with C++' },
    { icon: Code2, title: 'Backend Architecture', desc: 'Understanding of scalable systems' },
    { icon: Lightbulb, title: 'AI Enthusiast', desc: 'LangGraph, AI agents & autonomous systems' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 bg-[#050508] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 font-space tracking-widest text-sm mb-4 block">
            WHO I AM
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div style={{ y: imageY }} className="relative">
            <div
              ref={imageRef}
              className="relative w-full max-w-md mx-auto"
            >
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-3xl opacity-20 animate-pulse" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-card">
                <img
                  src="./Harsh.png"
                  alt="Harsh Tejani"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">B.Tech IT</p>
                    <p className="font-semibold text-white">BVM University</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div style={{ y: textY }} className="space-y-8">
            {/* Objective with word-by-word reveal */}
            <div ref={textRef} className="glass-card p-8 rounded-2xl">
              <h3 className="font-space text-2xl font-bold mb-6 text-cyan-400">
                Career Objective
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed font-inter">
                {words.map((word, index) => (
                  <span key={index} className="word inline-block mr-2">
                    {word}
                  </span>
                ))}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 rounded-xl text-center group hoverable"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{skill.title}</h4>
                  <p className="text-sm text-gray-400">{skill.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Interests Tags */}
            <div className="flex flex-wrap gap-3">
              {['Backend Development', 'Machine Learning', 'AI Systems', 'LLMs', 'Node.js', 'C++', 'RAG', 'LangChain'].map(
                (interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full glass text-sm text-cyan-400 border border-cyan-400/30 hover:border-cyan-400 transition-colors cursor-default"
                  >
                    {interest}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;