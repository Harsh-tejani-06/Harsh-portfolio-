import {
  Code2,
  Server,
  Database,
  Terminal,
  Cpu,
  Workflow,
  Globe,
  Brain,
  Box,
  GitBranch
} from 'lucide-react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'C++', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Python', level: 75 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI / ML',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 70 },
        { name: 'LLM Concepts', level: 75 },
        { name: 'RAG Systems', level: 70 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'LLM Frameworks',
      icon: Workflow,
      skills: [
        { name: 'LangChain', level: 75 },
        { name: 'LangGraph', level: 70 },
        { name: 'Vector Databases', level: 65 }
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 70 }
      ],
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Tools & DevOps',
      icon: Terminal,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 }
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-secondary">
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
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications and AI solutions
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-6 border border-border-color hover:border-accent transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-secondary text-text-secondary rounded-full text-sm border border-border-color"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 border border-border-color"
        >
          <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Data Structures',
              'Algorithms',
              'Problem Solving',
              'RAG Systems',
              'Version Control',
              'Debugging',
            ].map((competency, index) => (
              <motion.div
                key={competency}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-3 rounded-lg bg-secondary border border-border-color hover:border-accent transition-all duration-200"
              >
                <span className="text-sm font-medium text-text-secondary">{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills