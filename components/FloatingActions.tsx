
import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, Facebook, Send, MessageCircle, X, MessageSquare } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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

  const contactLinks = [
    {
        label: 'Facebook',
        icon: Facebook,
        url: 'https://www.facebook.com/BuiXuanViet.6623.BE/',
        color: 'bg-[#1877F2] hover:bg-[#166fe5]',
        delay: 0
    },
    {
        label: 'Messenger',
        icon: MessageCircle,
        url: 'https://m.me/BuiXuanViet.6623.BE',
        color: 'bg-[#00B2FF] hover:bg-[#0099db]',
        delay: 50
    },
    {
        label: 'Zalo',
        // Custom Zalo Text Icon
        icon: () => <span className="font-black text-[10px] tracking-tighter">Zalo</span>,
        url: 'https://zalo.me/0932718625',
        color: 'bg-[#0068FF] hover:bg-[#0057d9]',
        delay: 100
    },
    {
        label: 'Telegram',
        icon: Send,
        url: 'https://t.me/xuanviet23',
        color: 'bg-[#229ED9] hover:bg-[#1d8dbf]',
        delay: 150
    },
    {
        label: 'Call Me',
        icon: Phone,
        url: 'tel:0932718625',
        color: 'bg-emerald-500 hover:bg-emerald-600',
        delay: 200
    }
  ];

  return (
    <>
      {/* Scroll To Top Button - Bottom Right - High Z-Index */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:bg-emerald-500 hover:text-slate-900 hover:border-emerald-400 transition-all duration-500 transform group ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Contact Floating Action Button - Bottom Left - High Z-Index */}
      <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-start gap-4">
        
        {/* Menu Items (Expands Upwards) */}
        <div className={`flex flex-col-reverse gap-3 transition-all duration-300 ${isContactOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-10'}`}>
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 group transition-all duration-300 transform ${isContactOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: `${isContactOpen ? link.delay : 0}ms` }}
                >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/30 transition-transform hover:scale-110 ${link.color}`}>
                        <Icon className={typeof Icon === 'function' ? '' : "w-5 h-5"} />
                    </div>
                    <span className="bg-slate-900/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                        {link.label}
                    </span>
                </a>
            );
          })}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsContactOpen(!isContactOpen)}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110 z-50 ${isContactOpen ? 'bg-slate-800 text-white rotate-180' : 'bg-blue-600 text-white rotate-0 animate-bounce'}`}
        >
            {isContactOpen ? (
                <X className="w-6 h-6" />
            ) : (
                <>
                    <MessageSquare className="w-6 h-6 absolute" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-900"></span>
                </>
            )}
        </button>
      </div>
    </>
  );
};

export default FloatingActions;
