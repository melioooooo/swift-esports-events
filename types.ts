
export interface Tournament {
  id: number;
  game: string;
  date: string;
  cashprize: string;
  image: string;
  status: 'open' | 'closed' | 'coming_soon';
  // New detailed fields
  format?: string;
  teamSize?: string;
  platform?: string;
  location?: string;
  description?: string;
  registrationLink?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface NavLink {
  name: string;
  href: string;
}
