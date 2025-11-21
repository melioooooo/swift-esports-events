
import React from 'react';
import { Reveal } from './ui/Reveal';
import { Calendar, Coins } from 'lucide-react';
import { Tournament } from '../types';

interface TournamentsProps {
  tournaments: Tournament[];
  onTournamentClick: (tournament: Tournament) => void;
}

export const Tournaments: React.FC<TournamentsProps> = ({ tournaments, onTournamentClick }) => {
  return (
    <section id="tournaments" className="py-24 bg-gray-950 relative z-10">
      {/* Decorative background text */}
      <div className="absolute top-0 right-0 text-[15vw] leading-none font-heading font-bold text-white/5 select-none pointer-events-none overflow-hidden whitespace-nowrap">
        AGENDA
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-4">Tournois <span className="text-swift-coral">à venir</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Dominez le online, brillez sur scène. L'élite commence ici.</p>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {tournaments.map((tournament, index) => (
            <div key={tournament.id} className="w-full md:w-[calc(50%-1rem)]">
              <Reveal delay={index * 0.15} width="100%">
                <div className="group relative bg-gray-900 overflow-hidden border border-white/5 hover:border-swift-coral transition-colors duration-500 h-full flex flex-col">
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 z-20 px-3 py-1 text-xs font-bold uppercase tracking-wider ${tournament.status === 'open' ? 'bg-swift-coral text-white' : 'bg-gray-800 text-gray-400'
                    }`}>
                    {tournament.status === 'open' ? 'Inscriptions Ouvertes' : 'Bientôt'}
                  </div>

                  {/* Image Container */}
                  <div className="h-64 overflow-hidden relative shrink-0">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${tournament.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90" />

                    {/* Floating Game Title */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <h3 className="text-3xl font-heading font-bold text-white uppercase italic">{tournament.game}</h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4 relative flex-1 flex flex-col justify-between">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-swift-coral/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="flex items-center justify-between text-sm font-medium text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-swift-coral" />
                        <span>{tournament.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Coins className="w-4 h-4 text-swift-coral" />
                        <span>{tournament.cashprize}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onTournamentClick(tournament)}
                      className="w-full py-3 mt-4 border border-gray-700 text-white font-heading font-bold uppercase hover:bg-white hover:text-swift-black transition-all duration-300 z-20 relative"
                    >
                      Détails du tournoi
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
