import { Code2, Rocket, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../projects/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Clean, fast, and optimized applications built with modern tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800/50">
                  <div className="flex gap-4">
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-foreground transition-colors" aria-label="GitHub Source">
                        <Code2 size={20} />
                      </a>
                    )}
                    {project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors" aria-label="Live Demo">
                        <Rocket size={20} />
                      </a>
                    )}
                  </div>
                  
                  <Link
                    to={`/project/${project.id}`}
                    className="flex items-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-white px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 group/btn"
                  >
                    View Details
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
