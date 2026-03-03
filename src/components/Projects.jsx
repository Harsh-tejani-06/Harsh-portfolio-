import { ExternalLink, Github, Brain, Database, FileText } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'RAG - OWASP Book Q&A',
      description: 'A Retrieval-Augmented Generation (RAG) system to extract information from the OWASP book. Implemented document loading, text chunking, embeddings, and semantic search to enable users to ask security-related questions and receive accurate answers.',
      techStack: ['LangChain', 'Python', 'LLMs', 'RAG', 'Embeddings'],
      github: 'https://github.com/Harsh-tejani-06/Retrieve-data-from-OWASP-book-and-Ans-of-Question',
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'LLM From Scratch',
      description: 'Implemented a basic Large Language Model from scratch to understand the internal workings of transformers. Covered core concepts such as tokenization, embeddings, attention mechanism, and training loop.',
      techStack: ['Python', 'Neural Networks', 'Transformers', 'Tokenization', 'Attention Mechanism'],
      github: 'https://github.com/Harsh-tejani-06/LLM-FROM-SCRATCH',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Phone Directory App',
      description: 'A CRUD-based phone directory application built with Node.js. Implemented features to add, update, delete, and search contacts with clean routing, backend logic, and REST API design.',
      techStack: ['Node.js', 'Express.js', 'REST API', 'CRUD', 'Backend'],
      github: 'https://github.com/Harsh-tejani-06/Simple-Phone-Directory-using-node.js',
      icon: FileText,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured <span className="accent-text">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Showcasing my work in AI/ML, backend development, and LLM-based systems
          </p>
          <div className="w-20 h-1 accent-bg mx-auto rounded-full mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl border border-theme overflow-hidden hover:border-accent transition-all duration-300 group flex flex-col"
            >
              {/* Project Header */}
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:accent-text transition-colors duration-200"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:accent-text transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* View Project Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-theme hover:border-accent hover:accent-text transition-all duration-200 text-sm font-medium"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Harsh-tejani-06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg accent-bg accent-hover text-white font-semibold transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
