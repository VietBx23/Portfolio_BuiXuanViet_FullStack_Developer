import React from 'react';
import { MapPin, Github, ArrowRight, Terminal, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1] animate-fade-in-up delay-100">
              Building the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-shimmer bg-[length:200%_100%]">
                Backend Future.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
              I am <strong className="text-slate-200">Bui Xuan Viet</strong>, a Fullstack Engineer specializing in scalable <strong className="text-emerald-400">.NET</strong> & <strong className="text-emerald-400">Java</strong> architectures. I transform complex business logic into high-performance code.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-fade-in-up delay-300">
              <a href="#projects" className="group relative px-8 py-3.5 bg-emerald-500 text-slate-950 font-bold rounded-lg overflow-hidden transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center">
                  View Projects 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#contact" className="px-8 py-3.5 bg-slate-900 text-white font-medium rounded-lg border border-slate-800 hover:border-slate-600 transition-all hover:bg-slate-800">
                Contact Me
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium animate-fade-in-up delay-500 border-t border-slate-800/50 pt-8 mt-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-500" />
                {PERSONAL_INFO.location}
              </div>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Github className="h-4 w-4 text-emerald-500" />
                github.com/VietBx23 <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Modern Card */}
          <div className="hidden lg:block lg:col-span-5 relative perspective-1000 animate-fade-in-up delay-300">
             {/* Abstract Decorations */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>

             <div className="relative rounded-2xl bg-[#13141f] border border-slate-800 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 group">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#1a1b26] border-b border-slate-800">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-600 group-hover:bg-red-500 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-600 group-hover:bg-yellow-500 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-600 group-hover:bg-green-500 transition-colors"></div>
                   </div>
                   <div className="text-xs text-slate-500 font-mono">system_architect.cs</div>
                </div>

                {/* Content */}
                <div className="p-6 font-mono text-sm leading-7">
                  <div className="flex">
                    <span className="text-slate-700 w-8 select-none">1</span>
                    <span className="text-purple-400">public class</span> <span className="text-yellow-200">Developer</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-700 w-8 select-none">2</span>
                    <span className="text-slate-400">{`{`}</span>
                  </div>
                  <div className="flex">
                     <span className="text-slate-700 w-8 select-none">3</span>
                     <span className="pl-4 text-purple-400">public</span> <span className="text-blue-400">string</span> Name {`=>`} <span className="text-green-400">"Viet Bui"</span>;
                  </div>
                  <div className="flex">
                     <span className="text-slate-700 w-8 select-none">4</span>
                     <span className="pl-4 text-purple-400">public</span> <span className="text-blue-400">string[]</span> Stack {`=>`} <span className="text-purple-400">new</span>[]
                  </div>
                  <div className="flex">
                     <span className="text-slate-700 w-8 select-none">5</span>
                     <span className="pl-4 text-slate-400">{`{`}</span>
                  </div>
                  <div className="flex group/line">
                     <span className="text-slate-700 w-8 select-none group-hover/line:text-slate-500">6</span>
                     <span className="pl-8 text-orange-300">".NET Core"</span>, <span className="text-orange-300">"Java Spring"</span>,
                  </div>
                  <div className="flex group/line">
                     <span className="text-slate-700 w-8 select-none group-hover/line:text-slate-500">7</span>
                     <span className="pl-8 text-orange-300">"React"</span>, <span className="text-orange-300">"Cloud Architecture"</span>
                  </div>
                  <div className="flex">
                     <span className="text-slate-700 w-8 select-none">8</span>
                     <span className="pl-4 text-slate-400">{`};`}</span>
                  </div>
                  <div className="flex">
                     <span className="text-slate-700 w-8 select-none">9</span>
                     <span className="pl-4 text-slate-500">// Ready for production</span>
                  </div>
                  <div className="flex">
                     <span className="text-slate-700 w-8 select-none">10</span>
                     <span className="text-slate-400">{`}`}</span> <span className="animate-pulse w-2 h-5 bg-emerald-500 inline-block align-middle ml-1"></span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;