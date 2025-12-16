import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden hover:border-emerald-500/30 transition-colors duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <GraduationCap className="w-64 h-64 text-white" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="bg-emerald-500/10 p-4 rounded-xl">
                    <GraduationCap className="w-10 h-10 text-emerald-400" />
                </div>
                
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{EDUCATION.school}</h3>
                    <p className="text-lg text-emerald-400 font-medium mb-1">{EDUCATION.major}</p>
                    <p className="text-slate-400">{EDUCATION.period}</p>
                </div>

                <div className="bg-slate-900 px-6 py-4 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-2 mb-1">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span className="text-slate-400 text-sm uppercase tracking-wide">GPA</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{EDUCATION.gpa}</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;