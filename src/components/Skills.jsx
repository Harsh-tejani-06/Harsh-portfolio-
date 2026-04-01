import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Server, Database, Brain, Workflow,
  Terminal, GitBranch, Layers, Cpu, FileCode,
} from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.07, duration: 0.3, ease: 'backOut' },
  }),
};

const Skills = () => {
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      gradient: 'from-blue-400 to-cyan-500',
      glow: 'rgba(59,130,246,0.35)',
      skills: ['C++', 'JavaScript', 'Python'],
    },
    {
      title: 'Backend & Web',
      icon: Server,
      gradient: 'from-emerald-400 to-teal-500',
      glow: 'rgba(52,211,153,0.35)',
      skills: ['Node.js', 'Express.js', 'REST API'],
    },
    {
      title: 'AI / ML',
      icon: Brain,
      gradient: 'from-purple-400 to-pink-500',
      glow: 'rgba(168,85,247,0.35)',
      skills: ['Machine Learning', 'LLM Concepts', 'RAG'],
    },
    {
      title: 'LLM Frameworks',
      icon: Workflow,
      gradient: 'from-orange-400 to-red-500',
      glow: 'rgba(251,146,60,0.35)',
      skills: ['LangChain', 'LangGraph'],
    },
    {
      title: 'Databases',
      icon: Database,
      gradient: 'from-green-400 to-emerald-600',
      glow: 'rgba(74,222,128,0.35)',
      skills: ['MongoDB', 'SQL'],
    },
    {
      title: 'Tools & Platforms',
      icon: Terminal,
      gradient: 'from-cyan-400 to-purple-500',
      glow: 'rgba(0,243,255,0.35)',
      skills: ['Git', 'GitHub', 'VS Code'],
    },
  ];

  const floatingIcons = [
    { Icon: Code2,    delay: 0,   x: 10, y: 20 },
    { Icon: Server,   delay: 0.5, x: 80, y: 15 },
    { Icon: Database, delay: 1,   x: 20, y: 60 },
    { Icon: Brain,    delay: 1.5, x: 70, y: 70 },
    { Icon: Workflow, delay: 2,   x: 85, y: 40 },
    { Icon: GitBranch,delay: 0.3, x: 15, y: 80 },
    { Icon: Layers,   delay: 0.8, x: 90, y: 85 },
    { Icon: Cpu,      delay: 1.3, x: 5,  y: 45 },
    { Icon: FileCode, delay: 1.8, x: 75, y: 30 },
  ];

  const coreConcepts = [
    'Data Structures & Algorithms',
    'Retrieval-Augmented Generation',
    'Backend Architecture',
    'Problem Solving',
    'Database Design',
    'Machine Learning',
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 bg-[#050508] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ y: [0, -22, 0], opacity: [0.08, 0.25, 0.08], rotate: [0, 10, 0] }}
            transition={{ duration: 5 + index * 0.4, delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon className="w-8 h-8 text-cyan-400/30" />
          </motion.div>
        ))}
      </div>

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
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-space tracking-widest text-sm mb-4 block"
          >
            MY EXPERTISE
          </motion.span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto font-inter">
            Technologies and tools I work with to build modern applications and AI solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: `0 0 40px ${category.glow}`,
                borderColor: 'rgba(0,243,255,0.25)',
              }}
              className="glass-card p-6 rounded-2xl group hoverable relative overflow-hidden cursor-default transition-colors duration-300"
            >
              {/* Card glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${category.glow}, transparent 70%)` }}
              />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-space text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    custom={skillIndex}
                    variants={tagVariants}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 0 16px ${category.glow}`,
                      borderColor: 'rgba(0,243,255,0.7)',
                    }}
                    className="px-4 py-2 rounded-full text-sm font-medium text-cyan-300 bg-white/5 border border-cyan-400/20 transition-colors duration-200 cursor-default select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Shimmer line at bottom */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Core Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 rounded-2xl"
        >
          <h3 className="font-space text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Core Concepts</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreConcepts.map((concept, index) => (
              <motion.div
                key={concept}
                initial={{ opacity: 0, scale: 0.75, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4, ease: 'backOut' }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.07,
                  boxShadow: '0 0 24px rgba(0,243,255,0.3)',
                  borderColor: 'rgba(0,243,255,0.8)',
                  color: '#ffffff',
                }}
                className="px-6 py-3 rounded-full glass border border-cyan-400/30 text-cyan-400 font-medium transition-all duration-300 cursor-default"
              >
                {concept}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center"
        >
          {[
            { value: '6+', label: 'Skill Categories' },
            { value: '15+', label: 'Technologies' },
            { value: '3+', label: 'Projects Built' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-5 rounded-2xl"
            >
              <p className="font-space text-3xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm font-inter">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;