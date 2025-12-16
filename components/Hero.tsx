import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Github, ArrowRight, Server, Database, Globe, ChevronRight, Globe2, Laptop, Radio, Zap, LayoutTemplate } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

// --- Text Decrypt Effect Component ---
const TextDecrypt: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

const TechMarquee = () => {
  // Helper to determine if icon is a string (URL) or Component
  const isUrl = (icon: any): icon is string => typeof icon === 'string';

  const techStack = [
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "RESTful API", icon: Globe },
    { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "SignalR", icon: Radio },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "WebSockets", icon: Zap },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "JSP/Servlet", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
  ];

  const renderItem = (tech: any, index: number | string) => (
    <li key={index} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300 cursor-default group mx-4 md:mx-6 shrink-0">
      <div className="w-6 h-6 flex items-center justify-center transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
        {isUrl(tech.icon) ? (
          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
        ) : (
          <tech.icon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400" />
        )}
      </div>
      <span className="text-sm md:text-base font-bold text-slate-500 font-mono group-hover:text-emerald-100 transition-colors whitespace-nowrap">
        {tech.name}
      </span>
    </li>
  );

  return (
    <div className="w-full border-t border-slate-800/50 pt-8 mt-16 pb-8 bg-slate-950/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-10 pointer-events-none"></div>
      
      <div className="flex overflow-hidden select-none">
        {/* Added shrink-0 to prevent flex items from collapsing and overlapping */}
        <ul className="flex items-center justify-center md:justify-start animate-marquee min-w-full shrink-0">
          {techStack.map((tech, index) => renderItem(tech, index))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start animate-marquee min-w-full shrink-0" aria-hidden="true">
          {techStack.map((tech, index) => renderItem(tech, `dup-${index}`))}
        </ul>
      </div>
    </div>
  );
};

const TypewriterCode = () => {
  const [lines, setLines] = useState<string[]>(Array(12).fill(""));
  
  // Compacted code lines to fit within the container
  const codeLines = [
    'public class FullStackProfile : IOpenToWork',
    '{',
    '    public string Name = "Bui Xuan Viet";',
    '    public string Role = "Full Stack Developer";',
    '',
    '    public string[] Backend = { ".NET Core", "Spring Boot", "SQL", "Node.js" };',
    '    public string[] Frontend = { "ReactJS", "Angular", "JSP", "Tailwind" };',
    '    public string[] Mobile = { "React Native", "Expo", "Android" };',
    '    public string[] Tools = { "WordPress", "CMS Dev", "Docker", "SEO" };',
    '}'
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeWriter = () => {
      if (currentLine < codeLines.length) {
        if (currentChar <= codeLines[currentLine].length) {
          setLines(prev => {
            const newLines = [...prev];
            newLines[currentLine] = codeLines[currentLine].substring(0, currentChar);
            return newLines;
          });
          currentChar++;
          timeoutId = setTimeout(typeWriter, 10 + Math.random() * 15); 
        } else {
          currentLine++;
          currentChar = 0;
          timeoutId = setTimeout(typeWriter, 100);
        }
      }
    };

    timeoutId = setTimeout(typeWriter, 800); 

    return () => clearTimeout(timeoutId);
  }, []);

  const renderCodeLine = (line: string) => {
    if (!line) return null;
    if (line.trim().startsWith('//')) return <span className="text-[#6a9955] italic">{line}</span>;

    // Split by quotes to handle strings
    const parts = line.split('"');
    return parts.map((part, i) => {
        if (i % 2 === 1) { 
            // Inside quotes
            return <span key={i} className="text-[#ce9178]">"{part}"</span>;
        }
        // Outside quotes - split by delimiters
        return part.split(/(\s+|[(){}=>;,:]|new\[\])/).map((subPart, j) => {
             if (!subPart.trim()) return <span key={`${i}-${j}`}>{subPart}</span>;
             
             let color = "text-slate-200";
             const word = subPart.trim();
             
             if (["public", "class", "new[]", "new", "return", "get", "set", ":"].includes(word)) color = "text-[#ff7b72]"; // Keywords
             else if (["string", "string[]", "FullStackProfile", "IOpenToWork"].includes(word)) color = "text-[#4ec9b0]"; // Types
             else if (["Name", "Role", "Backend", "Frontend", "Mobile", "Tools", "Others"].includes(word)) color = "text-[#9cdcfe]"; // Properties
             else if (["=>", "{", "}", "="].includes(word)) color = "text-[#d4d4d4]"; // Symbols
             
             return <span key={`${i}-${j}`} className={color}>{subPart}</span>;
        });
    });
  };

  return (
    <div className="p-4 md:p-5 font-mono text-xs md:text-[13px] leading-6 md:leading-7 bg-[#0d1117] min-h-[340px] h-full overflow-hidden">
      {lines.map((line, index) => (
        <div key={index} className="flex items-start hover:bg-slate-800/30 -mx-4 px-4 md:-mx-5 md:px-5 transition-colors group min-h-[1.6rem]">
            <span className="shrink-0 text-slate-700 w-6 md:w-8 select-none text-right pr-3 md:pr-4 border-r border-slate-800/50 mr-3 md:mr-4 font-mono group-hover:text-slate-500 transition-colors text-[10px] md:text-xs py-1 mt-0.5">{index + 1}</span>
            <span className={`flex-1 min-w-0 ${index === lines.length - 1 || (lines[index] !== codeLines[index]) ? 'typewriter-cursor' : ''} whitespace-pre-wrap break-words`}>
               {renderCodeLine(line)}
            </span>
        </div>
      ))}
    </div>
  );
};


const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5; 
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative pt-32 lg:pt-48 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 -translate-x-1/2 translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12">
        {/* Adjusted grid layout: 5-7 split for maximum code editor width */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Personal Info */}
          <div className="lg:col-span-5 text-center lg:text-left mb-16 lg:mb-0">
            
            {/* Status Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                {/* Available Badge */}
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md hover:border-emerald-500/50 transition-all cursor-default shadow-lg shadow-emerald-500/5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-slate-300 text-xs font-bold tracking-wide uppercase">Open to Work</span>
                </div>

                {/* Remote Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-wide">
                    <Globe2 className="w-3.5 h-3.5" />
                    Remote
                </div>

                {/* Hybrid Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md text-purple-400 text-xs font-bold uppercase tracking-wide">
                    <Laptop className="w-3.5 h-3.5" />
                    Hybrid
                </div>
            </div>
            
            {/* Main Title Area */}
            <div className="mb-8 relative">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1] mb-2 drop-shadow-2xl">
                  BUI XUAN
                </h1>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1]">
                  {/* Enhanced Gradient Effect */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-[size:200%_auto] animate-shimmer drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    VIET
                  </span>
                </h1>
                
                {/* Background Decoration Text */}
                <div className="absolute -top-12 -left-12 text-[12rem] font-black text-slate-800/10 -z-10 select-none hidden lg:block pointer-events-none">
                    DEV
                </div>
            </div>

            {/* Subtitle / Role */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
               <div className="h-[2px] w-12 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
               <h2 className="text-xl md:text-2xl font-bold text-slate-300 font-mono tracking-tight flex gap-2">
                  <TextDecrypt text="FULLSTACK DEVELOPER" className="text-emerald-400" />
               </h2>
            </div>
            
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
               I’m <span className="text-white font-semibold">Bui Xuan Viet</span>, a developer passionate about building <span className="text-emerald-400">reliable backend systems</span> and interactive applications. I specialize in .NET Core, Java Spring, and Fullstack web development.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12">
              <a href="#projects" className="group relative w-full sm:w-auto px-8 py-4 bg-emerald-500 text-slate-950 font-bold text-base rounded-lg overflow-hidden transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                {/* Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shimmer" />
                <span className="relative flex items-center justify-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <div className="flex gap-4 w-full sm:w-auto justify-center">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-4 bg-slate-900/50 backdrop-blur-md text-white rounded-lg border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all hover:-translate-y-1 group">
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  <span className="font-semibold text-slate-300 group-hover:text-white">GitHub</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-500 text-sm font-medium border-t border-slate-800/50 pt-6 inline-flex">
                <div className="p-1.5 rounded-full bg-slate-900 border border-slate-800">
                    <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                </div>
                {PERSONAL_INFO.location}
            </div>
          </div>
          
          {/* RIGHT COLUMN: 3D Code Window (Expanded) */}
          <div 
             className="lg:col-span-7 relative perspective-1000 hidden lg:block"
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
          >
             {/* Glows */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 blur-[80px] rounded-full -z-10"></div>

             <div 
               ref={cardRef}
               className="relative transition-transform duration-100 ease-out preserve-3d"
               style={{
                 transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                 transformStyle: 'preserve-3d'
               }}
             >
               <div className="relative rounded-xl bg-[#0d1117] border border-slate-700/50 shadow-2xl shadow-black/80 overflow-hidden">
                  {/* Glass Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
                      <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                      </div>
                      <div className="text-xs text-slate-500 font-mono font-bold flex items-center gap-2">
                          <Server className="w-3.5 h-3.5" />
                          FullStack_Profile.cs
                      </div>
                      <div className="w-10"></div> 
                  </div>

                  <TypewriterCode />
                  
                  {/* Bottom Info Bar */}
                  <div className="px-4 py-1.5 bg-[#161b22] border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                      <div className="flex gap-3">
                          <span className="flex items-center gap-1"><Database className="w-3 h-3"/> SQL/NoSQL</span>
                          <span className="flex items-center gap-1"><Globe className="w-3 h-3"/> REST API</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                         <span>Online</span>
                      </div>
                  </div>
               </div>
               
               {/* 3D Floating Badges */}
               <div 
                 className="absolute -top-5 -right-5 bg-slate-900/90 backdrop-blur-xl px-4 py-3 rounded-lg border border-slate-700 shadow-xl flex items-center gap-3 animate-float"
                 style={{ transform: 'translateZ(30px)' }}
               >
                  <div className="p-1.5 bg-blue-500/20 rounded-md">
                      <Database className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Database</div>
                      <div className="text-white font-bold text-xs">Optimized</div>
                  </div>
               </div>

               <div 
                 className="absolute -bottom-8 -left-4 bg-slate-900/90 backdrop-blur-xl px-4 py-3 rounded-lg border border-slate-700 shadow-xl flex items-center gap-3 animate-float"
                 style={{ transform: 'translateZ(40px)', animationDelay: '1s' }}
               >
                  <div className="p-1.5 bg-emerald-500/20 rounded-md">
                      <Server className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Backend</div>
                      <div className="text-white font-bold text-xs">Logic</div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
      
      <TechMarquee />
    </section>
  );
};

export default Hero;