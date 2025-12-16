import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-top button after scrolling down 400px
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll To Top Button - Bottom Right - High Z-Index */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full bg-slate-900/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-700 dark:border-slate-600 text-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:bg-emerald-500 hover:text-slate-900 hover:border-emerald-400 transition-all duration-500 transform group ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </>
  );
};

export default FloatingActions;