
import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 127.14 96.36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.09,105.09,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c2.36-24.44-2.54-48.85-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
);

export const Footer: React.FC<{ onNavigate: (href: string) => void }> = ({ onNavigate }) => {
  const socialLinks = [
    {
      Icon: Twitter,
      href: "https://x.com/swiftesports__"
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/swiftesportevents/?utm_source=ig_web_button_share_sheet"
    },
    {
      Icon: Youtube,
      href: "#" // No link provided yet
    }
  ];

  return (
    <footer className="bg-swift-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="https://i.postimg.cc/HLDPGrFw/Frame-10.png"
            alt="swift."
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Prominent Discord CTA */}
        <div className="mb-12">
          <a
            href="https://discord.gg/JF44rhdGQt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full font-heading font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(88,101,242,0.5)] group"
          >
            <DiscordIcon className="w-6 h-6 transition-transform group-hover:rotate-12" />
            <span>Rejoindre le Discord</span>
          </a>
        </div>

        {/* Other Socials */}
        <div className="flex gap-8 mb-12">
          {socialLinks.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href !== '#' ? "_blank" : undefined}
              rel={href !== '#' ? "noopener noreferrer" : undefined}
              className="text-gray-400 hover:text-white hover:scale-110 transition-all"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <div className="text-center text-gray-600 text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Swift Esports. Tous droits réservés.</p>
          <div className="space-x-4">
            <button onClick={() => onNavigate('mentions_legales')} className="hover:text-gray-400 transition-colors">Mentions Légales</button>
            <button onClick={() => onNavigate('cgu')} className="hover:text-gray-400 transition-colors">CGU</button>
            <a href="mailto:swifteventesport@gmail.com" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
