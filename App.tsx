
import React, { useState, useMemo } from 'react';
import { POSTERS, CATEGORIES } from './constants';
import { Poster, Category } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PosterCard } from './components/PosterCard';
import { PosterModal } from './components/PosterModal';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosters = useMemo(() => {
    return POSTERS.filter(poster => {
      const matchesCategory = selectedCategory === 'All' || poster.category === selectedCategory;
      const matchesSearch = poster.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            poster.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="pt-32 md:pt-48 pb-12 md:pb-24 px-6 max-w-7xl mx-auto">
          <div className="animate-fade-up">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 block mb-4 md:mb-6">
              Selected Works — 2024
            </span>
            <h1 className="text-hero font-serif font-bold tracking-tighter mb-8 md:mb-12">
              Digital Art <br />
              <span className="gradient-text italic">& Poster Design</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <p className="max-w-md text-sm md:text-base text-zinc-400 leading-relaxed">
                Eksperimen visual yang menggabungkan tipografi futuristik dengan estetika minimalis. Menjelajahi batas antara seni murni dan desain grafis.
              </p>
              <div className="flex gap-3 md:gap-4 self-start md:self-auto">
                <div className="text-center px-6 md:px-8 py-3 md:py-4 glass-card rounded-2xl flex-1 md:flex-none">
                  <div className="text-xl md:text-2xl font-serif font-bold">48+</div>
                  <div className="text-[8px] uppercase tracking-widest text-zinc-500">Projects</div>
                </div>
                <div className="text-center px-6 md:px-8 py-3 md:py-4 glass-card rounded-2xl flex-1 md:flex-none">
                  <div className="text-xl md:text-2xl font-serif font-bold">12</div>
                  <div className="text-[8px] uppercase tracking-widest text-zinc-500">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-[60px] md:top-[73px] z-30 glass-nav border-y border-white/5 py-3 md:py-4 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                    selectedCategory === cat ? 'bg-white text-black' : 'hover:bg-white/5 text-zinc-500 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-72 group">
              <input 
                type="text" 
                placeholder="Cari desain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 px-10 text-[11px] md:text-xs focus:outline-none focus:border-white/40 transition-all"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-4 top-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-6 max-w-7xl mx-auto my-12 md:my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-16">
            {filteredPosters.map((poster, index) => (
              <div key={poster.id} className="animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                <PosterCard poster={poster} onClick={setSelectedPoster} />
              </div>
            ))}
          </div>
          {filteredPosters.length === 0 && (
            <div className="text-center py-24 md:py-40">
              <p className="text-zinc-500 font-serif italic text-lg md:text-xl px-6">
                Tidak ada karya yang ditemukan untuk kriteria ini.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />

      <PosterModal 
        poster={selectedPoster} 
        onClose={() => setSelectedPoster(null)} 
      />
    </div>
  );
};

export default App;
