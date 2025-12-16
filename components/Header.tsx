import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Handle Header Background
      setScrolled(window.scrollY > 20);

      // Handle Active Section Highlight
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      
      // Find the current section that is most visible in the viewport
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if the top of the section is within the top third of the screen
          // or if it's nearing the top
          return rect.top >= -100 && rect.top <= 300;
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

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, '#home')}
            className="flex-shrink-0 flex items-center gap-2 group cursor-pointer"
          >
            <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
              <Terminal className="h-6 w-6 text-emerald-400" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Viet<span className="text-emerald-400">.dev</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 group ${
                    activeSection === link.id 
                      ? 'text-emerald-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Animated Underline Effect */}
                  <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-emerald-400 transform origin-left transition-transform duration-300 ${
                    activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="ml-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transform hover:-translate-y-0.5"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 border-b border-slate-800' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                 activeSection === link.id
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
             href="#contact"
             onClick={(e) => handleClick(e, '#contact')}
             className="block mt-4 text-center bg-emerald-500 text-slate-900 px-4 py-3 rounded-lg text-base font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;