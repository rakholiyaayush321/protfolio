import { useState, useEffect } from 'react';
import { Menu, X, Cpu, Github, Linkedin, Download, Eye } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { navLinks } from '../constants';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={() => handleNavClick('home')} className="flex items-center space-x-2 group z-50">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
            <Cpu size={20} />
          </div>
          <span className="text-xl font-black tracking-tighter text-foreground">
            AYUSH<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.id}
                href={link.id}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors rounded-lg"
              >
                {link.title}
              </a>
            ) : (
              <Link
                key={link.id}
                to={link.id}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors rounded-lg ${location.pathname === link.id ? 'text-primary' : 'text-slate-500 hover:text-primary'}`}
              >
                {link.title}
              </Link>
            )
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          
          <div className="flex items-center gap-2">
            
            <a href="/resume.pdf" download className="p-2 text-slate-500 hover:text-primary transition-colors group relative" aria-label="Download Resume">
              <Download size={20} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Download</span>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2 -mr-2" aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-background md:hidden pt-24 pb-10 px-4 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-2">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.id}
                    href={link.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-4 text-lg font-black uppercase tracking-widest text-foreground hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    key={link.id}
                    to={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`block px-4 py-4 text-lg font-black uppercase tracking-widest rounded-xl ${location.pathname === link.id ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-slate-100 dark:hover:bg-slate-900'}`}
                  >
                    {link.title}
                  </Link>
                )
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 border-t border-slate-200 dark:border-slate-800 pt-8">
              <a href="https://github.com/rakholiyaayush321" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-foreground">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/rakholiya-ayush" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-[#0a66c2]">
                <Linkedin size={20} />
              </a>
              <a href="/resume.pdf" download className="p-3 bg-primary text-white rounded-full flex items-center gap-2">
                <Download size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
