import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mr-3 shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wider text-white font-mono">VIET<span className="text-cyan-400">BUI</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 px-5 py-2 rounded-full hover:bg-white/5 transition-all text-sm font-medium tracking-wide relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)} 
              className="block mt-4 px-4 py-3 text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-medium"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;