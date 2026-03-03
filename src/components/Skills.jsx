import { 
  Code2, 
  Server, 
  Database, 
  GitBranch, 
  Layers, 
  Cpu,
  Terminal,
  Workflow,
  Box,
  FileCode
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['C++', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend & Web',
      icon: Server,
      skills: ['Node.js', 'Express.js'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI / ML',
      icon: Cpu,
      skills: ['Machine Learning', 'LLM Concepts', 'RAG'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'LLM Frameworks',
      icon: Workflow,
      skills: ['LangChain', 'LangGraph'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB (Basic)'],
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Tools & Platforms',
      icon: Terminal,
      skills: ['Git', 'GitHub', 'VS Code'],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const concepts = [
    'Data Structures & Algorithms',
    'API Development',
    'Retrieval-Augmented Generation (RAG)',
    'Backend Architecture',
    'Problem Solving'
  ]

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Technical <span className="accent-text">Skills</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications and AI solutions
          </p>
          <div className="w-20 h-1 accent-bg mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 border border-theme hover:border-accent transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-secondary text-secondary text-sm font-medium border border-theme"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Concepts */}
        <div className="bg-card rounded-2xl p-8 border border-theme">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl accent-bg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primary">Core Concepts</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {concepts.map((concept) => (
              <span
                key={concept}
                className="px-4 py-2 rounded-full bg-secondary text-secondary font-medium border border-theme hover:border-accent hover:accent-text transition-all duration-200"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
