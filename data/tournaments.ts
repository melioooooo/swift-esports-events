
import { Tournament } from '../types';

export const tournamentsData: Tournament[] = [
  {
    id: 1,
    game: "Trackmania",
    date: "Janvier 2025",
    cashprize: "4,000 €",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2670&auto=format&fit=crop",
    status: 'open',
    format: "Duo (2v2)",
    teamSize: "2 Joueurs",
    platform: "PC",
    location: "Alsace Esport Arena (Strasbourg)",
    description: "Compétition en Duo (2v2). Le circuit comprend 4 qualifications Online (phase de Seeding en Time Attack suivie d'un arbre à élimination directe pour le Top 16) et une Grande Finale Offline réunissant les 4 meilleures équipes en format Double Élimination.\n\nTarif : 30 € TTC par équipe (donnant accès aux qualifiers).",
    registrationLink: "https://alsacearena.com/trackmania-swift-cup"
  },
  {
    id: 3,
    game: "Rainbow 6 Siege",
    date: "Février 2025",
    cashprize: "5,000 €",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
    status: 'coming_soon',
    format: "Arbre à double élimination",
    teamSize: "5v5",
    platform: "PC",
    location: "Online & Offline (Strasbourg)",
    description: "La stratégie rencontre la puissance de feu. Rassemblez votre escouade pour le tournoi tactique ultime. Une phase de qualification rigoureuse en ligne déterminera les 4 équipes qui s'affronteront pour le titre et le cashprize devant le public.",
    registrationLink: "https://alsacearena.com/r6-swift-cup"
  }
];