import React, { useRef, useState, useMemo } from 'react';
import { Github, Smartphone, Monitor, ArrowUpRight, Lock, ExternalLink, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';
import { LinkData } from '../types';
import RevealOnScroll from './RevealOnScroll';

// --- 3D Tilt Wrapper ---
const ProjectCard3D: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        // Limit rotation for subtle effect
        const rotateY = xPct * 3; 
        const rotateX = yPct * -3;
        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`perspective-1000 ${className}`}
            style={{ perspective: '1000px' }}
        >
            <div
                className="transition-transform duration-500 ease-out transform-style-3d w-full h-full"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.01 : 1})`,
                    transformStyle: 'preserve-3d',
                }}
            >
                {children}
            </div>
        </div>
    );
};

// --- Wireframe Components ---
// Kept wireframes dark as they represent "screens" which look better dark in portfolios

// 1. Mobile App Wireframe (iPhone Style)
const MobileWireframe = () => (
    <div className="relative w-[150px] h-[300px] bg-[#0a0f1c] rounded-[2.5rem] border-[6px] border-[#1e293b] shadow-2xl transform rotate-[-6deg] group-hover:rotate-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-30 flex items-center justify-center gap-1.5">
         <div className="w-1 h-1 rounded-full bg-slate-800"></div>
         <div className="w-1 h-1 rounded-full bg-emerald-500/50"></div>
      </div>
      
      {/* Screen */}
      <div className="w-full h-full bg-[#0f172a] rounded-[2.2rem] overflow-hidden flex flex-col relative">
          {/* Header Map/Gradient */}
          <div className="h-24 bg-gradient-to-br from-emerald-900/40 to-slate-900 relative overflow-hidden border-b border-white/5">
             <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px] opacity-20"></div>
             {/* Abstract Map Pin */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399]"></div>
             </div>
          </div>
          
          {/* App List Content */}
          <div className="p-3 space-y-2 flex-1 bg-slate-900/50">
             {[1, 2, 3].map((i) => (
                 <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i===1 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-600'}`}>
                        <div className="w-4 h-4 rounded-sm bg-current opacity-50"></div>
                    </div>
                    <div className="space-y-1.5 flex-1">
                       <div className="w-16 h-1.5 bg-slate-600/50 rounded-full"></div>
                       <div className="w-24 h-1.5 bg-slate-700/30 rounded-full"></div>
                    </div>
                 </div>
             ))}
             {/* Chart */}
             <div className="mt-auto h-20 rounded-xl bg-white/5 border border-white/5 flex items-end justify-between px-3 pb-2 pt-3 gap-1">
                 {[40, 70, 50, 90, 30, 80].map((h, i) => (
                     <div key={i} className="w-full bg-emerald-500/40 rounded-t-sm" style={{height: `${h}%`}}></div>
                 ))}
             </div>
          </div>

          {/* Bottom Nav */}
          <div className="h-14 border-t border-white/5 bg-[#0a0f1c] flex items-center justify-around px-2">
             {[1,2,3,4].map(i => <div key={i} className="w-10 h-1 rounded-full bg-slate-800"></div>)}
          </div>
      </div>
      
      {/* Reflection */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none rounded-r-[2.5rem]"></div>
    </div>
);

// 2. Dashboard Wireframe (Browser Style)
const BrowserWireframe = ({ type }: { type: string }) => {
    const isEcommerce = type.toLowerCase().includes('sneaker') || type.toLowerCase().includes('shop');
    
    return (
        <div className="w-[90%] aspect-[16/10] bg-[#0f172a] rounded-xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 relative z-10 mx-auto">
            {/* Browser Bar */}
            <div className="h-8 bg-[#1e293b] border-b border-slate-700 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="ml-4 flex-1 h-5 bg-slate-800/50 rounded-md text-[9px] flex items-center px-3 text-slate-500 font-mono">
                    https://{type.toLowerCase().replace(/\s/g, '')}.com
                </div>
            </div>

            {/* Window Content */}
            <div className="flex-1 flex relative">
                 {/* Sidebar */}
                <div className="w-14 bg-slate-900/50 border-r border-slate-800 hidden sm:flex flex-col items-center py-4 gap-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 mb-2 border border-emerald-500/20"></div>
                    {[1,2,3,4].map(i => <div key={i} className="w-5 h-5 rounded bg-slate-800/80"></div>)}
                </div>

                {/* Main Area */}
                <div className="flex-1 p-4 bg-slate-950 relative overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    {isEcommerce ? (
                        // E-commerce Layout
                        <div className="relative z-10 space-y-4">
                             {/* Hero Banner */}
                             <div className="w-full h-28 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-800/50 p-4 flex flex-col justify-center relative overflow-hidden">
                                 <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-emerald-500/10 to-transparent"></div>
                                 <div className="w-1/3 h-3 bg-slate-700 rounded mb-2"></div>
                                 <div className="w-1/2 h-2 bg-slate-800 rounded"></div>
                                 <div className="mt-3 px-3 py-1 bg-emerald-500 text-slate-900 font-bold w-fit rounded text-[9px]">Shop Collection</div>
                             </div>

                             <div className="grid grid-cols-3 gap-3">
                                 {[1,2,3].map(i => (
                                     <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/80 flex flex-col p-2 gap-2">
                                         <div className="aspect-square rounded-lg bg-slate-800/50 relative overflow-hidden group/item">
                                              <div className="absolute inset-0 bg-slate-800"></div>
                                              <div className="absolute inset-2 bg-slate-700/30 rounded"></div>
                                         </div>
                                         <div className="h-2 w-3/4 bg-slate-700/50 rounded"></div>
                                         <div className="h-2 w-1/2 bg-emerald-500/30 rounded"></div>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    ) : (
                        // Admin Dashboard Layout
                        <div className="relative z-10 space-y-4">
                             <div className="grid grid-cols-3 gap-4">
                                 {[1,2,3].map(i => (
                                     <div key={i} className="h-24 rounded-xl border border-slate-800 bg-slate-900/80 p-4 flex flex-col justify-between relative overflow-hidden">
                                         <div className="absolute top-0 right-0 p-2 opacity-20">
                                            <div className="w-8 h-8 rounded-full bg-white"></div>
                                         </div>
                                         <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700"></div>
                                         <div className="space-y-1.5">
                                            <div className="h-2 w-16 bg-slate-700/50 rounded"></div>
                                            <div className="h-3 w-10 bg-emerald-500/40 rounded"></div>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                             {/* Table/Chart */}
                             <div className="w-full h-40 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                                 <div className="flex items-end justify-between h-full gap-3 px-2 pb-1">
                                     {[35, 60, 45, 80, 50, 75, 60, 90, 55, 70].map((h, i) => (
                                         <div key={i} className="w-full bg-gradient-to-t from-emerald-500/20 to-emerald-500/50 border-t border-emerald-400/50 rounded-t-sm relative group/bar" style={{height: `${h}%`}}>
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-emerald-400 opacity-0 group-hover/bar:opacity-100 transition-opacity">{h}%</div>
                                         </div>
                                     ))}
                                 </div>
                             </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
        </div>
    );
};


const Projects: React.FC = () => {
  // Meteors for Project section (sparse)
  const meteors = useMemo(() => new Array(6).fill(true).map((_, idx) => ({
    left: Math.floor(Math.random() * 100) + '%',
    top: Math.floor(Math.random() * 80) + '%', 
    delay: Math.random() * 3 + 's',
    duration: Math.floor(Math.random() * 6 + 6) + 's',
  })), []);

  const renderLinkIcon = (type: LinkData['type']) => {
    switch (type) {
      case 'github': return <Github className="h-4 w-4" />;
      case 'android': return <Smartphone className="h-4 w-4" />;
      case 'ios': return <Smartphone className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const getVisual = (title: string, index: number) => {
    const isMobile = title.toLowerCase().includes('mobile') || title.toLowerCase().includes('app');
    
    return (
        <div className="w-full h-full bg-[#050914] flex items-center justify-center relative overflow-hidden group-hover:bg-[#080d1a] transition-colors duration-500">
             {/* 1. Perspective Grid Background */}
             <div className="absolute inset-0 perspective-[500px]">
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] origin-top opacity-30"></div>
             </div>
             
             {/* 2. Ambient Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700"></div>
             
             {/* 3. Tech Deco Lines */}
             <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                 <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white"></div>
                 <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white"></div>
                 <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white"></div>
                 <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white"></div>
             </div>

             {/* 4. Wireframe */}
             <div className="transform scale-100 transition-transform duration-500 relative z-20">
                {isMobile ? <MobileWireframe /> : <BrowserWireframe type={title} />}
             </div>
        </div>
    );
  };

  return (
    <section id="projects" className="py-32 relative bg-transparent overflow-hidden">
      {/* Meteor Layer - Specific to Projects (Hidden in Light Mode) */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none overflow-hidden z-0">
          {meteors.map((meteor, idx) => (
            <span
              key={`proj-meteor-${idx}`}
              className="absolute h-[1px] w-[80px] bg-gradient-to-r from-slate-200 to-transparent rotate-[215deg] animate-meteor opacity-0"
              style={{
                left: meteor.left,
                top: meteor.top,
                animationDelay: meteor.delay,
                animationDuration: meteor.duration,
              }}
            >
              <span className="absolute top-1/2 -translate-y-1/2 left-0 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]"></span>
              <span className="absolute top-1/2 -translate-y-1/2 left-0 w-[40px] h-[1px] bg-emerald-400/30 blur-[1px]"></span>
            </span>
          ))}
      </div>

      {/* Global Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24">
        <RevealOnScroll direction="bottom">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800/50 pb-8">
                <div>
                    <h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                         <Layers className="w-4 h-4" />
                         Engineering
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 animate-shimmer bg-[length:200%_100%]">Works</span>
                    </h3>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs ml-auto leading-relaxed">
                        A curated selection of scalable systems, complex integrations, and user-centric applications.
                    </p>
                </div>
            </div>
        </RevealOnScroll>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 50} direction="bottom">
                <div className="group relative">
                    {/* Giant Number Background */}
                    <div className={`absolute top-0 -translate-y-1/2 text-[15rem] leading-none font-black text-slate-200/50 dark:text-slate-800/20 select-none z-0 pointer-events-none transition-all duration-700 group-hover:text-slate-300/50 dark:group-hover:text-slate-800/40 ${index % 2 === 0 ? '-left-20' : '-right-20'}`}>
                        0{index + 1}
                    </div>

                    <div className={`relative z-10 flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                        
                        {/* Visual Side */}
                        <div className="w-full lg:w-[60%] perspective-1000">
                             <ProjectCard3D>
                                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#050914] shadow-2xl dark:shadow-black/50 group-hover:shadow-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-500 aspect-video">
                                    {getVisual(project.title, index)}
                                    
                                    {/* Glass Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                             </ProjectCard3D>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-[40%] relative">
                            {/* Decoration Line */}
                            <div className="w-12 h-1 bg-emerald-500 mb-6"></div>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                                    {project.period}
                                </span>
                                {index === 0 && (
                                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 animate-pulse">
                                        Latest Build
                                    </span>
                                )}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Tech Stack Pills */}
                            <div className="mb-10">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-300 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] transition-all cursor-default backdrop-blur-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Links */}
                            <div className="flex flex-wrap gap-4">
                                {project.links.length > 0 ? (
                                    project.links.map((link, i) => (
                                    <a 
                                        key={i} 
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 font-bold text-sm transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20 overflow-hidden group/btn"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-300 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                                        <span className="relative flex items-center gap-2">
                                            {renderLinkIcon(link.type)}
                                            {link.label}
                                            <ArrowUpRight className="w-4 h-4 opacity-50 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </span>
                                    </a>
                                    ))
                                ) : (
                                    <span className="inline-flex items-center text-slate-500 text-sm font-medium px-6 py-3 border border-dashed border-slate-300 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50 cursor-not-allowed">
                                        <Lock className="w-4 h-4 mr-2" />
                                        Private Project
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
          ))}
      </div>
    </section>
  );
};

export default Projects;