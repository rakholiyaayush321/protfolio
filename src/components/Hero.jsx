import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown, Sparkles } from 'lucide-react';
import Scene from './canvas/Scene';

// Typing animation hook
function useTypingEffect(words, speed = 80, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

const titles = [
  'AI / ML Engineer',
  'Deep Learning Specialist',
  'LLM Developer',
  'Full Stack Developer',
  'Open Source Contributor',
];

const socialLinks = [
  {
    icon: <Github size={20} />,
    href: 'https://github.com/rakholiyaayush321',
    label: 'GitHub',
    color: '#f0f6ff',
  },
  {
    icon: <Linkedin size={20} />,
    href: 'https://linkedin.com/in/ayush-rakholiya',
    label: 'LinkedIn',
    color: '#0a66c2',
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:rakholiyaayush321@gmail.com',
    label: 'Email',
    color: '#ea4335',
  },
];

export default function Hero() {
  const typedText = useTypingEffect(titles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-mesh"
    >
      {/* Decorative animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-12 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1], x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 -right-12 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between py-12 lg:py-0">
        {/* Text Content */}
        <div className="lg:w-3/5 text-center lg:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              AI / Machine Learning Specialist
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 leading-[0.9]"
          >
            Ayush <br />
            <span className="text-gradient drop-shadow-sm">Rakholiya</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start mb-6 h-10"
          >
            <span className="text-xl md:text-2xl font-mono font-bold text-primary">
              {typedText}
            </span>
            <span className="typing-cursor ml-1 bg-primary" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
          >
            Pioneering the next generation of{' '}
            <span className="text-foreground font-bold">Intelligent Systems</span>. From Deep Learning
            to Large Language Models — turning data into impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="group relative w-full sm:w-auto px-10 py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 hover:bg-primary-hover shadow-lg shadow-primary/25 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group w-full sm:w-auto px-10 py-4 rounded-xl glass-card border-slate-200 dark:border-slate-700 text-foreground font-bold flex items-center justify-center space-x-3 transition-all duration-300 hover:bg-primary/10 hover:border-primary/50"
            >
              <Download size={18} className="text-primary group-hover:animate-bounce" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Connect</span>
            <div className="h-px w-8 bg-slate-300 dark:bg-slate-700" />
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary hover:border-primary/50 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          className="hidden lg:block lg:w-2/5 relative aspect-square"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="relative z-10 w-full h-full">
            <Scene />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
