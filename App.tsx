
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Tournaments } from './components/Tournaments';
import { Registration } from './components/Registration';
import { Partners } from './components/Partners';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { TournamentDetails } from './components/TournamentDetails';
import { tournamentsData } from './data/tournaments';
import { Tournament } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'tournament_details'>('home');
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);

  // Reset scroll when view changes is handled in components usually, 
  // but we can ensure top scroll here too if needed.
  useEffect(() => {
    if (currentView === 'home') {
        // Optional: Scroll to tournaments section if returning? 
        // For now just let navigation handle it.
    }
  }, [currentView]);

  const handleNavigate = (href: string) => {
    // If we are in details view and clicking a link, we go back to home first
    if (currentView === 'tournament_details') {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentView('home');
        setSelectedTournament(null);
        setIsLoading(false);
        
        // Wait for home to render then scroll
        setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }, 600);
    } else {
        // Already on home, just scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTournamentClick = (tournament: Tournament) => {
    setIsLoading(true);
    setTimeout(() => {
        setSelectedTournament(tournament);
        setCurrentView('tournament_details');
        setIsLoading(false);
    }, 600);
  };

  const handleBackToHome = () => {
    setIsLoading(true);
    setTimeout(() => {
        setCurrentView('home');
        setSelectedTournament(null);
        setIsLoading(false);
    }, 600);
  };

  return (
    <div className="bg-swift-black min-h-screen font-sans text-white overflow-x-hidden relative selection:bg-swift-coral selection:text-white">
      {/* Fixed Glow Background */}
      <div className="fixed inset-0 pointer-events-none bg-glow-radial z-0 opacity-60"></div>

      {/* Transition Overlay (The "Blink" Effect) */}
      <div 
        className={`fixed inset-0 bg-black z-[60] transition-opacity duration-300 pointer-events-none ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      <Header onNavigate={handleNavigate} />

      <main className="relative z-10">
        {currentView === 'home' ? (
            <>
                <Hero />
                <Process />
                <Tournaments tournaments={tournamentsData} onTournamentClick={handleTournamentClick} />
                <Registration />
                <Partners />
                <About />
            </>
        ) : (
            selectedTournament && (
                <TournamentDetails 
                    tournament={selectedTournament} 
                    onBack={handleBackToHome} 
                />
            )
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
