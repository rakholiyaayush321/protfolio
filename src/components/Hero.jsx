import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const titles = [
  'AI / ML Engineer',
  'Deep Learning Specialist',
  'LLM Developer',
  'Open Source Contributor',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center animate-fade-in-up">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-primary">
            Available for New Opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 text-foreground leading-none">
          Ayush <br className="md:hidden"/>
          <span className="text-primary">Rakholiya</span>
        </h1>

        {/* Title Carousel */}
        <div className="h-10 mb-6 overflow-hidden">
          <div 
            className="flex flex-col transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateY(-${titleIndex * 40}px)` }}
          >
            {titles.map((title, i) => (
              <span key={i} className="text-xl md:text-2xl font-mono font-bold text-slate-500 dark:text-slate-400 h-10 flex items-center justify-center">
                {title}
              </span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          Pioneering the next generation of <strong className="text-foreground">Intelligent Systems</strong>. 
          Building ultra-fast, context-aware applications from Deep Learning to Large Language Models.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
          {/* View Projects */}
          <Link
            to="/projects"
            className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-white font-bold flex items-center justify-center space-x-3 transition-colors hover:bg-primary-hover shadow-lg shadow-primary/20"
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="group w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-foreground font-bold flex items-center justify-center space-x-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <Download size={18} className="text-slate-500 group-hover:text-primary transition-colors" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/rakholiyaayush321" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/rakholiya-ayush" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:rakholiyaayush894@gmail.com" className="text-slate-400 hover:text-[#ea4335] transition-colors" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>

      </div>
    </section>
  );
}
