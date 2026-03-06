import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 min-h-[calc(100vh-6rem)] flex items-center bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-black mb-6 text-foreground">
              Let's build something <span className="text-primary">extraordinary</span> together.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
              Whether you have a question about a project or just want to connect, my inbox is always open. I'm currently looking for new opportunities in AI/ML.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email</p>
                  <a href="mailto:rakholiyaayush894@gmail.com" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                    rakholiyaayush894@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Location</p>
                  <p className="text-lg font-bold text-foreground">Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://github.com/rakholiyaayush321" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/rakholiya-ayush" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="Inquiry about Collaboration"
                  className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-400 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea 
                  id="message"
                  rows="5" 
                  placeholder="Hi Ayush, I'd like to talk about..."
                  className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 outline-none transition-all resize-none placeholder:text-slate-400 font-medium"
                ></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all flex items-center justify-center space-x-2 group">
                <span>Send Message</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
