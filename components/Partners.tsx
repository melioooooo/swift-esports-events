import React from 'react';
import { Reveal } from './ui/Reveal';

const partners = [
  { 
    name: "Alsace Esport Arena", 
    logo: "https://alsacearena.com/wp-content/uploads/2019/11/LOGO-SITE-1-e1574437081279.png" 
  },
  { 
    name: "Esport Trophy", 
    logo: "https://esport-trophy.gg/wp-content/uploads/2025/08/Logo-lightmode-noBG-1.png" 
  }
];

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-gray-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm font-bold tracking-[0.2em] uppercase mb-16">Ils soutiennent la compétition</p>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
          {partners.map((partner, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group cursor-pointer relative">
                <div className="h-20 md:h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full w-auto object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};