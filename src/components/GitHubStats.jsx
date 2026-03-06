import { motion } from 'framer-motion';
import { Github, Star, GitFork, Users, Code2, BarChart2, ExternalLink } from 'lucide-react';

const githubUsername = 'rakholiyaayush321';

// GitHub stats images using GitHub Readme Stats API
const statsConfig = {
  username: githubUsername,
  theme: 'tokyonight',
  hide_border: true,
  bg_color: '0d1117',
  title_color: '6366f1',
  text_color: 'c9d1d9',
  icon_color: 'a78bfa',
};

const qs = (obj) => new URLSearchParams(obj).toString();

const stats = [
  { label: 'Repositories', value: '15+', icon: <Code2 size={20} />, color: 'text-indigo-400' },
  { label: 'Total Stars', value: '50+', icon: <Star size={20} />, color: 'text-yellow-400' },
  { label: 'Contributions', value: '500+', icon: <GitFork size={20} />, color: 'text-violet-400' },
  { label: 'Followers', value: '20+', icon: <Users size={20} />, color: 'text-sky-400' },
];

const topLanguages = [
  { name: 'Python', percent: 55, color: '#3776AB' },
  { name: 'JavaScript', percent: 25, color: '#F7DF1E' },
  { name: 'TypeScript', percent: 10, color: '#3178C6' },
  { name: 'C++', percent: 10, color: '#00599C' },
];

export default function GitHubStats() {
  return (
    <section id="github" className="py-32 relative overflow-hidden bg-slate-50/30 dark:bg-transparent">
      {/* BG accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-4"
          >
            GitHub <span className="text-gradient">Stats</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            className="section-divider mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-center max-w-xl mx-auto mb-16"
          >
            A snapshot of my open source activity and contributions.
          </motion.p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-6 text-center group"
            >
              <div className={`${stat.color} flex justify-center mb-3 group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub stats cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Main Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden p-1"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&${qs({
                show_icons: true,
                theme: 'tokyonight',
                hide_border: true,
                bg_color: '0d1117',
                title_color: '6366f1',
                text_color: 'c9d1d9',
                icon_color: 'a78bfa',
                count_private: true,
              })}`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </motion.div>

          {/* Streak Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden p-1"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=tokyonight&hide_border=true&background=0d1117&ring=6366f1&fire=a78bfa&currStreakLabel=6366f1`}
              alt="GitHub Streak"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Top Languages + Activity */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Top Languages API Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden p-1"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&${qs({
                layout: 'compact',
                theme: 'tokyonight',
                hide_border: true,
                bg_color: '0d1117',
                title_color: '6366f1',
                text_color: 'c9d1d9',
                langs_count: 6,
              })}`}
              alt="Top Languages"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </motion.div>

          {/* Custom Language Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <BarChart2 size={20} />
              </div>
              <h3 className="text-lg font-black">Top Languages</h3>
            </div>
            <div className="space-y-5">
              {topLanguages.map((lang, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: lang.color }} />
                      <span className="font-bold">{lang.name}</span>
                    </div>
                    <span className="font-mono font-bold" style={{ color: lang.color }}>{lang.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + idx * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                      className="h-full rounded-full"
                      style={{ background: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl glass-card border-slate-200 dark:border-slate-800 text-foreground font-bold hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
          >
            <Github size={20} className="text-primary" />
            <span>View Full GitHub Profile</span>
            <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
