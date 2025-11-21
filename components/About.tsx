import React from 'react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-swift-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-none">
              Le Pont entre <br />
              <span className="text-swift-coral">Passion</span> et <span className="text-swift-teal">Professionnalisme</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Swift n'est pas juste un organisateur de tournois. Nous sommes un accélérateur de talents.
              Nous croyons que l'expérience de la scène ne doit pas être réservée à l'élite mondiale.
            </p>
            <p className="text-gray-400 leading-relaxed">
              En combinant la flexibilité du jeu en ligne et l'intensité des finales en LAN, nous offrons
              le meilleur des deux mondes. Notre mission est de faire vivre des émotions fortes aux joueurs
              amateurs et semi-pro.
            </p>
          </div>
        </Reveal>

        <Reveal animation="fade-up" delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-swift-teal/30 translate-x-4 translate-y-4 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2509&auto=format&fit=crop"
              alt="Alsace Esport Arena"
              className="relative z-10 w-full h-full object-cover filter contrast-125 grayscale-[20%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
