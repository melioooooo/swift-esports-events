import React from 'react';
import { Reveal } from './ui/Reveal';
import { Monitor, Trophy } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Monitor,
    title: "Online Qualifiers",
    description: "Inscrivez votre équipe et affrontez la masse depuis chez vous. Les meilleures équipes se qualifient pour la suite."
  },
  {
    id: 2,
    icon: Trophy,
    title: "La Grande Finale",
    description: "Jouez sur scène, devant un public, casté en direct. Vivez l'expérience pro à l'Alsace Esport Arena."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-swift-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="mb-16 border-l-4 border-swift-coral pl-6">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-2">Comment <span className="text-gray-600">ça marche ?</span></h2>
            <p className="text-gray-400 text-lg">Le chemin vers la gloire en deux étapes simples.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative max-w-5xl mx-auto">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-800 -z-10 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.2} animation="fade-up">
              <div className="group relative bg-swift-teal p-8 h-full border border-white/5 hover:border-swift-coral/50 transition-all duration-500">
                <div className="absolute -top-6 -right-6 text-9xl font-heading font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">
                  0{step.id}
                </div>
                
                <div className="mb-6 relative z-10 inline-block p-4 bg-swift-black rounded-full border border-gray-800 group-hover:border-swift-coral transition-colors">
                  <step.icon className="w-8 h-8 text-swift-coral" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">{step.title}</h3>
                <p className="text-gray-300 font-light leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};