
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { NavLink } from '../types';

const links: NavLink[] = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Concept', href: '#concept' },
  { name: 'Tournois', href: '#tournaments' },
  { name: 'Partenaires', href: '#partners' },
  { name: 'À Propos', href: '#about' },
];

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 127.14 96.36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.09,105.09,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c2.36-24.44-2.54-48.85-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);

export const Header: React.FC<{ onNavigate: (href: string) => void }> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 bg-swift-black shadow-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        {/* Logo Section - Flex 1 to occupy left space */}
        <div className="flex-1 flex justify-start">
          <div className="cursor-pointer select-none" onClick={() => handleLinkClick('#hero')}>
            <img 
              src="https://i.postimg.cc/HLDPGrFw/Frame-10.png" 
              alt="swift." 
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center gap-8 shrink-0">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm font-medium text-gray-300 hover:text-swift-coral transition-colors uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA & Mobile Toggle - Flex 1 to occupy right space */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* Discord Button */}
          <a 
            href="https://discord.gg/JF44rhdGQt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#5865F2]/10 hover:bg-[#5865F2] text-[#5865F2] hover:text-white transition-all duration-300 border border-[#5865F2]/20 hover:border-[#5865F2]"
            title="Rejoindre le Discord"
          >
            <DiscordIcon className="w-5 h-5" />
          </a>

          <Button 
            className="hidden md:block text-xs" 
            onClick={() => handleLinkClick('#register')}
          >
            Inscriptions
          </Button>
          
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-swift-black z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => handleLinkClick(link.href)}
            className="text-2xl font-heading font-bold text-white hover:text-swift-coral uppercase"
          >
            {link.name}
          </button>
        ))}
        
        <a 
          href="https://discord.gg/JF44rhdGQt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#5865F2] hover:text-white transition-colors font-heading font-bold uppercase"
        >
          <DiscordIcon className="w-6 h-6" />
          Rejoindre le Discord
        </a>

        <Button 
          onClick={() => handleLinkClick('#register')}
          className="mt-4"
        >
          S'inscrire
        </Button>
      </div>
    </header>
  );
};
