import { GraduationCap, Target, Code2, Lightbulb, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
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
    <section id="about" className="py-20 bg-primary">
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
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <div className="bg-card rounded-2xl p-8 border border-border-color hover:border-accent transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-accent group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Career Objective</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Motivated IT student with strong interest in backend development, machine learning,
                  and AI systems. Passionate about applying skills in C++, Node.js, Machine Learning,
                  and LLM-based systems to solve real-world problems and grow as a software engineer.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-card rounded-2xl p-8 border border-border-color hover:border-accent transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-accent group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Core Strengths</h3>
                </div>
                <ul className="space-y-4 text-text-secondary">
                  {[
                    'Problem-solving with C++ and Data Structures',
                    'Backend architecture and API design',
                    'AI agents, LangGraph workflows, and autonomous systems',
                    'Quick learner with hands-on project-based approach',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-accent mt-1">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Education & Interests */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <div className="bg-card rounded-2xl p-8 border border-border-color hover:border-accent transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-accent group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Education</h3>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative pl-6 border-l-2 border-border-color"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent/10 text-accent font-medium">
                        2023 - 2027
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary mb-1">
                      B.Tech in Information Technology
                    </h4>
                    <p className="text-text-secondary">Birla Vishvakarma Mahavidyalaya</p>
                    <p className="text-text-muted text-sm mt-1">Expected Graduation: May 2027</p>
                    <p className="text-text-muted text-sm">CGPA: 8.5/10</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-card rounded-2xl p-8 border border-border-color hover:border-accent transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-accent group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Technical Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Backend Development',
                    'Machine Learning',
                    'AI Systems',
                    'LLMs',
                    'Node.js',
                    'C++',
                    'RAG',
                    'LangChain',
                  ].map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 rounded-full bg-secondary text-text-secondary text-sm font-medium border border-border-color hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About