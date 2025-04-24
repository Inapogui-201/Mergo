import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Handshake, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import ORANGE from "/orange.png";
import SUPEMIR from "/supemir.png";
import SMART from "/smartafrica.jpeg";
import ETANDO from "/etando.jpg";
import IDJ from "/idj.jpg"; 
import EML from "/eml.jpg";
import JOEBRAIDS from "/joebraids.png";


const PartnersSection = () => {
  // État pour le carrousel sur mobile
  const [currentSlide, setCurrentSlide] = useState(0);
  // Définir l'état pour suivre la largeur de l'écran
  const [isMobile, setIsMobile] = useState(false);

  // Simuler des données de partenaires
  const partners = [
    {
      id: 1,
      name: "Orange",
      logo: ORANGE,
      description: "Orange est une entreprise française de télécommunications",
      website: "https://example.com/",
    },
    {
      id: 2,
      name: "Supemir",
      logo: SUPEMIR,
      description: "Diffusion et médias numériques",
      website: "https://example.com/media",
    },
    {
      id: 3,
      name: "Smart Africa",
      logo: SMART,
      description: "Partenaire écologique officiel",
      website: "https://example.com/eco",
    },
    {
      id: 4,
      name: "Etando",
      logo: ETANDO,
      description: "Partenaire écologique officiel" ,
      website: "https://example.com/eco",
    },
    {
      id: 5,
      name: "IDJ",
      logo: IDJ,
      description: "Partenaire écologique officiel",
      website: "https://example.com/eco",
    },
    {
      id: 6,
      name: "EML",
      logo: EML,
      description: "Partenaire écologique officiel",
      website: "https://example.com/eco",
    },
    {
      id: 7,
      name : "Joe Braids",
      logo: JOEBRAIDS,
      description: "Partenaire écologique officiel",
      website: "https://example.com/eco",
    },
   
  ];

  // Fonction pour avancer dans le carrousel
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === Math.ceil(partners.length / 2) - 1 ? 0 : prev + 1
    );
  };

  // Fonction pour reculer dans le carrousel
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(partners.length / 2) - 1 : prev - 1
    );
  };

  // Vérifier la taille de l'écran au chargement et lors du redimensionnement
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Vérifier à l'initialisation
    checkScreenSize();

    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener("resize", checkScreenSize);

    // Nettoyer l'écouteur d'événement lors du démontage
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="py-16 mb-5 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4  sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-[#2AB4C4]/10 text-[#2AB4C4] font-medium text-sm mb-4"
          >
            <Handshake className="inline-block mr-2" size={16} />
            Nos Partenaires
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Ils <span className="text-[#2AB4C4]">soutiennent</span> notre
            concours
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Découvrez les entreprises et organisations qui rendent possible ce
            concours de vote et contribuent à son succès.
          </motion.p>
        </div>

        {/* Contrôles de navigation pour mobile */}
        {isMobile && (
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-[#2AB4C4]/10 text-gray-600 hover:text-[#2AB4C4] transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-[#2AB4C4]/10 text-gray-600 hover:text-[#2AB4C4] transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Grille des partenaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out`}
            style={{
              transform: isMobile
                ? `translateX(-${currentSlide * 100}%)`
                : "none",
            }}
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center h-full">
                  {/* Logo agrandi */}
                  <div className="mb-4 rounded-lg w-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-40 object-contain" // Augmenter la taille de l'image
                    />
                  </div>
                  {/* Nom du partenaire */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {partner.name}
                  </h3>
                  {/* Bouton "Visiter le site" */}
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2AB4C4] hover:text-[#229DAB] font-medium transition-colors mt-auto"
                  >
                    Visiter le site
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Indicateur de diapositives pour mobile */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(partners.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-8 bg-[#2AB4C4]"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Aller à la diapositive ${index + 1}`}
                />
              )
            )}
          </div>
        )}

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6">
            Vous souhaitez devenir partenaire de notre concours de vote ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2AB4C4] text-white rounded-lg hover:bg-[#229DAB] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Devenir partenaire
            <Handshake size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;