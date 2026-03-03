import { ExternalLink, Github, Brain, Database, FileText, ArrowRight, User } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'RAG - OWASP Book Q&A',
      description: 'A Retrieval-Augmented Generation (RAG) system for security documentation. Implements document loading, text chunking, embeddings, and semantic search for accurate answers.',
      longDescription: 'Built a sophisticated Q&A system that processes OWASP security documentation using LangChain and embeddings. Users can ask security-related questions and receive accurate, contextual answers.',
      techStack: ['LangChain', 'Python', 'LLMs', 'RAG', 'Embeddings', 'FAISS'],
      github: 'https://github.com/Harsh-tejani-06/Retrieve-data-from-OWASP-book-and-Ans-of-Question',
      live: '#',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Document chunking and vector embeddings',
        'Semantic search with FAISS',
        'Context-aware responses',
        'Support for multiple document formats'
      ]
    },
    {
      title: 'LLM From Scratch',
      description: 'Implemented a basic Large Language Model from scratch to understand transformer internals, attention mechanisms, and training processes.',
      longDescription: 'Deep-dive implementation of transformer architecture including tokenization, positional encoding, multi-head attention, and training loops. Great learning experience in neural networks.',
      techStack: ['Python', 'PyTorch', 'Transformers', 'Tokenization', 'Attention'],
      github: 'https://github.com/Harsh-tejani-06/LLM-FROM-SCRATCH',
      live: '#',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Custom transformer implementation',
        'Multi-head attention mechanism',
        'Positional encodings',
        'Training from scratch'
      ]
    },
    {
      title: 'Postify - Social Media Platform',
      description: 'A fully functional social media mini-platform featuring secure user authentication, post management, likes, friendships, and built-in privacy controls.',
      longDescription: 'Developed a scalable MVC-pattern backend using Node.js, Express, and MongoDB, handling JWT-based authentication, image uploads, and complex data relationships for users, posts, and real-time likes.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'EJS'],
      github: 'https://github.com/Harsh-tejani-06/Postify',
      live: '#',
      icon: User,
      color: 'from-orange-500 to-amber-500',
      features: [
        'Secure JWT Authentication & Hashing',
        'Post creation & interaction limits',
        'Complex User Friendship linking',
        'Public/Private profile locks'
      ]
    }
  ]

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
    <section id="projects" className="py-20 bg-primary">
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
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Showcasing my work in AI/ML, backend development, and LLM-based systems
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl border border-border-color overflow-hidden hover:border-accent transition-all duration-300 group flex flex-col h-full"
            >
              {/* Project Header */}
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-accent/10 transition-colors duration-200"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                      <span className="text-accent mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-text-secondary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium text-sm transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Harsh-tejani-06"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects