import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Header appearance logic
      setIsScrolled(window.scrollY > 20); // Trigger earlier
      
      // Active section logic
      const sections = ['home', 'skills', 'experience', 'projects', 'about', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }

      // Scroll Progress Logic
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollTotal = docHeight - winHeight;
      
      const progress = scrollTotal > 0 ? scrollTop / scrollTotal : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Recalculate on resize
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Adjusted for full width header
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
    { id: 'experience', label: 'Exp', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'about', label: 'About', href: '#about' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b ${
          isScrolled 
            ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800/50 py-3 shadow-lg shadow-black/20' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        {/* Scroll Progress Bar (Moved to TOP of Header) */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-800/20 z-[100]">
            <div 
                className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] relative"
                style={{ 
                    width: `${scrollProgress * 100}%`,
                    transition: 'width 0.1s linear'
                }}
            >
                {/* Glowing leading edge */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[6px] bg-white rounded-full blur-[2px] shadow-white"></div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                
                {/* Logo Section */}
                <a 
                    href="#home" 
                    onClick={(e) => handleClick(e, '#home')}
                    className="flex items-center gap-2 group"
                >
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-700/50 group-hover:border-emerald-500/50 transition-colors">
                        <Terminal className="w-5 h-5 text-emerald-500 transition-transform group-hover:scale-110" />
                        <span className="absolute inset-0 bg-emerald-500/20 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></span>
                    </div>
                    <span className="font-bold text-slate-200 text-lg tracking-tight group-hover:text-white transition-colors">
                        viet<span className="text-emerald-500">.dev</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/50 backdrop-blur-sm">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className={`
                                relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                                ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}
                            `}
                        >
                            {isActive && (
                                <span className="absolute inset-0 bg-slate-800 rounded-full -z-10 shadow-inner border border-slate-700/50"></span>
                            )}
                            {item.label}
                        </a>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    {/* CTA Button */}
                    <a 
                        href="#contact"
                        onClick={(e) => handleClick(e, '#contact')}
                        className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-500 text-slate-950 text-sm font-bold hover:bg-emerald-400 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
                    >
                        <span>Hire Me</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2 rounded-lg bg-slate-900/50 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`
            md:hidden absolute top-full left-0 right-0 bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-700/50 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top shadow-2xl overflow-hidden
            ${isMobileMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
        `}>
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all flex items-center justify-between group ${
                  activeSection === item.id 
                    ? 'bg-slate-800 text-emerald-400 border border-slate-700' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
                {activeSection === item.id && <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>}
              </a>
            ))}
            <div className="h-px bg-slate-800 my-2"></div>
            <a 
              href="#contact"
               onClick={(e) => handleClick(e, '#contact')}
               className="w-full py-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-center hover:bg-emerald-400 transition-colors"
            >
              Start a Project
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;