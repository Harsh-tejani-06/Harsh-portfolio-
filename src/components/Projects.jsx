import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, X, Database, Brain, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'RAG - OWASP Book Q&A',
      description: 'A Retrieval-Augmented Generation (RAG) system for security documentation. Implements document loading, text chunking, embeddings, and semantic search for accurate answers.',
      longDescription: 'Built a sophisticated Q&A system that processes OWASP security documentation using LangChain and embeddings. Users can ask security-related questions and receive accurate, contextual answers from the documentation.',
      techStack: ['LangChain', 'Python', 'LLMs', 'RAG', 'Embeddings', 'FAISS'],
      github: 'https://github.com/Harsh-tejani-06/Retrieve-data-from-OWASP-book-and-Ans-of-Question',
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
      id: 2,
      title: 'LLM From Scratch',
      description: 'Implemented a basic Large Language Model from scratch to understand transformer internals, attention mechanisms, and training processes.',
      longDescription: 'Deep-dive implementation of transformer architecture including tokenization, positional encoding, multi-head attention, and training loops. Great learning experience in neural networks.',
      techStack: ['Python', 'PyTorch', 'Transformers', 'Tokenization', 'Attention'],
      github: 'https://github.com/Harsh-tejani-06/LLM-FROM-SCRATCH',
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
      id: 3,
      title: 'Postify - Social Media Platform',
      description: 'A fully functional social media mini-platform featuring secure user authentication, post management, likes, friendships, and built-in privacy controls.',
      longDescription: 'Developed a scalable MVC-pattern backend using Node.js, Express, and MongoDB, handling JWT-based authentication, image uploads, and complex data relationships for users, posts, and real-time likes.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'EJS'],
      github: 'https://github.com/Harsh-tejani-06/Postify',
      icon: User,
      color: 'from-orange-500 to-amber-500',
      features: [
        'Secure JWT Authentication & Hashing',
        'Post creation & interaction limits',
        'Complex User Friendship linking',
        'Public/Private profile locks'
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      const horizontal = horizontalRef.current;
      if (horizontal) {
        gsap.to(horizontal, {
          x: () => -(horizontal.scrollWidth - window.innerWidth + 100),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${horizontal.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-[#050508] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />

      <div className="h-screen flex flex-col justify-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12 px-4"
        >
          <span className="text-cyan-400 font-space tracking-widest text-sm mb-4 block">
            FEATURED WORK
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div
          ref={horizontalRef}
          className="flex gap-8 px-8 items-center"
          style={{ width: 'max-content' }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}

          {/* View More Card */}
          <motion.a
            href="https://github.com/Harsh-tejani-06"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[400px] h-[500px] glass-card rounded-2xl flex flex-col items-center justify-center gap-6 group hoverable cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h3 className="font-space text-2xl font-bold text-white mb-2">
                View More
              </h3>
              <p className="text-gray-400">Check out my GitHub</p>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ExternalLink className="w-6 h-6 text-cyan-400" />
            </motion.div>
          </motion.a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

// 3D Tilt Card Component
const ProjectCard = ({ project, index, onClick }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = project.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="w-[400px] h-[500px] glass-card rounded-2xl p-6 cursor-pointer group hoverable relative overflow-hidden"
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, rgba(0, 243, 255, 0.15), transparent 50%)`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="font-space text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {project.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
              <span className="text-cyan-400 mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-white/5 text-cyan-400 border border-cyan-400/20"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action */}
        <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-4 transition-all">
          <span className="font-medium">View Details</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>

      {/* Border Gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-card max-w-2xl w-full rounded-2xl p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6 text-gray-400" />
        </button>

        {/* Icon */}
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6`}>
          <Icon className="w-10 h-10 text-white" />
        </div>

        {/* Title */}
        <h2 className="font-space text-3xl font-bold text-white mb-4">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm text-gray-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 text-cyan-400 border border-cyan-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white font-medium"
        >
          <Github className="w-5 h-5" />
          View on GitHub
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;