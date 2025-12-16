import React from 'react';
import { Target, Rocket, User, MapPin, Coffee, Code } from 'lucide-react';
import { SUMMARY, CAREER_GOALS, PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-slate-900/50 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Summary Block - Spans 2 cols */}
          <div className="md:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <User className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
             </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              {SUMMARY}
            </p>
          </div>

          {/* Location & Status */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300">
             <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white">Location</h3>
                </div>
                <p className="text-slate-300 text-lg">{PERSONAL_INFO.location}</p>
             </div>
             <div className="mt-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Open to Work
                </div>
             </div>
          </div>

          {/* Goals Block - Spans 3 cols on mobile, 3 on desktop */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300 group">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Target className="h-5 w-5 text-blue-400" />
                </div>
                Short-term Goals
              </h4>
              <p className="text-slate-400 leading-relaxed">
                {CAREER_GOALS.shortTerm}
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-300 group">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <Rocket className="h-5 w-5 text-purple-400" />
                </div>
                Long-term Goals
              </h4>
              <p className="text-slate-400 leading-relaxed">
                {CAREER_GOALS.longTerm}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;