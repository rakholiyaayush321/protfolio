import { User, Code2, Cpu, Globe2, Zap, Brain, MessageSquare } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '1+', icon: <User size={20} />, color: 'text-indigo-500' },
  { label: 'Projects Completed', value: '10+', icon: <Code2 size={20} />, color: 'text-violet-500' },
  { label: 'Technologies', value: '15+', icon: <Cpu size={20} />, color: 'text-sky-500' },
  { label: 'Worldwide Reach', value: '🌍', icon: <Globe2 size={20} />, color: 'text-emerald-500' },
];

const highlights = [
  { icon: <Brain size={18} />, text: 'Deep Learning & Neural Networks' },
  { icon: <MessageSquare size={18} />, text: 'LLMs & Generative AI' },
  { icon: <Zap size={18} />, text: 'Real-time AI Applications' },
  { icon: <Code2 size={18} />, text: 'Full Stack Development' },
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 min-h-[calc(100vh-6rem)] flex items-center bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800"
                alt="About Ayush Rakholiya"
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating AI badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl hidden md:block shadow-xl z-10 animate-float">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-xl text-primary font-bold shadow-sm border border-primary/20">
                  <Cpu size={22} />
                </div>
                <div>
                  <p className="text-sm font-black text-foreground">AI/ML Engineer</p>
                  <p className="text-xs text-slate-500">Innovation Driven</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Fusing <span className="text-primary">Intelligence</span> with Creativity
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
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
            <div className="grid grid-cols-2 gap-3 mb-10">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:border-primary/30"
                >
                  <span className="text-primary shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:shadow-md transition-shadow"
                >
                  <div className={`${stat.color} flex justify-center mb-2`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black text-foreground">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
