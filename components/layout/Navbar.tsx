
import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Gallery', 'Exhibitions', 'Archives', 'Contact'];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/5 pt-safe pb-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="group flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-black font-serif font-bold transition-transform group-hover:rotate-12 text-sm md:text-base">L</div>
            <span className="text-lg md:text-xl font-serif font-bold tracking-tighter uppercase">Lumina</span>
          </a>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] px-4 md:px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              Hire Me
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`h-[1px] bg-current transition-all ${isOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`}></span>
                <span className={`h-[1px] bg-current transition-all ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-[1px] bg-current transition-all ${isOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="h-full flex flex-col justify-center items-center gap-8 text-center p-6">
          {menuItems.map((item, idx) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-serif font-bold hover:italic transition-all"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item}
            </a>
          ))}
          <div className="mt-8 pt-8 border-t border-white/10 w-full max-w-xs flex flex-col gap-6">
            <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full">
              Start a Project
            </button>
            <div className="flex justify-center gap-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              <span>Instagram</span>
              <span>Behance</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
