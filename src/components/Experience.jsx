import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "AI/ML Intern",
    company: "Awakeen Studio Pvt Ltd",
    duration: "Present",
    description: "Contributing to real-world AI projects. Responsibilities include data preprocessing, machine learning model development, feature engineering, and rigorous model evaluation.",
    skills: ["Python", "Machine Learning", "Data Preprocessing", "Feature Engineering"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-slate-50/30 dark:bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-4"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            className="section-divider mb-16"
          />
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 before:md:left-1/2 before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/20 shrink-0 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-8 -translate-x-1/2 md:left-1/2 z-10">
                <Briefcase size={18} className="text-white" />
              </div>

              <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] ml-auto md:ml-0 glass-card p-8 border-slate-100 dark:border-slate-800/50 hover:bg-white/5 transition-all">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    <Calendar size={14} className="animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest">{exp.duration}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-1 leading-tight">{exp.role}</h3>
                  <h4 className="text-lg font-bold text-slate-500 dark:text-slate-400 mb-4">{exp.company}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed font-medium">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 rounded-lg border border-primary/10">
                      {skill}
                    </span>
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
