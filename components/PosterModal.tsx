
import React from 'react';
import { Poster } from '../types';

interface PosterModalProps {
  poster: Poster | null;
  onClose: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({ poster, onClose }) => {
  if (!poster) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl h-[92vh] md:h-full flex flex-col lg:flex-row gap-6 md:gap-10 overflow-hidden bg-zinc-900/50 p-6 md:p-10 rounded-t-[2.5rem] md:rounded-[2rem] border border-white/5 animate-in slide-in-from-bottom-10 duration-500">
        
        {/* Handle for Mobile Drag Visual */}
        <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto mb-4 md:hidden"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] text-white p-2.5 bg-black/50 hover:bg-white/10 rounded-full transition-colors backdrop-blur-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Poster Image Container */}
        <div className="flex-1 flex items-center justify-center bg-black/20 rounded-2xl overflow-hidden min-h-[40vh] md:min-h-0">
          <img 
            src={poster.image} 
            alt={poster.title} 
            className="max-h-full max-w-full object-contain shadow-2xl transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>

        {/* Details Side Panel */}
        <div className="w-full lg:w-[380px] flex flex-col justify-between overflow-y-auto no-scrollbar">
          <div className="space-y-8">
            <div>
              <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold">{poster.category}</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 leading-tight tracking-tight">{poster.title}</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Narrative</h4>
                <p className="text-zinc-300 leading-relaxed text-sm md:text-base font-light">{poster.description}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Aesthetics</h4>
                <div className="flex flex-wrap gap-2">
                  {poster.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] text-zinc-400 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 space-y-4 pb-safe">
            <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all active:scale-95 uppercase tracking-[0.2em] text-[10px]">
              Project Inquiry
            </button>
            <p className="text-[9px] text-center text-zinc-600 uppercase tracking-widest font-bold">
              Available for Worldwide Commissions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
