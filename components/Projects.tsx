import React from 'react';
import { Github, ExternalLink, Smartphone, Server } from 'lucide-react';
import { PROJECTS } from '../constants';
import { LinkData } from '../types';

const Projects: React.FC = () => {
  
  const renderLinkIcon = (type: LinkData['type']) => {
    switch (type) {
      case 'github': return <Github className="h-4 w-4 mr-2" />;
      case 'android': return <Smartphone className="h-4 w-4 mr-2" />;
      case 'ios': return <Smartphone className="h-4 w-4 mr-2" />;
      default: return <ExternalLink className="h-4 w-4 mr-2" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className={`group flex flex-col bg-slate-900/40 border border-slate-800/60 rounded-3xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10 ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="p-8 flex flex-col h-full relative">
                {/* Decoration Gradient */}
                <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                     <div>
                       <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                        {index === 0 && (
                            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Featured
                            </span>
                        )}
                       </div>
                       <p className="text-slate-500 text-sm mt-1 font-mono">{project.period}</p>
                     </div>
                  </div>

                  <p className="text-slate-300 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-[#1a1c2e] text-slate-300 text-xs font-medium rounded-full border border-slate-700/50">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-800/50">
                      {project.links.length > 0 ? (
                         project.links.map((link, i) => (
                          <a 
                            key={i} 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-emerald-500 hover:text-slate-900 font-medium text-sm transition-all duration-200"
                          >
                            {renderLinkIcon(link.type)}
                            {link.label}
                          </a>
                        ))
                      ) : (
                        <span className="text-slate-500 text-sm italic">Internal Enterprise Project</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;