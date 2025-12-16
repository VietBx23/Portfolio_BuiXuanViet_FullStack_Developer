import React from 'react';
import { Github, ExternalLink, Smartphone, Layers, Lock } from 'lucide-react';
import { PROJECTS } from '../constants';
import { LinkData } from '../types';
import RevealOnScroll from './RevealOnScroll';

const Projects: React.FC = () => {
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const renderLinkIcon = (type: LinkData['type']) => {
    switch (type) {
      case 'github': return <Github className="h-4 w-4 mr-2" />;
      case 'android': return <Smartphone className="h-4 w-4 mr-2" />;
      case 'ios': return <Smartphone className="h-4 w-4 mr-2" />;
      default: return <ExternalLink className="h-4 w-4 mr-2" />;
    }
  };

  // --- New Premium Visual Components ---

  const MobileMockup = () => (
    <div className="relative w-[160px] h-[320px] bg-slate-950 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl transform rotate-[-5deg] group-hover:rotate-0 transition-all duration-500 ease-out z-20">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-20"></div>
      
      {/* Screen Content */}
      <div className="w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden relative">
          {/* Header Gradient */}
          <div className="h-24 bg-gradient-to-br from-emerald-500/20 to-blue-600/20 w-full relative">
             <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md"></div>
             <div className="absolute bottom-4 right-4 w-24 h-4 rounded-full bg-white/10 backdrop-blur-md"></div>
          </div>
          
          {/* App Body */}
          <div className="p-4 space-y-3">
             <div className="w-full h-16 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center px-3 gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20"></div>
                <div className="flex-1 space-y-1">
                   <div className="w-3/4 h-2 bg-slate-700 rounded-full"></div>
                   <div className="w-1/2 h-2 bg-slate-700/50 rounded-full"></div>
                </div>
             </div>
             <div className="w-full h-16 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center px-3 gap-3 opacity-60">
                <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                <div className="flex-1 space-y-1">
                   <div className="w-2/3 h-2 bg-slate-700 rounded-full"></div>
                </div>
             </div>
             {/* Map/Chart Area */}
             <div className="w-full h-24 rounded-xl bg-slate-800/30 border border-slate-700/30 mt-2 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent"></div>
             </div>
          </div>

          {/* Floating Action Button */}
          <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40 flex items-center justify-center">
             <div className="w-4 h-4 text-slate-900 font-bold">+</div>
          </div>
      </div>
    </div>
  );

  const DashboardMockup = () => (
    <div className="w-full h-full flex items-center justify-center relative p-6">
       {/* Main Window */}
       <div className="w-full aspect-[16/10] bg-[#0f172a]/90 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-2xl relative z-10 flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
          {/* Window Bar */}
          <div className="h-8 bg-slate-800/50 border-b border-slate-700/50 flex items-center px-4 gap-2">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>

          {/* Dashboard Layout */}
          <div className="flex-1 p-4 flex gap-4">
             {/* Sidebar */}
             <div className="w-16 hidden sm:flex flex-col gap-3 border-r border-slate-700/30 pr-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20"></div>
                <div className="w-full h-[1px] bg-slate-700/50 my-1"></div>
                <div className="w-6 h-6 rounded bg-slate-800"></div>
                <div className="w-6 h-6 rounded bg-slate-800/50"></div>
                <div className="w-6 h-6 rounded bg-slate-800/50"></div>
             </div>

             {/* Main Content */}
             <div className="flex-1 flex flex-col gap-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                   <div className="h-16 rounded-lg bg-slate-800/40 border border-slate-700/30 p-2 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500"></div>
                   </div>
                   <div className="h-16 rounded-lg bg-slate-800/40 border border-slate-700/30 p-2 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
                   </div>
                   <div className="h-16 rounded-lg bg-slate-800/40 border border-slate-700/30 p-2 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></div>
                   </div>
                </div>
                
                {/* Chart Area */}
                <div className="flex-1 rounded-lg bg-slate-800/30 border border-slate-700/30 flex items-end justify-between p-4 gap-2">
                    {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                       <div key={i} className="flex-1 bg-slate-700/50 rounded-t-sm hover:bg-emerald-500/50 transition-colors duration-300" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
             </div>
          </div>
       </div>

       {/* Floating Background Card (Decoration) */}
       <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/30 -z-0"></div>
    </div>
  );

  const getProjectVisual = (title: string, index: number) => {
    const isMobile = title.toLowerCase().includes('mobile') || title.toLowerCase().includes('app');
    
    return (
        <div className="w-full h-full bg-slate-950/40 flex items-center justify-center relative overflow-hidden border-l border-slate-800/50 group-hover:bg-slate-900/40 transition-colors duration-500">
             {/* Animated Grid Background */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
             
             {/* Holographic Glow Spot */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700"></div>

             {isMobile ? <MobileMockup /> : <DashboardMockup />}
        </div>
    );
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-6">
          <div className="max-w-2xl">
              <RevealOnScroll direction="bottom">
                <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm font-bold tracking-wider uppercase mb-4">
                    <span className="w-8 h-[2px] bg-emerald-500"></span>
                    Selected Works
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={200} direction="bottom">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Projects</span>
                </h2>
              </RevealOnScroll>
          </div>
          <div className="hidden md:block">
             <RevealOnScroll delay={300} direction="left">
                <p className="text-slate-400 text-right max-w-sm leading-relaxed">
                    Deep dive into my key projects, showcasing backend architecture and full-stack capabilities.
                </p>
             </RevealOnScroll>
          </div>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 100} direction="bottom">
                <div 
                onMouseMove={handleMouseMove}
                className="group relative"
                >
                {/* Background Numbering */}
                <div className="absolute -top-20 -left-10 text-[12rem] font-black text-slate-800/20 select-none z-0">
                    0{index + 1}
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                    
                    {/* Visual Frame */}
                    <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/30 aspect-[16/10] shadow-2xl group-hover:border-emerald-500/30 transition-colors duration-500 backdrop-blur-sm">
                            {getProjectVisual(project.title, index)}
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1 lg:pr-12' : 'lg:order-2 lg:pl-12'}`}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-emerald-400 font-mono text-xs font-bold px-2 py-1 rounded bg-emerald-950/30 border border-emerald-500/20 uppercase tracking-wider shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                {project.period}
                            </span>
                            {index === 0 && (
                                <span className="flex items-center gap-1.5 text-blue-400 font-mono text-xs font-bold px-2 py-1 rounded bg-blue-950/30 border border-blue-500/20 uppercase tracking-wider shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                    <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    Latest
                                </span>
                            )}
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                            {project.title}
                        </h3>
                        
                        <div className="relative mb-8">
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 to-transparent"></div>
                            <p className="text-slate-300 text-lg leading-relaxed pl-6">
                                {project.description}
                            </p>
                        </div>

                        <div className="mb-8 bg-slate-900/40 p-5 rounded-xl border border-slate-800/50">
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Layers className="w-4 h-4" /> Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1.5 bg-slate-950 text-slate-300 text-xs font-bold font-mono rounded border border-slate-800 hover:text-emerald-300 hover:border-emerald-500/30 transition-all cursor-default">
                                    {t}
                                </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {project.links.length > 0 ? (
                                project.links.map((link, i) => (
                                <a 
                                    key={i} 
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-950 hover:bg-emerald-400 font-bold text-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-white/5 hover:shadow-emerald-400/20 overflow-hidden relative"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                    {renderLinkIcon(link.type)}
                                    {link.label}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                                </a>
                                ))
                            ) : (
                                <span className="inline-flex items-center text-slate-500 text-sm font-medium px-5 py-3 border border-dashed border-slate-700 rounded-lg bg-slate-900/50 cursor-not-allowed">
                                    <Lock className="w-4 h-4 mr-2" />
                                    Private Internal System
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;