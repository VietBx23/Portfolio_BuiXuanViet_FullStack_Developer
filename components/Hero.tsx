import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Download, MapPin } from 'lucide-react';
import CyberLaptop from './CyberLaptop';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const roles = ["Backend Developer", "Java & .NET Expert", "Solution Architect"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Updated Avatar URL
  const avatarUrl = "https://sf-static.upanhlaylink.com/img/image_202511248885d96abcf4420e112958ab60c99194.jpg";
  const cvUrl = "https://drive.google.com/uc?export=view&id=1W8gt_LYAVxOYDVmMRrSPoaW-T9NzI0jz";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 font-bold text-xs tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              Open to Opportunities
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x drop-shadow-lg cursor-default glitch-hover">
                Bui Xuan Viet
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light h-10 flex items-center justify-center lg:justify-start font-mono">
              <span className="mr-3 text-cyan-500 font-bold">./</span>
              {text}<span className="animate-pulse text-cyan-500 font-bold">_</span>
            </h2>
            
            <p className="max-w-2xl mx-auto lg:mx-0 text-gray-400 mb-10 text-lg leading-relaxed font-light">
              I am a passionate <span className="text-white font-medium">Backend Developer</span> proficient in building scalable systems with <span className="text-cyan-400">Java</span>, <span className="text-cyan-400">C#</span>, and <span className="text-cyan-400">Node.js</span>. I specialize in crafting robust APIs and high-performance applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-5 mb-12">
              <a 
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent transform -translate-x-full group-hover:animate-shine"></span>
                <span className="relative z-10 flex items-center"><Download className="mr-2 h-5 w-5" /> Download CV</span>
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-full font-bold transition-all flex items-center backdrop-blur-md group hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                Hire Me <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-cyan-400" />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <SocialLink href="https://github.com/VietBx23" icon={<Github size={20} />} label="Github" />
              <SocialLink href="mailto:vietbx23@gmail.com" icon={<Mail size={20} />} label="Email" />
              <div className="h-8 w-[1px] bg-white/10"></div>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin size={16} className="mr-2 text-cyan-500" />
                Ho Chi Minh City, VN
              </div>
            </div>
          </motion.div>

          {/* Right Content - Advanced 3D Avatar Portal */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end relative perspective-1000 animate-float"
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
              
              {/* Complex Rotating Rings */}
              {/* Outer Cyan Ring */}
              <div className="absolute inset-[-20px] rounded-full border border-cyan-500/30 animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }}></div>
              
              {/* Middle Blue Ring */}
              <div className="absolute inset-[-10px] rounded-full border-[2px] border-blue-500/20 animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
              
              {/* Inner Pulsing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-pulse shadow-[0_0_20px_rgba(6,182,212,0.4)]"></div>
              
              {/* Orbiting Particles (CSS approximation) */}
              <div className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite]">
                 <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)] transform -translate-x-1/2 -translate-y-1.5"></div>
                 <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)] transform -translate-x-1/2 translate-y-1.5"></div>
              </div>

              {/* Glow Behind */}
              <div className="absolute inset-10 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-full blur-[90px] opacity-50 animate-pulse-slow"></div>
              
              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[4px] border-[#0f172a] shadow-[0_0_60px_rgba(6,182,212,0.3)] z-10 bg-[#0f172a] group">
                <img 
                  src={avatarUrl} 
                  alt="Bui Xuan Viet" 
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 filter saturate-[1.1]"
                />
                
                {/* Tech Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
              </div>

              {/* NEW: 3D Laptop Component Focal Point */}
              <motion.div 
                className="absolute -top-24 -right-12 w-64 h-64 z-30 pointer-events-none md:w-80 md:h-80 md:-right-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                 <CyberLaptop />
              </motion.div>

              {/* Floating 3D Card 2 - Code & Coffee */}
              <motion.div 
                className="absolute bottom-8 -left-4 md:bottom-12 md:-left-8 glass-card px-5 py-3 rounded-2xl z-20 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute top-0 right-0"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center border border-white/10">
                    <span className="text-xl">☕</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Fueled by</p>
                  <p className="text-sm font-bold text-white">Code & Coffee</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group relative p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
    aria-label={label}
  >
    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
      {icon}
    </div>
  </a>
);

export default Hero;