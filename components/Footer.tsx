import React from 'react';
import { Mail, Phone, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's work together</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              I'm actively looking for new opportunities in Backend and Fullstack development. 
              Feel free to reach out via phone or email.
            </p>
            <div className="flex space-x-6">
               <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500 transition-all">
                  <Github className="w-6 h-6" />
               </a>
               <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-slate-900 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500 transition-all">
                  <Mail className="w-6 h-6" />
               </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg text-emerald-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Phone</p>
                <p className="text-lg text-white font-medium">{PERSONAL_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg text-emerald-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg text-white font-medium hover:text-emerald-400 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Location</p>
                <p className="text-lg text-white font-medium">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bui Xuan Viet. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;