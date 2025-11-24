import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, ArrowRight, ExternalLink, Zap, Code2, Database, Layout } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "SolarEV Mobile App",
    description: "A comprehensive cross-platform mobile solution for EV charging. Users can locate stations, scan QR codes to charge, and manage payments via VNPay. Built with high performance and scalability in mind.",
    tags: ["React Native", "TypeScript", "Google Maps", "Firebase"],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/VietBx23/APP-SOLAREV"
  },
  {
    id: 2,
    title: "EV Charging Platform",
    description: "Enterprise-level management system for EV stations. Features real-time WebSocket monitoring, SignalR communication, and detailed revenue analytics dashboard.",
    tags: [".NET Core", "C#", "SQL Server", "SignalR", "WebSocket"],
    image: "https://images.unsplash.com/photo-1669046604617-64906f23512b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/VietBx23"
  },
  {
    id: 3,
    title: "Shoe Management System",
    description: "Robust desktop application optimized for retail. Includes inventory tracking, QR code product scanning, employee management, and automated invoicing.",
    tags: ["Java", "Swing", "JDBC", "SQL Server"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/VietBx23/ShoeManagementApp"
  },
  {
    id: 4,
    title: "Sneakers E-Commerce",
    description: "Full-stack e-commerce platform with a Spring Boot backend. Features include secure cart management, voucher system, user reviews, and an extensive admin panel.",
    tags: ["Spring Boot", "AngularJS", "MySQL", "Spring Security"],
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/VietBx23/WebsiteSneaker"
  }
];

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [15, -15]); // Less tilt for larger cards
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  
    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
      const rect = event.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct * width); 
      y.set(yPct * height);
    }
  
    function handleMouseLeave() {
      x.set(0);
      y.set(0);
    }
  
    return (
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        <div style={{ transform: "translateZ(30px)" }} className="h-full">
          {children}
        </div>
      </motion.div>
    );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <TiltCard className="h-full">
            <div className="group relative rounded-3xl bg-[#0f172a] border border-white/10 overflow-hidden flex flex-col h-full hover:border-cyan-500/30 transition-all duration-500 shadow-xl">
            
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-80" />
                <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover origin-center transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 transition-colors border border-white/10"
                >
                    <Github size={20} />
                </a>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow relative z-20 bg-[#0f172a]/40 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow border-l-2 border-white/10 pl-4 group-hover:border-cyan-500 transition-colors">
                {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1.5 bg-white/5 text-cyan-200 border border-white/10 rounded-lg font-medium tracking-wide">
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            </div>
        </TiltCard>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm border-b-2 border-cyan-500 pb-1">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span></h2>
          </motion.div>
          
          <motion.a 
            href="https://github.com/VietBx23" 
            target="_blank" 
            rel="noreferrer" 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-full border border-white/5 hover:bg-white/5 hover:border-cyan-500/30"
          >
            View all GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;