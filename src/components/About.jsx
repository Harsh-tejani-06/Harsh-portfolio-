import { GraduationCap, Target, Code2, Lightbulb } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About <span className="accent-text">Me</span>
          </h2>
          <div className="w-20 h-1 accent-bg mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-theme shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg accent-bg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Career Objective</h3>
              </div>
              <p className="text-secondary leading-relaxed">
                Motivated IT student with strong interest in backend development, machine learning,
                and AI systems. I am passionate about applying my skills in C++, Node.js, Machine Learning,
                and LLM-based systems to solve real-world problems and grow as a software engineer.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-theme shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg accent-bg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Additional Skills</h3>
              </div>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-2">
                  <span className="accent-text mt-1">▹</span>
                  <span>Problem-solving with C++</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="accent-text mt-1">▹</span>
                  <span>Understanding of backend architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="accent-text mt-1">▹</span>
                  <span>Strong interest in AI agents, LangGraph workflows, and autonomous systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="accent-text mt-1">▹</span>
                  <span>Quick learner with hands-on project-based approach</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-theme shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg accent-bg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-theme">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full accent-bg"></div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-sm rounded-full accent-bg text-white font-medium">
                      2023 - 2027
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-1">
                    B.Tech in Information Technology
                  </h4>
                  <p className="text-secondary">Birla Vishvakarma Mahavidyalaya</p>
                  <p className="text-muted text-sm">Expected Graduation: May 2027</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-theme shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg accent-bg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Backend Development', 'Machine Learning', 'AI Systems', 'LLMs', 'Node.js', 'C++', 'RAG', 'LangChain'].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary text-sm font-medium border border-theme hover:border-accent transition-colors duration-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
