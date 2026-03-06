import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Github, Linkedin, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { navLinks } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section from scroll position
      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      const current = sections.findLast((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 120;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-2xl flex items-center justify-between px-6 py-3 transition-all duration-500 ${
            scrolled
              ? 'bg-[var(--background)]/90 backdrop-blur-xl border border-[var(--glass-border)] shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
              : 'bg-transparent border-transparent shadow-none'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:rotate-12 transition-transform duration-300">
              <Cpu size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter">
              AYUSH<span className="text-primary">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors rounded-lg ${
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-400 hover:text-primary'
                }`}
              >
                {link.title}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/rakholiyaayush321"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/ayush-rakholiya"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <ThemeToggle />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/25 hover:scale-105"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile: Theme + Menu */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mt-2 overflow-hidden rounded-2xl bg-[var(--background)]/95 backdrop-blur-xl border border-[var(--glass-border)] shadow-xl"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${
                    activeSection === link.id
                      ? 'text-primary bg-primary/10 border border-primary/20'
                      : 'text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.title}
                </motion.button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-4">
                <a href="https://github.com/rakholiyaayush321" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-primary transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/ayush-rakholiya" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-primary transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-hover transition-all">
                  <Download size={14} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
