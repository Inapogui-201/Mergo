import React from "react";
import {
  Trophy,
  Star,
  Users,
  Award,
  Calendar,
  Globe,
  BookOpen,
  Heart,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2AB4C4]/90 to-[#2AB4C4] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-white/10 -ml-32 -mb-20"></div>
          <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-white/5 -mr-48 -mt-48"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 bg-white/20 rounded-full text-sm font-medium">
              EMPOWER 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              À Propos du Concours
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Célébrer l'excellence et mettre en lumière des talents
              exceptionnels à travers quatre catégories prestigieuses
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Chez EMPOWER 2025, nous avons pour mission de créer une plateforme
              qui identifie, célèbre et propulse les talents exceptionnels qui
              façonnent notre avenir. Notre concours met en valeur l'innovation,
              le leadership et l'impact social à travers différentes catégories.
            </p>
            <p className="text-lg text-gray-700">
              En mettant en lumière ces candidatures remarquables, nous
              inspirons la prochaine génération et créons des opportunités de
              reconnaissance, de croissance et de collaboration entre les
              participantes.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex flex-col space-y-5">
              <div className="flex items-start">
                <div className="bg-[#2AB4C4]/10 p-3 rounded-lg mr-4">
                  <Trophy size={24} className="text-[#2AB4C4]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Excellence</h3>
                  <p className="text-gray-600">
                    Reconnaître et récompenser les accomplissements
                    exceptionnels dans chaque domaine
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#2AB4C4]/10 p-3 rounded-lg mr-4">
                  <Users size={24} className="text-[#2AB4C4]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Inclusion</h3>
                  <p className="text-gray-600">
                    Favoriser la diversité des parcours et créer des
                    opportunités équitables
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#2AB4C4]/10 p-3 rounded-lg mr-4">
                  <Globe size={24} className="text-[#2AB4C4]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Impact</h3>
                  <p className="text-gray-600">
                    Mettre en avant les projets qui transforment positivement
                    notre société
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      {/* 
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-[#2AB4C4]/10 text-[#2AB4C4] rounded-full text-sm font-medium">
              CATÉGORIES
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quatre Domaines d'Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explorez nos différentes catégories qui récompensent l'innovation, la créativité et l'impact dans des domaines distincts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#2AB4C4]/10 p-3 rounded-full inline-block mb-4">
                <BookOpen size={28} className="text-[#2AB4C4]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entreprenariat</h3>
              <p className="text-gray-600 mb-4">
                Reconnaître les fondatrices de startups innovantes et les entrepreneuses qui transforment leur secteur.
              </p>
              <div className="text-[#2AB4C4] font-medium">Critères d'évaluation</div>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Innovation commerciale
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Impact économique
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Croissance durable
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#2AB4C4]/10 p-3 rounded-full inline-block mb-4">
                <Star size={28} className="text-[#2AB4C4]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technologie</h3>
              <p className="text-gray-600 mb-4">
                Célébrer les innovatrices techniques, développeuses et pionnières dans le domaine technologique.
              </p>
              <div className="text-[#2AB4C4] font-medium">Critères d'évaluation</div>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Innovation technique
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Résolution de problèmes complexes
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Accessibilité technologique
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#2AB4C4]/10 p-3 rounded-full inline-block mb-4">
                <Heart size={28} className="text-[#2AB4C4]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Art & Culture</h3>
              <p className="text-gray-600 mb-4">
                Mettre en lumière les artistes, créatrices et ambassadrices culturelles qui enrichissent notre société.
              </p>
              <div className="text-[#2AB4C4] font-medium">Critères d'évaluation</div>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Créativité et originalité
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Impact culturel
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Représentation inclusive
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#2AB4C4]/10 p-3 rounded-full inline-block mb-4">
                <Award size={28} className="text-[#2AB4C4]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Impact Social</h3>
              <p className="text-gray-600 mb-4">
                Honorer les leaders communautaires et les championnes de causes sociales importantes.
              </p>
              <div className="text-[#2AB4C4] font-medium">Critères d'évaluation</div>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Portée de l'impact social
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Durabilité des initiatives
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#2AB4C4] rounded-full mr-2"></div>
                  Engagement communautaire
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-[#2AB4C4]/10 text-[#2AB4C4] rounded-full text-sm font-medium">
            CALENDRIER
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Déroulement du Concours
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Suivez les étapes clés de notre concours, de la nomination des
            candidates jusqu'à la cérémonie finale
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-10 md:pr-16 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Inscription en ligne
                </h3>
                <p className="text-gray-600">
                  Soumettez votre candidature pour participer au concours
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="border-4 border-white bg-[#2AB4C4] rounded-full h-10 w-10 flex items-center justify-center shadow-md">
                  <Calendar size={18} className="text-white" />
                </div>
              </div>
              <div className="flex-1 pl-10 md:pl-16">
                <div className="text-[#2AB4C4] font-semibold">
                  2 Février - 30 Mars 2025
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-10 md:pr-16 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Délibération du Jury
                </h3>
                <p className="text-gray-600">
                  Évaluation des candidatures par notre panel d'experts
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="border-4 border-white bg-[#2AB4C4] rounded-full h-10 w-10 flex items-center justify-center shadow-md">
                  <Calendar size={18} className="text-white" />
                </div>
              </div>
              <div className="flex-1 pl-10 md:pl-16">
                <div className="text-[#2AB4C4] font-semibold">
                  1 Avril - 10 Avril 2025
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-10 md:pr-16 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Séance de formation
                </h3>
                <p className="text-gray-600">
                  Préparation des candidates pour l'Entreprenariat
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="border-4 border-white bg-[#2AB4C4] rounded-full h-10 w-10 flex items-center justify-center shadow-md">
                  <Calendar size={18} className="text-white" />
                </div>
              </div>
              <div className="flex-1 pl-10 md:pl-16">
                <div className="text-[#2AB4C4] font-semibold">
                  19 Avril 2025
                </div>
              </div>
            </div>

             {/* Phase 3 */}
             <div className="relative flex items-center">
              <div className="flex-1 pr-10 md:pr-16 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                 Conférence de Lancement de vote
                </h3>
                <p className="text-gray-600">
                  Présentation des candidates et de leurs projets et lancement du vote
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="border-4 border-white bg-[#2AB4C4] rounded-full h-10 w-10 flex items-center justify-center shadow-md">
                  <Calendar size={18} className="text-white" />
                </div>
              </div>
              <div className="flex-1 pl-10 md:pl-16">
                <div className="text-[#2AB4C4] font-semibold">
                  3 Mai 2025
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-10 md:pr-16 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Début de vote en ligne
                </h3>
                <p className="text-gray-600">
                  Votez pour vos candidates préférées
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="border-4 border-white bg-[#2AB4C4] rounded-full h-10 w-10 flex items-center justify-center shadow-md">
                  <Calendar size={18} className="text-white" />
                </div>
              </div>
              <div className="flex-1 pl-10 md:pl-16">
                <div className="text-[#2AB4C4] font-semibold">
                  {" "}
                  3 Mai - 26 Mai 2025
                </div>
              </div>
            </div>

            {/* Phase 6 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-10 md:pr-16 text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Cérémonie de Remise des Prix
                </h3>
                <p className="text-gray-600">
                  Annonce des gagnantes et célébration des réussites
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="border-4 border-white bg-[#2AB4C4] rounded-full h-10 w-10 flex items-center justify-center shadow-md">
                  <Calendar size={18} className="text-white" />
                </div>
              </div>
              <div className="flex-1 pl-10 md:pl-16">
                <div className="text-[#2AB4C4] font-semibold">31 Mai 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium">
              EMPOWER EN CHIFFRES
            </div>
            <h2 className="text-3xl font-bold mb-4">
              L'Impact de Notre Concours
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Découvrez comment notre concours crée un impact significatif dans
              la communauté
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2AB4C4] mb-2">60+</div>
              <div className="text-gray-300">Candidates Exceptionnelles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2AB4C4] mb-2">4</div>
              <div className="text-gray-300">Catégories Prestigieuses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2AB4C4] mb-2">15K+</div>
              <div className="text-gray-300">Supporters Engagés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2AB4C4] mb-2">12</div>
              <div className="text-gray-300">Membres du Jury</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-[#2AB4C4]/10 text-[#2AB4C4] rounded-full text-sm font-medium">
            FAQ
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes concernant
            notre concours
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Comment les gagnantes sont-elles sélectionnées?
            </h3>
            <p className="text-gray-600">
              Les gagnantes sont déterminées par une combinaison des votes du
              public et des évaluations de notre jury d'experts. Chaque
              catégorie a des critères spécifiques qui sont utilisés pour
              évaluer les candidatures.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Puis-je proposer une candidate?
            </h3>
            <p className="text-gray-600">
              Absolument! Nous encourageons les nominations de candidates
              exceptionnelles. Vous pouvez soumettre une nomination via notre
              formulaire en ligne pendant la période de nomination du 15 janvier
              au 15 février 2025.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Comment puis-je suivre les résultats du concours?
            </h3>
            <p className="text-gray-600">
              Vous pouvez suivre les résultats en temps réel sur notre
              plateforme. Les classements sont mis à jour régulièrement, et vous
              recevrez des notifications si vous vous êtes inscrit à notre
              newsletter.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Quels sont les prix pour les gagnantes?
            </h3>
            <p className="text-gray-600">
              Les gagnantes dans chaque catégorie recevront une reconnaissance
              publique, un trophée EMPOWER 2025, et un ensemble de ressources
              pour soutenir leur développement professionnel, y compris des
              opportunités de mentorat, des formations et une visibilité
              médiatique.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#2AB4C4]/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Restez Informé
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les dernières mises
            à jour sur le concours EMPOWER 2025
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2AB4C4]"
              />
              <button className="px-6 py-3 bg-[#2AB4C4] text-white font-medium rounded-r-lg hover:bg-[#1da3b3] transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
