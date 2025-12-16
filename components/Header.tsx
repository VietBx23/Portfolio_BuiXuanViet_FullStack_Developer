import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'skills', 'experience', 'projects', 'about', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -150 && rect.top <= 300;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'education', label: 'Education', href: '#education' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-[#020617]/80 backdrop-blur-xl border-slate-800/60 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, '#home')}
              className="group flex items-center gap-3 relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative p-2.5 bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl border border-slate-700 group-hover:border-emerald-500/50 transition-colors duration-300">
                   <Terminal className="w-6 h-6 text-emerald-500" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-black text-xl text-white leading-none tracking-tighter group-hover:text-emerald-400 transition-colors duration-300">
                  BUI XUAN VIET
                </span>
                <span className="text-[10px] text-emerald-500 font-mono font-bold tracking-[0.3em] uppercase mt-1">
                  FULLSTACK
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center p-1 rounded-full bg-slate-900/40 border border-slate-800/50 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 overflow-hidden group ${
                      isActive 
                        ? 'text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {/* Background Pill for Active State */}
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] -z-10 animate-fade-in-up"></span>
                    )}
                    {/* Hover Glow */}
                    {!isActive && (
                       <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>
            
             {/* Contact Button (Desktop) */}
             <div className="hidden md:block">
                <a 
                  href="#contact"
                  onClick={(e) => handleClick(e, '#contact')}
                  className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#393bb2_50%,#10b981_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors">
                    Hire Me
                  </span>
                </a>
             </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col p-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`px-4 py-4 rounded-2xl text-base font-bold transition-all ${
                  activeSection === item.id 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 pl-6' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
               onClick={(e) => handleClick(e, '#contact')}
               className="mt-4 px-4 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-base font-bold text-center shadow-lg shadow-emerald-900/20"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;