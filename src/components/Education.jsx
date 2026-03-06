import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "B.Tech Computer Engineering",
    institution: "Silver Oak University",
    duration: "2023 - 2026",
    details: "Focus on advanced computing, software engineering, and artificial intelligence."
  },
  {
    degree: "Diploma Computer Engineering",
    institution: "GTU (Gujarat Technological University)",
    duration: "2020 - 2023",
    details: "Foundational computer science concepts, programming, and system architecture."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-4"
          >
            My <span className="text-gradient">Education</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            className="section-divider mb-16"
          />
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 before:md:left-1/2 before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary shadow-lg shadow-secondary/20 shrink-0 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-8 -translate-x-1/2 md:left-1/2 z-10">
                <GraduationCap size={18} className="text-white" />
              </div>

              <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] ml-auto md:ml-0 glass-card p-8 border-slate-100 dark:border-slate-800/50 hover:bg-white/5 transition-all">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    <Calendar size={14} className="animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest">{edu.duration}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-1 leading-tight">{edu.degree}</h3>
                  <h4 className="text-lg font-bold text-slate-500 dark:text-slate-400 mb-4">{edu.institution}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
