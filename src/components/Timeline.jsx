import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase, Code2, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const experiences = [
    {
      id: 1,
      type: 'education',
      icon: GraduationCap,
      title: 'B.Tech in Information Technology',
      organization: 'Birla Vishvakarma Mahavidyalaya',
      period: '2023 - 2027',
      description: 'Pursuing B.Tech in IT with focus on backend development, machine learning, and AI systems. Expected graduation in May 2027.',
      skills: ['Data Structures', 'Algorithms', 'Database Management', 'Software Engineering'],
    },
    {
      id: 2,
      type: 'project',
      icon: Code2,
      title: 'RAG System Development',
      organization: 'Personal Project',
      period: '2024',
      description: 'Built a Retrieval-Augmented Generation system for OWASP documentation using LangChain and vector embeddings.',
      skills: ['LangChain', 'Python', 'LLMs', 'RAG'],
    },
    {
      id: 3,
      type: 'project',
      icon: Code2,
      title: 'LLM From Scratch',
      organization: 'Personal Project',
      period: '2024',
      description: 'Implemented transformer architecture from scratch including attention mechanisms and training loops.',
      skills: ['PyTorch', 'Transformers', 'Neural Networks', 'Python'],
    },
    {
      id: 4,
      type: 'project',
      icon: Code2,
      title: 'Postify - Social Media Platform',
      organization: 'Personal Project',
      period: '2024',
      description: 'Developed a full-stack social media platform with JWT authentication, post management, and real-time interactions.',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { 
            opacity: 0, 
            x: index % 2 === 0 ? -50 : 50 
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Animate the timeline line
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 bg-[#050508] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
            MY JOURNEY
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 origin-top" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-6 rounded-2xl hoverable group"
                  >
                    <span className="text-cyan-400 text-sm font-space tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="font-space text-xl font-bold text-white mt-2 mb-2 group-hover:text-cyan-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 font-medium mb-3">{exp.organization}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 text-cyan-400 border border-cyan-400/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-400/30"
                  >
                    <exp.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
