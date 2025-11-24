import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Building2, User, Code2 } from 'lucide-react';

// Data from CV
const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Backend Developer (Freelance)',
    company: 'Shoe Management App',
    period: '06/2024 - Present',
    description: 'Developing a comprehensive desktop application for retail management. Implementing QR code scanning for products, inventory tracking, and automated invoicing systems.',
    technologies: ['Java', 'Swing', 'SQL Server', 'JDBC', 'QR Code']
  },
  {
    id: 2,
    type: 'work',
    title: 'IT Engineer',
    company: 'Solar EV Company',
    period: '06/2024 - 10/2024',
    description: 'Managed corporate websites (solarev.vn, focussolar.vn). Developed a .NET management platform for 50+ EV chargers serving 10,000+ users. Built Java APIs for mobile app communication.',
    technologies: ['C# .NET', 'SQL Server', 'Java API', 'WordPress', 'WebSocket']
  },
  {
    id: 3,
    type: 'work',
    title: 'Intern Backend Developer',
    company: 'FPT Company Developer',
    period: '09/2023 - 12/2023',
    description: 'Built a secure payment web application. Implemented features for customer/admin interfaces, shopping cart, cash-on-delivery, and crypto wallet integration.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'ReactJS', 'Thymeleaf']
  },
  {
    id: 4,
    type: 'education',
    title: 'Software Applications',
    company: 'FPT Polytechnic Ho Chi Minh',
    period: '09/2021 - 01/2024',
    description: 'Graduated with Excellent grade (8.9/10). Specialized in Backend Development and Software Engineering.',
    technologies: ['Java', 'C#', 'Algorithms', 'Agile/Scrum']
  }
];

// 3D Tilt Card Component
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200); // Amplify for effect
    y.set(yPct * 200);
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
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-[#020617]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 font-bold tracking-widest uppercase text-xs mb-4 backdrop-blur-md">
            Career Path
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Laser */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-[100px] bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-[slideDown_3s_linear_infinite]"></div>
          </div>

          <div className="space-y-24 md:space-y-32">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node (Center) */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 z-20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#0f172a] border-2 border-cyan-400 rounded-full relative z-10 shadow-[0_0_15px_rgba(6,182,212,1)]">
                        <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                    {/* Glowing Ring */}
                    <div className="absolute w-12 h-12 border border-cyan-500/30 rounded-full animate-[spin_4s_linear_infinite]"></div>
                  </div>

                  {/* Spacer for 50/50 layout */}
                  <div className="w-full md:w-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <TiltCard className="relative group cursor-default">
                        {/* Connecting Line (Horizontal) */}
                        <div className={`absolute top-8 hidden md:block h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent w-16 ${isEven ? '-right-16 rotate-180' : '-left-16'}`}>
                            <div className="absolute right-0 -top-[3px] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0f172a]/60 backdrop-blur-xl relative overflow-hidden group-hover:border-cyan-500/30 transition-colors duration-500">
                          {/* Hover Gradient Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Header */}
                          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-2xl ${item.type === 'work' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'} shadow-lg shadow-black/20`}>
                                    {item.type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                                    <div className="flex items-center text-sm text-gray-400 gap-2">
                                        <Building2 size={14} />
                                        {item.company}
                                    </div>
                                </div>
                            </div>
                            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-mono font-bold text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                                {item.period}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="relative z-10 text-gray-300 leading-relaxed mb-6 text-sm md:text-base border-l-2 border-white/10 pl-4 group-hover:border-cyan-500/50 transition-colors">
                            {item.description}
                          </p>

                          {/* Technologies */}
                          <div className="relative z-10 flex flex-wrap gap-2">
                            {item.technologies && item.technologies.map((tech) => (
                              <span key={tech} className="px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-900/20 border border-cyan-500/20 rounded-md shadow-sm">
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Decorative Corner */}
                          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                             <Code2 size={40} className="text-white/5 -rotate-12 transform translate-x-2 -translate-y-2" />
                          </div>
                        </div>
                    </TiltCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Keyframe for Laser Animation */}
      <style>{`
        @keyframes slideDown {
            0% { top: 0; opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Experience;