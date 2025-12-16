import React from 'react';
import { Target, Rocket, User } from 'lucide-react';
import { SUMMARY, CAREER_GOALS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who Am I?</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 relative hover:border-emerald-500/30 transition-all duration-300">
             <div className="absolute top-6 right-6 p-3 bg-emerald-500/10 rounded-xl">
                <Rocket className="h-6 w-6 text-emerald-400" />
             </div>
            <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              {SUMMARY}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/30 transition-all flex-1">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <Target className="h-5 w-5 text-emerald-400 mr-3" />
                Short-term Goals
              </h4>
              <p className="text-slate-400">
                {CAREER_GOALS.shortTerm}
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all flex-1">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <Target className="h-5 w-5 text-blue-400 mr-3" />
                Long-term Goals
              </h4>
              <p className="text-slate-400">
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