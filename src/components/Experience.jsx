import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "AI/ML Intern",
    company: "Awakeen Studio Pvt Ltd",
    skills: ["Python", "Machine Learning", "Data Preprocessing", "Feature Engineering"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-24 min-h-[calc(100vh-6rem)] flex items-center bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow">
              
              <div className="md:w-1/4 shrink-0 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 pb-4 md:pb-0 md:pr-6">
                <div className="flex items-center gap-2 text-primary font-bold mb-2">
                  <Briefcase size={18} />
                  <span>Internship</span>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                <h4 className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
