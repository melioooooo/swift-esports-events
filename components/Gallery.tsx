import React from 'react';
import { Reveal } from './ui/Reveal';

const images = [
  { src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop", title: "Finale S1 - 2023" },
  { src: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2670&auto=format&fit=crop", title: "Bootcamp" },
  { src: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2671&auto=format&fit=crop", title: "Backstage" },
  { src: "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?q=80&w=2670&auto=format&fit=crop", title: "Le Public" },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-swift-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <Reveal>
            <h2 className="text-4xl font-heading font-bold text-white uppercase">Galerie <span className="text-gray-600">Souvenirs</span></h2>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="#" className="hidden md:block text-swift-coral hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">Voir tout l'album</a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <Reveal key={idx} delay={idx * 0.1} animation="zoom-in">
              <div className="group relative aspect-square overflow-hidden bg-gray-800 cursor-pointer">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-heading font-bold text-xl uppercase tracking-widest border-b-2 border-swift-coral pb-1">
                    {img.title}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};