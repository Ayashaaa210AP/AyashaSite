
import React from 'react';
import { Poster } from '../types';

interface PosterCardProps {
  poster: Poster;
  onClick: (poster: Poster) => void;
}

export const PosterCard: React.FC<PosterCardProps> = ({ poster, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-zinc-400"
      onClick={() => onClick(poster)}
    >
      <div className="aspect-[2/3] w-full overflow-hidden">
        <img 
          src={poster.image} 
          alt={poster.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">{poster.category}</span>
        <h3 className="text-xl font-bold font-serif leading-tight">{poster.title}</h3>
        <div className="flex gap-2 mt-3 overflow-hidden">
          {poster.tags.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-0.5 border border-white/20 rounded-full text-white/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-4 md:hidden">
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{poster.category}</span>
        <h3 className="text-lg font-bold">{poster.title}</h3>
      </div>
    </div>
  );
};
