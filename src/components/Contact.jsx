import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-slate-50/30 dark:bg-transparent">
      {/* Decorative Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            className="section-divider mb-16"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-black mb-6">Let's build something <span className="text-primary">extraordinary</span> together.</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
              Whether you have a question about a project or just want to connect, my inbox is always open. I'm currently looking for new opportunities in AI/ML.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Email</p>
                  <a href="mailto:rakholiyaayush321@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">rakholiyaayush321@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Location</p>
                  <p className="text-lg font-bold">Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: <Github size={20} />, link: "https://github.com/rakholiyaayush321", label: "Github" },
                { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/ayush-rakholiya", label: "Linkedin" },
                { icon: <Mail size={20} />, link: "mailto:rakholiyaayush321@gmail.com", label: "Email" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 border-slate-100 dark:border-slate-800/50"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-slate-100/50 dark:bg-slate-800/20 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-800/50 rounded-xl px-5 py-4 outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-100/50 dark:bg-slate-800/20 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-800/50 rounded-xl px-5 py-4 outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="Inquiry about Collaboration"
                  className="w-full bg-slate-100/50 dark:bg-slate-800/20 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-800/50 rounded-xl px-5 py-4 outline-none transition-all placeholder:text-slate-400 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea 
                  id="message"
                  rows="5" 
                  placeholder="Hi Ayush, I'd like to talk about..."
                  className="w-full bg-slate-100/50 dark:bg-slate-800/20 border-2 border-transparent focus:border-primary/20 focus:bg-white dark:focus:bg-slate-800/50 rounded-xl px-5 py-4 outline-none transition-all resize-none placeholder:text-slate-400 font-medium"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all duration-300 flex items-center justify-center space-x-3 group active:scale-[0.98]">
                <span>Send Message</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
