import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "B.Tech Computer Engineering",
    institution: "Silver Oak University",
    duration: "2022 - 2025",
    details: "Focus on advanced computing, software engineering, and artificial intelligence."
  },
  {
    degree: "Diploma Computer Engineering",
    institution: "GTU (Gujarat Technological University)",
    duration: "2019 - 2022",
    details: "Foundational computer science concepts, programming, and system architecture."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-24 min-h-[calc(100vh-6rem)] flex items-center bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
            Education
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </div>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow">
              
              <div className="md:w-1/4 shrink-0 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 pb-4 md:pb-0 md:pr-6">
                <div className="flex items-center gap-2 text-secondary font-bold mb-2">
                  <Calendar size={18} />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <GraduationCap size={16} />
                  <span>Degree</span>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-foreground mb-1">{edu.degree}</h3>
                <h4 className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">{edu.institution}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
