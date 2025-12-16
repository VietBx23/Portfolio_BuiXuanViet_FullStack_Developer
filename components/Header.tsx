import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled State
      setScrolled(window.scrollY > 20);

      // 2. Active Section Logic
      const sections = ['home', 'skills', 'experience', 'projects', 'about'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // 3. Reading Progress Bar Logic
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Stack', href: '#skills' },
    { id: 'experience', label: 'Work', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'about', label: 'About', href: '#about' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-[#020617]/80 backdrop-blur-md border-slate-800 py-3' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="w-full px-6 md:px-12 flex items-center justify-between relative">
            
            {/* Logo Area */}
            <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-4 group">
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 flex items-center justify-center overflow-hidden shadow-lg group-hover:border-emerald-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Terminal className="w-5 h-5 text-emerald-500 relative z-10" />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-lg font-black tracking-tight leading-none text-white group-hover:text-emerald-400 transition-colors">
                        BUI XUAN VIET
                    </span>
                    <span className="text-[10px] font-bold text-emerald-500 tracking-[0.25em] uppercase leading-tight mt-1">
                        Fullstack Developer
                    </span>
                </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
                <div className="flex items-center bg-slate-900/50 rounded-full p-1 border border-slate-800 backdrop-blur-sm">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={`relative px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                                    isActive 
                                    ? 'text-emerald-950' 
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] -z-10 animate-in fade-in zoom-in duration-300"></div>
                                )}
                                {item.label}
                            </a>
                        );
                    })}
                </div>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">
                <a 
                    href="#contact"
                    onClick={(e) => handleClick(e, '#contact')}
                    className="hidden md:flex items-center px-6 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5"
                >
                    Hire Me
                </a>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </div>

        {/* Ranger / Reading Progress Bar - Bottom of Header */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800/50">
            <div 
                className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                style={{ width: `${readingProgress}%` }}
            />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="absolute top-[100%] left-0 right-0 bg-[#020617]/95 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2 duration-200 z-40">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className={`px-4 py-4 rounded-xl text-sm font-bold tracking-wide transition-all border border-transparent ${
                            activeSection === item.id 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 pl-6' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                    >
                        {item.label}
                    </a>
                ))}
                 <a 
                    href="#contact"
                    onClick={(e) => handleClick(e, '#contact')}
                    className="mt-2 text-center px-4 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold shadow-lg"
                >
                    Hire Me
                </a>
            </div>
        )}
      </header>
    </>
  );
};

export default Header;