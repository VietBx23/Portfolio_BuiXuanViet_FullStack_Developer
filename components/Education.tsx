import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950 border-t border-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-700">
                <GraduationCap className="w-64 h-64 text-white" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-5 rounded-2xl border border-emerald-500/20">
                    <GraduationCap className="w-12 h-12 text-emerald-400" />
                </div>
                
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{EDUCATION.school}</h3>
                    <p className="text-lg text-emerald-400 font-medium mb-1">{EDUCATION.major}</p>
                    <p className="text-slate-400 font-mono text-sm">{EDUCATION.period}</p>
                </div>

                <div className="bg-slate-950/50 px-6 py-4 rounded-xl border border-slate-700 group-hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-slate-400 text-xs uppercase tracking-wider font-bold">GPA Score</span>
                    </div>
                    <div className="text-3xl font-extrabold text-white tracking-tight">{EDUCATION.gpa}</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;