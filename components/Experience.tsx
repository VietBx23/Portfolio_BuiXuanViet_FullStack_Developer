import React from 'react';
import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Circuit Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path d="M50 10v80M10 50h80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20">
           <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Experience</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                My professional journey building scalable systems and solving complex engineering challenges.
              </p>
           </div>
           <div className="hidden md:block p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
              <Briefcase className="w-8 h-8 text-emerald-500" />
           </div>
        </div>

        <div className="relative">
          {/* Main Vertical Beam */}
          <div className="absolute left-[28px] md:left-[50%] top-0 bottom-0 w-[2px] bg-slate-800 md:-translate-x-1/2"></div>
          <div className="absolute left-[28px] md:left-[50%] top-0 bottom-0 w-[2px] overflow-hidden md:-translate-x-1/2">
             <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-beam"></div>
          </div>

          <div className="space-y-16">
            {EXPERIENCE.map((job, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node (Center) */}
                <div className="absolute left-[28px] md:left-[50%] top-0 md:-translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-14 h-14 rounded-full bg-[#020617] border-4 border-slate-800 flex items-center justify-center shadow-xl group hover:border-emerald-500 transition-colors duration-500">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 group-hover:animate-ping"></div>
                    </div>
                </div>

                {/* Content Card Side */}
                <div className="w-full md:w-[50%] pl-20 md:pl-0 md:px-12">
                   <div className={`group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)] ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                      
                      {/* Connector Line (Desktop) */}
                      <div className={`hidden md:block absolute top-7 w-12 h-[2px] bg-slate-800 group-hover:bg-emerald-500/50 transition-colors ${index % 2 === 0 ? '-left-12' : '-right-12'}`}></div>

                      <div className={`flex flex-col gap-2 mb-6 ${index % 2 === 0 ? 'items-start' : 'md:items-end'}`}>
                         <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">{job.role}</h3>
                         <h4 className="text-xl text-slate-400 font-medium">{job.company}</h4>
                         <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-lg border border-slate-700/50 text-sm font-mono text-emerald-400 mt-2">
                            <Calendar className="w-3.5 h-3.5" />
                            {job.period}
                         </div>
                      </div>

                      <ul className={`space-y-3 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                        {job.description.map((desc, i) => (
                          <li key={i} className={`text-slate-300 leading-relaxed text-sm flex gap-3 ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'}`}>
                            <div className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors"></div>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
                
                {/* Empty Side for Balance */}
                <div className="w-full md:w-[50%] hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;