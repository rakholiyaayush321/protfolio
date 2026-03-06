import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Rocket, Tag } from 'lucide-react';

import neurocryImg from '../assets/neurocry.png';
import chatbotImg from '../assets/chatbot-impact.png';

const projects = [
  {
    title: 'NeuroCry-AI',
    description:
      'Infant cry detection system that classifies cries like hunger, pain, and breathing problems using machine learning and audio processing. Built with deep audio analysis pipeline.',
    image: neurocryImg,
    tags: ['Machine Learning', 'Audio Classification', 'Python', 'Librosa'],
    github: 'https://github.com/rakholiyaayush321/baby-cry-analysis',
    demo: '#',
    gradient: 'from-indigo-500/20 to-violet-500/20',
    accent: '#6366f1',
  },
  {
    title: 'AI Game Analyzer',
    description:
      'LLM-powered tool that analyzes game project codebases, detects the engine, and generates architecture insights automatically using AST analysis.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    tags: ['LLMs', 'LangChain', 'Node.js', 'AST Analysis'],
    github: 'https://github.com/rakholiyaayush321/Game-analysis.git',
    demo: '#',
    gradient: 'from-sky-500/20 to-cyan-500/20',
    accent: '#0ea5e9',
  },
  {
    title: 'AI Mental Health Chatbot',
    description:
      'An AI chatbot providing context-aware mental health support using Large Language Models with fine-tuned conversational abilities and empathetic responses.',
    image: chatbotImg,
    tags: ['Generative AI', 'NLP', 'FastAPI', 'React'],
    github: 'https://github.com/rakholiyaayush321/mental-health-chatbot',
    demo: '#',
    gradient: 'from-violet-500/20 to-pink-500/20',
    accent: '#a78bfa',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very portfolio — a FAANG-level developer portfolio built with React, Tailwind CSS v4, Framer Motion, and Three.js with 3D interactive elements.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/rakholiyaayush321',
    demo: '#',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accent: '#10b981',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            className="section-divider mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-16"
          >
            A selection of projects that demonstrate my expertise in AI/ML and full-stack development.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card group overflow-hidden flex flex-col border-slate-100 dark:border-slate-800/50 relative"
              style={{ '--project-accent': project.accent }}
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{ background: `linear-gradient(90deg, ${project.accent}66, ${project.accent})` }}
              />

              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Tags overlay */}
                <div className="absolute bottom-3 left-3 flex gap-2 z-20 flex-wrap">
                  {project.tags.slice(0, 2).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white bg-slate-900/80 backdrop-blur-md rounded-lg border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-black mb-3 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Full tag list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg border"
                      style={{ color: project.accent, borderColor: `${project.accent}33`, background: `${project.accent}10` }}
                    >
                      <Tag size={8} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex items-center space-x-6 pt-5 border-t border-slate-100 dark:border-slate-800/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors group/link"
                  >
                    <Code2 size={15} className="group-hover/link:scale-110 transition-transform" />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors group/link"
                  >
                    <Rocket size={15} className="group-hover/link:scale-110 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-primary"
                    aria-label="External link"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
