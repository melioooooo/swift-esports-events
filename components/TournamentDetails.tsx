
import React, { useEffect } from 'react';
import { Tournament } from '../types';
import { Button } from './ui/Button';
import { ArrowLeft, Calendar, Coins, Users, Monitor, MapPin, ExternalLink } from 'lucide-react';
import { Reveal } from './ui/Reveal';

interface TournamentDetailsProps {
  tournament: Tournament;
  onBack: () => void;
}

export const TournamentDetails: React.FC<TournamentDetailsProps> = ({ tournament, onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-swift-black pt-24 pb-12 relative z-10">
      
      {/* Hero Header */}
      <div className="relative h-[50vh] w-full overflow-hidden mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tournament.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-swift-black via-swift-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
            <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors uppercase text-sm font-bold tracking-wider"
            >
            <ArrowLeft size={20} />
            Retour aux tournois
            </button>
            <Reveal>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-4 italic">
                {tournament.game}
                </h1>
            </Reveal>
            <Reveal delay={0.1}>
                <div className="flex flex-wrap gap-6 text-lg font-medium text-swift-coral">
                    <span className="flex items-center gap-2"><Calendar size={20}/> {tournament.date}</span>
                    <span className="flex items-center gap-2"><Coins size={20}/> {tournament.cashprize}</span>
                </div>
            </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-2 space-y-12">
            
            {/* Stats Grid */}
            <Reveal delay={0.2}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Format", value: tournament.format, icon: Monitor },
                        { label: "Équipe", value: tournament.teamSize, icon: Users },
                        { label: "Plateforme", value: tournament.platform, icon: Monitor },
                        { label: "Lieu", value: tournament.location, icon: MapPin },
                    ].map((stat, i) => (
                        <div key={i} className="bg-gray-900/50 border border-white/5 p-4 rounded-sm">
                            <stat.icon className="w-5 h-5 text-swift-coral mb-2" />
                            <p className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</p>
                            <p className="text-white font-bold font-heading">{stat.value || 'N/A'}</p>
                        </div>
                    ))}
                </div>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.3}>
                <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-white uppercase border-l-4 border-swift-coral pl-4">
                        À propos du tournoi
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        {tournament.description || "Aucune description disponible pour le moment."}
                    </p>
                </div>
            </Reveal>
        </div>

        {/* Right Column: CTA Card (Sticky) */}
        <div className="lg:col-span-1">
            <div className="sticky top-32">
                <Reveal delay={0.4} animation="fade-up">
                    <div className="bg-swift-teal border border-white/10 p-8 shadow-2xl relative overflow-hidden">
                         {/* Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-white uppercase">
                                    Inscriptions {tournament.status === 'open' ? <span className="text-swift-coral">Ouvertes</span> : 'Bientôt'}
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Rejoignez la compétition dès maintenant.
                                </p>
                            </div>

                            <div className="p-4 bg-black/20 rounded border border-white/5 w-full">
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    Pour cette édition, la gestion des inscriptions est centralisée chez notre partenaire.
                                </p>
                                <p className="text-swift-coral font-bold mt-2 uppercase tracking-wider text-xs">
                                    Alsace Esport Arena
                                </p>
                            </div>

                            {tournament.status === 'open' ? (
                                <a 
                                href="https://alsacearena.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full"
                                >
                                    <Button className="w-full py-4 flex items-center justify-center gap-2 group">
                                        S'inscrire <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </a>
                            ) : (
                                <Button className="w-full py-4 bg-gray-700 text-gray-400 cursor-not-allowed hover:bg-gray-700 hover:text-gray-400 border-none transform-none shadow-none" disabled>
                                    Bientôt Disponible
                                </Button>
                            )}

                            <p className="text-[10px] text-gray-400">
                                Redirection vers le site officiel de l'Alsace Esport Arena.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>

      </div>
    </div>
  );
};
