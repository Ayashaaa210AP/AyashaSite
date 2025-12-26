
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-5xl font-serif font-bold mb-8 leading-tight">Menciptakan narasi visual yang abadi.</h2>
            <p className="text-zinc-500 max-w-sm leading-relaxed">Berbasis di Jakarta, bekerja secara global untuk merek-merek yang menghargai estetika dan fungsionalitas.</p>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
            <a href="mailto:hello@lumina.design" className="text-3xl md:text-5xl font-light border-b border-white/10 pb-4 hover:border-white transition-all">
              hello@lumina.design
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5">
          <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
            © 2024 Lumina Studio — All Rights Reserved
          </div>
          <div className="flex gap-8">
            {['Instagram', 'Behance', 'Dribbble'].map(link => (
              <a key={link} href="#" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
