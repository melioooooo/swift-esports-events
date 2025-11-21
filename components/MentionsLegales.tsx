import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from './ui/Reveal';

interface MentionsLegalesProps {
    onBack: () => void;
}

export const MentionsLegales: React.FC<MentionsLegalesProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-swift-coral hover:text-white transition-colors mb-8 group font-heading font-bold uppercase tracking-wider"
                >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    Retour à l'accueil
                </button>

                <Reveal width="100%">
                    <div className="bg-gray-900/50 border border-white/5 p-8 md:p-12 backdrop-blur-sm">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-8">Mentions <span className="text-swift-coral">Légales</span></h1>

                        <div className="space-y-8 text-gray-300 leading-relaxed">
                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 uppercase">1. Éditeur du site</h2>
                                <p>Le site Swift Esports Events est édité par l'association Swift Esports.</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>Statut :</strong> Association loi 1901</li>
                                    <li><strong>Siège social :</strong> [Adresse de l'association]</li>
                                    <li><strong>Email :</strong> swifteventesport@gmail.com</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 uppercase">2. Hébergement</h2>
                                <p>Le site est hébergé par :</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>Hébergeur :</strong> GitHub Pages / Vercel (à confirmer selon déploiement)</li>
                                    <li><strong>Adresse :</strong> [Adresse de l'hébergeur]</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 uppercase">3. Collecte de données</h2>
                                <p>Les informations recueillies sur le site sont enregistrées dans un fichier informatisé par Swift Esports pour la gestion des inscriptions aux tournois. Elles sont conservées pendant la durée nécessaire à la gestion de la relation avec l'utilisateur.</p>
                                <p className="mt-2">Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : swifteventesport@gmail.com</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 uppercase">4. Cookies</h2>
                                <p>Le site peut être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.</p>
                            </section>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};
