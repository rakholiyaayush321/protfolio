import { motion } from 'framer-motion';
import { User, Code2, Cpu, Globe2, Zap, Brain, MessageSquare } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '1+', icon: <User size={20} />, color: 'text-indigo-400' },
  { label: 'Projects Completed', value: '10+', icon: <Code2 size={20} />, color: 'text-violet-400' },
  { label: 'Technologies', value: '15+', icon: <Cpu size={20} />, color: 'text-sky-400' },
  { label: 'Worldwide Reach', value: '🌍', icon: <Globe2 size={20} />, color: 'text-emerald-400' },
];

const highlights = [
  { icon: <Brain size={18} />, text: 'Deep Learning & Neural Networks' },
  { icon: <MessageSquare size={18} />, text: 'LLMs & Generative AI' },
  { icon: <Zap size={18} />, text: 'Real-time AI Applications' },
  { icon: <Code2 size={18} />, text: 'Full Stack Development' },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            className="section-divider mb-16"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image + floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2 border-primary/10">
              <img
                src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800"
                alt="About Ayush Rakholiya"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>

            {/* Floating AI badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 glass-card p-5 bg-primary/10 border-primary/20 hidden md:block shadow-xl z-10"
            >
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl text-white shadow-lg">
                  <Cpu size={22} />
                </div>
                <div>
                  <p className="text-sm font-black text-primary">AI/ML Engineer</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Innovation Driven</p>
                </div>
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -left-4 glass-card p-4 border-secondary/20 hidden md:block bg-secondary/5 z-10"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-black text-slate-600 dark:text-slate-300">Available for Roles</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Fusing <span className="text-primary">Intelligence</span> with Creativity
            </h3>
            <div className="space-y-4 text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              <p>
                I am an <strong className="text-foreground">AI / Machine Learning Engineer</strong> dedicated to building
                systems that not only solve complex problems but also feel intuitive and human-centric.
              </p>
              <p>
                With a strong focus on <strong className="text-foreground">Deep Learning</strong> and{' '}
                <strong className="text-foreground">LLMs</strong>, I bridge the gap between abstract data and actionable
                insights, ensuring every model serves a clear purpose.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center space-x-2 p-3 rounded-xl bg-primary/5 border border-primary/10 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  <span className="text-primary shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="glass-card p-5 border-slate-100 dark:border-slate-800/50 text-center group"
                >
                  <div className={`${stat.color} flex justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-tight mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <blockquote className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-primary pl-6 py-3 bg-primary/5 rounded-r-xl text-sm">
              "The best way to predict the future is to invent it. In the era of AI, invention is limited only by our
              data and imagination."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
