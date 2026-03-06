import { motion } from 'framer-motion';
import { FaPython, FaRobot, FaBrain, FaCodeBranch, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiScikitlearn, SiPytorch, SiTensorflow, SiFastapi, SiJupyter, SiNodedotjs, SiDocker } from 'react-icons/si';
import { BsGraphUp } from 'react-icons/bs';
import { Cpu, Code2, Layers, Wrench, Sparkles } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming',
    icon: <Code2 size={22} />,
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Python', level: 95, icon: <FaPython className="text-[#3776AB]" />, color: '#3776AB' },
      { name: 'JavaScript', level: 85, icon: <SiJavascript className="text-[#F7DF1E]" />, color: '#F7DF1E' },
      { name: 'C++', level: 75, icon: <SiCplusplus className="text-[#00599C]" />, color: '#00599C' },
    ],
  },
  {
    category: 'Machine Learning',
    icon: <BsGraphUp size={22} />,
    color: 'from-orange-500 to-amber-500',
    items: [
      { name: 'Scikit-learn', level: 90, icon: <SiScikitlearn className="text-[#F7931E]" />, color: '#F7931E' },
      { name: 'Feature Engineering', level: 92, icon: <BsGraphUp className="text-emerald-500" />, color: '#10b981' },
      { name: 'Model Evaluation', level: 88, icon: <FaRobot className="text-slate-400" />, color: '#94a3b8' },
    ],
  },
  {
    category: 'Deep Learning',
    icon: <FaBrain size={22} />,
    color: 'from-red-500 to-pink-500',
    items: [
      { name: 'PyTorch', level: 90, icon: <SiPytorch className="text-[#EE4C2C]" />, color: '#EE4C2C' },
      { name: 'Neural Networks', level: 85, icon: <FaBrain className="text-pink-500" />, color: '#ec4899' },
      { name: 'TensorFlow', level: 80, icon: <SiTensorflow className="text-[#FF6F00]" />, color: '#FF6F00' },
    ],
  },
  {
    category: 'Generative AI',
    icon: <Sparkles size={22} />,
    color: 'from-violet-500 to-fuchsia-500',
    items: [
      { name: 'LLMs (GPT/Gemini)', level: 90, icon: <FaBrain className="text-primary" />, color: '#6366f1' },
      { name: 'LangChain', level: 85, icon: <FaCodeBranch className="text-secondary" />, color: '#a78bfa' },
      { name: 'NLP', level: 88, icon: <BsGraphUp className="text-accent" />, color: '#38bdf8' },
    ],
  },
  {
    category: 'Web Development',
    icon: <Layers size={22} />,
    color: 'from-sky-500 to-indigo-500',
    items: [
      { name: 'React', level: 82, icon: <FaReact className="text-[#61DAFB]" />, color: '#61DAFB' },
      { name: 'HTML & CSS', level: 90, icon: <FaHtml5 className="text-[#E34F26]" />, color: '#E34F26' },
      { name: 'Node.js', level: 75, icon: <SiNodedotjs className="text-[#339933]" />, color: '#339933' },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: <Wrench size={22} />,
    color: 'from-slate-500 to-slate-700',
    items: [
      { name: 'Git & GitHub', level: 95, icon: <FaGitAlt className="text-[#F05032]" />, color: '#F05032' },
      { name: 'FastAPI', level: 85, icon: <SiFastapi className="text-[#009688]" />, color: '#009688' },
      { name: 'Jupyter', level: 92, icon: <SiJupyter className="text-[#F37626]" />, color: '#F37626' },
    ],
  },
];

// Quick icon grid for high-level tech stack
const techIcons = [
  { icon: <FaPython size={28} />, name: 'Python', color: '#3776AB' },
  { icon: <SiPytorch size={28} />, name: 'PyTorch', color: '#EE4C2C' },
  { icon: <FaReact size={28} />, name: 'React', color: '#61DAFB' },
  { icon: <SiJavascript size={28} />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <FaHtml5 size={28} />, name: 'HTML5', color: '#E34F26' },
  { icon: <FaCss3Alt size={28} />, name: 'CSS3', color: '#1572B6' },
  { icon: <SiTensorflow size={28} />, name: 'TensorFlow', color: '#FF6F00' },
  { icon: <SiFastapi size={28} />, name: 'FastAPI', color: '#009688' },
  { icon: <FaGitAlt size={28} />, name: 'Git', color: '#F05032' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-slate-50/30 dark:bg-transparent">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-4"
          >
            Core <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            className="section-divider mb-16"
          />
        </div>

        {/* Tech Icon Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techIcons.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.15, y: -5 }}
              className="group flex flex-col items-center gap-2 p-4 glass-card w-20 h-20 justify-center"
              style={{ '--icon-color': tech.color }}
              title={tech.name}
            >
              <span style={{ color: tech.color }} className="group-hover:scale-110 transition-transform">
                {tech.icon}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity absolute mt-16 whitespace-nowrap bg-[var(--background)] px-2 py-1 rounded-md shadow-lg border border-[var(--glass-border)] z-10">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Cards with Progress Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden border-slate-100 dark:border-slate-800/50"
            >
              {/* Background gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skillGroup.color} opacity-80`} />

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center text-white shadow-lg`}>
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-black">{skillGroup.category}</h3>
                </div>

                <div className="space-y-6">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center text-sm mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-bold text-slate-700 dark:text-slate-300">{skill.name}</span>
                        </div>
                        <span className="font-black font-mono text-xs" style={{ color: skill.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800/50 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full relative overflow-hidden"
                          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.4 + skillIdx * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                          <div className="absolute inset-0 skeleton-glare opacity-40" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
