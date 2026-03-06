import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Github, Rocket, CheckCircle2 } from 'lucide-react';
import { projects } from '../projects/projectsData';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-black mb-4">Project Not Found</h2>
        <Link to="/" className="text-primary hover:underline font-medium">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in-up">
      <Link to="/projects" className="inline-flex items-center space-x-2 text-slate-500 hover:text-primary transition-colors mb-10 group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-semibold">Back to Portfolio</span>
      </Link>

      <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl overflow-hidden shadow-xl">
        {project.image && !project.image.startsWith('http') && project.id !== 'portfolio-website' ? (
          <div className="w-full h-64 md:h-96 bg-slate-100 dark:bg-slate-900 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full h-64 md:h-96 bg-slate-100 dark:bg-slate-900 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 shrink-0">
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-foreground transition-colors rounded-xl font-bold text-sm">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white transition-colors rounded-xl font-bold text-sm shadow-lg shadow-primary/25">
                  <Rocket size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Overview</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {project.overview || project.description}
              </p>
            </section>

            {project.keyFeatures && (
              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Key Features</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                      <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.architecture && (
              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Architecture & Technologies</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {project.architecture}
                </p>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
