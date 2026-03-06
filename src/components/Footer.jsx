import { Cpu, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { navLinks } from '../constants';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                <Cpu size={18} />
              </div>
              <span className="text-xl font-black tracking-tighter">
                AYUSH<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              AI / ML Engineer building intelligent systems that make a difference. Passionate about deep learning and generative AI.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/rakholiyaayush321"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors group"
              >
                <Github size={16} className="group-hover:scale-110 transition-transform" />
                github.com/rakholiyaayush321
              </a>
              <a
                href="https://linkedin.com/in/ayush-rakholiya"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors group"
              >
                <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                linkedin.com/in/ayush-rakholiya
              </a>
              <a
                href="mailto:rakholiyaayush321@gmail.com"
                className="flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                rakholiyaayush321@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1 text-slate-500 text-sm font-medium">
            <span>© {new Date().getFullYear()} Ayush Rakholiya</span>
            <span className="mx-2">•</span>
            <span>Made with</span>
            <Heart size={14} className="text-red-500 animate-pulse mx-1" />
            <span>in India</span>
          </div>

          <p className="text-xs text-slate-400 font-mono">
            Built with React · Tailwind CSS · Framer Motion · Three.js
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
