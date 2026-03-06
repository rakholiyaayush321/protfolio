import { Cpu, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { navLinks } from '../constants';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white">
                <Cpu size={18} />
              </div>
              <span className="text-xl font-black tracking-tighter text-foreground">
                AYUSH<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              AI / ML Engineer building intelligent systems that make a difference. Passionate about deep learning and generative AI.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/rakholiyaayush321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rakholiya-ayush"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="mailto:rakholiyaayush894@gmail.com"
                className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 dark:bg-slate-800 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1 text-slate-500 text-sm font-medium">
            <span>© {new Date().getFullYear()} Ayush Rakholiya</span>
            <span className="mx-2">•</span>
            <span>Made with</span>
            <Heart size={14} className="text-red-500 mx-1" />
            <span>in India</span>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
