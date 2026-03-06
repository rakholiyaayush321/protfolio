import { Cpu, Code2, Layers, Wrench, Sparkles } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming',
    icon: <Code2 size={24} />,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    items: ['Python', 'JavaScript', 'C++']
  },
  {
    category: 'Machine Learning',
    icon: <Cpu size={24} />,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    items: ['Scikit-learn', 'Feature Engineering', 'Model Evaluation']
  },
  {
    category: 'Deep Learning',
    icon: <Sparkles size={24} />,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    items: ['PyTorch', 'Neural Networks', 'TensorFlow']
  },
  {
    category: 'Generative AI',
    icon: <Sparkles size={24} />,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    items: ['LLMs (GPT/Gemini)', 'LangChain', 'NLP']
  },
  {
    category: 'Web Development',
    icon: <Layers size={24} />,
    color: 'text-sky-500',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    items: ['React', 'HTML & CSS', 'Node.js']
  },
  {
    category: 'Tools & DevOps',
    icon: <Wrench size={24} />,
    color: 'text-slate-500',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/20',
    items: ['Git & GitHub', 'FastAPI', 'Jupyter']
  }
];

const skills = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'Machine Learning', level: 90, icon: '🧠' },
    { name: 'Deep Learning', level: 85, icon: '⚡' },
    { name: 'React.js', level: 88, icon: '⚛️' },
    { name: 'JavaScript', level: 92, icon: '📜' },
    { name: 'SQL & Databases', level: 85, icon: '🗄️' },
    { name: 'Data Preprocessing', level: 90, icon: '📊' },
    { name: 'NLP & LLMs', level: 82, icon: '💬' },
    { name: 'Computer Vision', level: 80, icon: '👁️' },
    { name: 'Git & GitHub', level: 90, icon: '🐙' }
  ];

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24 min-h-[calc(100vh-6rem)] flex items-center bg-slate-50 dark:bg-slate-900/50 relative border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
            Core Skills
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Technologies I use to build robust, scalable, and intelligent applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${skillGroup.bg} ${skillGroup.color} ${skillGroup.border} border`}>
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{skillGroup.category}</h3>
              </div>

              <ul className="space-y-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center text-slate-600 dark:text-slate-400 font-medium">
                    <span className={`w-1.5 h-1.5 rounded-full mr-3 ${skillGroup.bg.replace('/10', '')}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
