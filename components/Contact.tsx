import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for contacting me! I will respond as soon as possible.');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div>
              <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm border-b-2 border-cyan-500 pb-1">Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">Let's Work Together</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I am looking for opportunities to apply my Backend (Java/C#) and Frontend skills in real-world projects. I am ready to learn new technologies and contribute to your team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-cyan-500/30">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 mr-5 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                  <a href="mailto:vietbx23@gmail.com" className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">vietbx23@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-cyan-500/30">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mr-5 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Phone</h4>
                  <p className="text-lg font-semibold text-white">+84 932 718 625</p>
                </div>
              </div>

              <div className="flex items-center group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-cyan-500/30">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mr-5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Location</h4>
                  <p className="text-lg font-semibold text-white">Binh Tan Dist, Ho Chi Minh City</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex space-x-4">
                <a href="https://github.com/VietBx23" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-10 rounded-3xl shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 p-32 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-cyan-400">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-cyan-400">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
                  placeholder="email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-cyan-400">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600 resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center opacity-70">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Bui Xuan Viet. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Built with React, Tailwind & Three.js
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;