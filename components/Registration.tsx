import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { ExternalLink } from 'lucide-react';

export const Registration: React.FC = () => {
  return (
    <section id="register" className="py-24 bg-swift-teal relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-gray-900 p-8 md:p-16 border border-white/10 shadow-2xl text-center">
          <Reveal width="100%">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase">
                Inscriptions <span className="text-swift-coral">Ouvertes</span>
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-6">
                <p className="text-xl text-white font-medium">
                  Prêt à entrer dans l'arène ?
                </p>
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-gray-300 leading-relaxed text-lg">
                    Pour garantir une organisation optimale de nos <strong>1ères éditions</strong>, 
                    la gestion des inscriptions est centralisée sur la plateforme de notre partenaire officiel.
                    </p>
                    <p className="text-swift-coral font-bold mt-2 uppercase tracking-wider text-sm">
                      Alsace Esport Arena
                    </p>
                </div>
              </div>

              <div className="pt-4 w-full flex justify-center">
                <a 
                  href="https://alsacearena.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto"
                >
                  <Button className="w-full md:w-auto px-8 md:px-12 py-4 text-lg flex items-center justify-center gap-3 group">
                    S'inscrire sur AlsaceArena.com
                    <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </a>
              </div>
              
              <p className="text-xs text-gray-500 mt-8">
                Vous serez redirigé vers le site officiel de l'Alsace Esport Arena.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};