import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-[2s]"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop")',
            transform: `translateY(${offset * 0.5}px) scale(1.1)`
          }}
        />
        {/* Heavy Gradient Overlay for "Immersion" */}
        <div className="absolute inset-0 bg-gradient-to-b from-swift-black/40 via-swift-black/60 to-swift-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-swift-black" />
      </div>

      {/* Texture Logo Overlay (Simulated with CSS text stroke) */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 select-none"
        style={{ transform: `translateY(${offset * 0.2}px)` }}
      >
        <span className="text-[20vw] font-heading font-bold text-stroke uppercase">
          SWIFT
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <div 
          className="space-y-6"
          style={{ transform: `translateY(${offset * -0.2}px)` }}
        >
          <p className="text-swift-coral font-bold tracking-[0.3em] text-sm md:text-base uppercase animate-fade-in">
            Faire vivre l'esport autrement
          </p>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-bold uppercase leading-tight text-white drop-shadow-2xl animate-slide-up opacity-0 [animation-delay:200ms]">
            Votre compétition <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">commence ici</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light animate-slide-up opacity-0 [animation-delay:400ms]">
            Du online vers l'arène. Prouvez votre valeur et vivez l'expérience pro sur la grande scène de l'Alsace Esport Arena.
          </p>

          <div className="flex flex-col md:flex-row gap-6 pt-8 items-center justify-center animate-slide-up opacity-0 [animation-delay:600ms]">
            <Button onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
              S'inscrire maintenant <ArrowRight className="inline ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('tournaments')?.scrollIntoView({ behavior: 'smooth' })}>
              Voir les tournois
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-swift-coral to-transparent"></div>
      </div>
    </section>
  );
};