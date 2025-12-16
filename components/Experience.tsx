import React from 'react';
import { Briefcase, CheckCircle2, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-16">
           <div className="bg-emerald-500/10 p-3 rounded-xl mr-4">
              <Briefcase className="w-8 h-8 text-emerald-500" />
           </div>
           <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
              <p className="text-slate-400 mt-1">My professional journey in the tech industry.</p>
           </div>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div 
              key={index} 
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-slate-900 bg-emerald-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              
              <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-800/50 hover:border-emerald-500/30 hover:bg-slate-900/60 transition-all duration-300 relative overflow-hidden">
                
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">{job.role}</h3>
                      <div className="text-slate-400 font-medium text-lg mt-1">
                        {job.company}
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0 inline-flex items-center px-4 py-1.5 bg-slate-800 rounded-full border border-slate-700 text-slate-300 text-sm font-medium">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                      {job.period}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-slate-300 leading-relaxed group/item">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500/50 mr-4 shrink-0 mt-0.5 group-hover/item:text-emerald-400 transition-colors" />
                        <span className="group-hover/item:text-slate-200 transition-colors">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;