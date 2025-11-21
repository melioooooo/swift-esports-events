import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from './ui/Reveal';

interface CGUProps {
    onBack: () => void;
}

export const CGU: React.FC<CGUProps> = ({ onBack }) => {
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
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-8">Conditions Générales d'Utilisation <span className="text-swift-coral">(CGU)</span></h1>

                        <div className="space-y-8 text-gray-300 leading-relaxed">
                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 uppercase">1. Objet</h2>
                                <p>Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités de mise à disposition des services du site Swift Esports Events et les conditions d'utilisation du Service par l'Utilisateur.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 uppercase">2. Accès au service</h2>
                                <p>Le Service est accessible gratuitement à tout Utilisateur disposant d'un accès à internet. Tous les coûts afférents à l'accès au Service, que ce soient les frais matériels, logiciels ou d'accès à internet sont exclusivement à la charge de l'utilisateur. Il est seul responsable du bon fonctionnement de son équipement informatique ainsi que de son accès à internet.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 uppercase">3. Propriété intellectuelle</h2>
                                <p>Les marques, logos, signes ainsi que tout le contenu du site (textes, images, son...) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.</p>
                                <p className="mt-2">L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 uppercase">4. Responsabilité</h2>
                                <p>Les sources des informations diffusées sur le site Swift Esports Events sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.</p>
                                <p className="mt-2">Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site Swift Esports Events ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l'utilisation et de l'interprétation de l'information contenue dans ce site.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 uppercase">5. Liens hypertextes</h2>
                                <p>Des liens hypertextes peuvent être présents sur le site. L'Utilisateur est informé qu'en cliquant sur ces liens, il sortira du site Swift Esports Events. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4 uppercase">6. Modification des conditions</h2>
                                <p>Swift Esports Events se réserve le droit de modifier, à tout moment et sans préavis, les présentes conditions d’utilisation afin de les adapter aux évolutions du site et/ou de son exploitation.</p>
                            </section>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};
