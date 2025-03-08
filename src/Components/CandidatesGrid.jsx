import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Heart, ArrowRight, ChevronLeft, ChevronRight, Hash, X } from "lucide-react";

const CandidatesGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFilter, setCurrentFilter] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSection, setCurrentSection] = useState(1);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Options de filtre
  const filterOptions = ["Tous", "Mode", "Sport", "Danse", "Art"];
  
  // Données fictives des candidates pour la démonstration
  const candidates = [
    { id: 1, name: "Emma Laurent", votes: 1245, category: "Mode", image: "/public/candidate.jpg", bio: "Passionnée de mode depuis son plus jeune âge, Emma crée des designs innovants qui allient élégance et durabilité." },
    { id: 2, name: "Sophie Martin", votes: 1120, category: "Sport", image: "/public/candidate.jpg", bio: "Athlète accomplie en athlétisme, Sophie a remporté plusieurs médailles nationales et inspire les jeunes sportifs." },
    { id: 3, name: "Léa Dubois", votes: 980, category: "Danse", image: "/public/candidate.jpg", bio: "Danseuse contemporaine, Léa exprime à travers ses chorégraphies des émotions profondes qui touchent tous les spectateurs." },
    { id: 4, name: "Julia Petit", votes: 875, category: "Art", image: "/public/candidate.jpg", bio: "Artiste peintre autodidacte, Julia explore dans ses œuvres les thèmes de la nature et de l'identité." },
    { id: 5, name: "Aurélie Moreau", votes: 760, category: "Mode", image: "/public/candidate.jpg", bio: "Styliste spécialisée dans la mode éthique, Aurélie révolutionne l'industrie avec ses créations responsables." },
    { id: 6, name: "Camille Roux", votes: 680, category: "Sport", image: "/public/candidate.jpg", bio: "Championne de natation, Camille s'entraîne pour les prochaines compétitions internationales avec détermination." },
    { id: 7, name: "Marie Bernard", votes: 645, category: "Danse", image: "/public/candidate.jpg", bio: "Formée au ballet classique, Marie combine tradition et modernité dans ses performances spectaculaires." },
    { id: 8, name: "Clara Lemoine", votes: 590, category: "Art", image: "/public/candidate.jpg", bio: "Sculptrice talentueuse, Clara transforme des matériaux recyclés en œuvres d'art fascinantes." },
    { id: 9, name: "Zoé Girard", votes: 820, category: "Mode", image: "/public/candidate.jpg", bio: "Designer de bijoux contemporains, Zoé puise son inspiration dans ses voyages à travers le monde." },
    { id: 10, name: "Lucie Thomas", votes: 470, category: "Sport", image: "/public/candidate.jpg", bio: "Grimpeuse professionnelle, Lucie repousse constamment ses limites en relevant de nouveaux défis." },
    { id: 11, name: "Inès Leroy", votes: 430, category: "Danse", image: "/public/candidate.jpg", bio: "Spécialiste de danse latine, Inès a remporté plusieurs concours internationaux grâce à son style unique." },
    { id: 12, name: "Jade Bonnet", votes: 380, category: "Art", image: "/public/candidate.jpg", bio: "Photographe de talent, Jade capture des instants de vie avec une sensibilité remarquable." },
    // Ajout de plus de candidates pour tester la pagination avancée
    ...Array.from({ length: 48 }, (_, i) => ({
      id: i + 13,
      name: `Candidate ${i + 13}`,
      votes: Math.floor(Math.random() * 1000) + 200,
      category: filterOptions[Math.floor(Math.random() * (filterOptions.length - 1)) + 1],
      image: "/public/candidate.jpg",
      bio: `Biographie de la candidate ${i + 13}. Découvrez son parcours exceptionnel et ses ambitions.`
    }))
  ];
  
  // Logique de filtrage et de recherche
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          candidate.id.toString().includes(searchTerm);
    const matchesFilter = currentFilter === "Tous" || candidate.category === currentFilter;
    return matchesSearch && matchesFilter;
  });
  
  // Logique de pagination avancée
  const candidatesPerPage = 8; // Modifié de 12 à 8
  const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);
  const pagesPerSection = 5; // Nombre de pages à afficher par section
  const totalSections = Math.ceil(totalPages / pagesPerSection);
  
  // Calcul des pages à afficher dans la section actuelle
  const startPage = (currentSection - 1) * pagesPerSection + 1;
  const endPage = Math.min(startPage + pagesPerSection - 1, totalPages);
  
  // Gestion des changements de section
  useEffect(() => {
    // Si la page actuelle n'est pas dans la section actuelle, ajuster la section
    if (currentPage < startPage || currentPage > endPage) {
      const newSection = Math.ceil(currentPage / pagesPerSection);
      setCurrentSection(newSection);
    }
  }, [currentPage, startPage, endPage]);
  
  // Fonction pour changer de section
  const changeSection = (newSection) => {
    if (newSection >= 1 && newSection <= totalSections) {
      setCurrentSection(newSection);
      // Aller à la première page de la nouvelle section
      setCurrentPage((newSection - 1) * pagesPerSection + 1);
    }
  };
  
  const paginatedCandidates = filteredCandidates.slice(
    (currentPage - 1) * candidatesPerPage,
    currentPage * candidatesPerPage
  );
  
  // Animation pour les éléments de la grille
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Animation pour la modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  // Fonction pour ouvrir la modal avec les détails de la candidate
  const openCandidateModal = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
    // Empêcher le défilement du body quand la modal est ouverte
    document.body.style.overflow = 'hidden';
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedCandidate(null);
    // Réactiver le défilement du body
    document.body.style.overflow = 'auto';
  };

  // Gérer la touche Echap pour fermer la modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27 && showModal) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      // S'assurer que le défilement est réactivé lorsque le composant est démonté
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Candidates</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos talentueuses candidates et votez pour votre favorite. 
            Chaque vote compte dans cette compétition passionnante !
          </p>
          <p className="text-md text-gray-600 max-w-3xl mx-auto mt-2">
            Vous pouvez voter en utilisant le numéro de votre candidate préférée.
          </p>
        </div>
        
        {/* Barre de recherche et filtres */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Recherche par nom ou numéro..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-[#2AB4C4] focus:border-[#2AB4C4] bg-white text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative w-full md:w-48">
            <select
              value={currentFilter}
              onChange={(e) => setCurrentFilter(e.target.value)}
              className="block w-full py-3 pl-3 pr-10 border border-gray-300 bg-white rounded-lg appearance-none focus:ring-[#2AB4C4] focus:border-[#2AB4C4] text-gray-900"
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Indicateur de résultats */}
        <div className="mb-6 text-gray-600">
          Affichage de {Math.min(filteredCandidates.length, (currentPage - 1) * candidatesPerPage + 1)} - {Math.min(currentPage * candidatesPerPage, filteredCandidates.length)} sur {filteredCandidates.length} candidates
        </div>
        
        {/* Grille des candidates */}
        {paginatedCandidates.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {paginatedCandidates.map((candidate) => (
              <motion.div 
                key={candidate.id}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img 
                    src={candidate.image} 
                    alt={candidate.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="bg-[#2AB4C4]/80 text-white rounded-full flex items-center justify-center p-2 backdrop-blur-sm">
                      <Heart size={16} />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 flex space-x-2">
                    <div className="bg-white/80 text-[#2AB4C4] text-sm font-medium rounded-full px-3 py-1 backdrop-blur-sm">
                      {candidate.category}
                    </div>
                  </div>
                  
                  {/* Badge numéro de candidate */}
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-black/70 text-white flex items-center gap-1 rounded-full px-3 py-1 backdrop-blur-sm font-semibold">
                      <Hash size={14} />
                      <span>{candidate.id}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{candidate.name}</h3>
                    <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                      <Hash size={14} className="text-gray-600" />
                      <span className="font-medium text-gray-800">{candidate.id}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-600 text-sm">
                      <span className="font-semibold text-[#2AB4C4]">{candidate.votes.toLocaleString()}</span> votes
                    </div>
                    <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#2AB4C4] rounded-full"
                        style={{ width: `${Math.min(candidate.votes / 15, 100)}%` }}
                      />
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openCandidateModal(candidate)}
                    className="flex items-center justify-center gap-2 w-full py-2 mt-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200 font-medium"
                  >
                    Voir profil
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">Aucune candidate trouvée</div>
            <button 
              onClick={() => { setSearchTerm(""); setCurrentFilter("Tous"); }}
              className="text-[#2AB4C4] font-medium hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
        
        {/* Pagination améliorée avec navigation par sections */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center mt-12 gap-2">
            {/* Bouton première page */}
            <button
              onClick={() => { setCurrentPage(1); setCurrentSection(1); }}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Première page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </svg>
            </button>
            
            {/* Bouton section précédente */}
            <button
              onClick={() => changeSection(currentSection - 1)}
              disabled={currentSection === 1}
              className="p-2 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Section précédente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            {/* Bouton page précédente */}
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Page précédente"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Numéros de page dans la section actuelle */}
            {Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
              const pageNumber = startPage + index;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`w-10 h-10 flex items-center justify-center rounded-md ${
                    pageNumber === currentPage
                      ? "bg-[#2AB4C4] text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  title={`Page ${pageNumber}`}
                >
                  {pageNumber}
                </button>
              );
            })}
            
            {/* Bouton page suivante */}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Page suivante"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Bouton section suivante */}
            <button
              onClick={() => changeSection(currentSection + 1)}
              disabled={currentSection === totalSections}
              className="p-2 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Section suivante"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            
            {/* Bouton dernière page */}
            <button
              onClick={() => { 
                setCurrentPage(totalPages); 
                setCurrentSection(totalSections); 
              }}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Dernière page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </button>
            
            {/* Indicateur de section */}
            <div className="ml-4 text-gray-600 text-sm flex items-center">
              <span>Section {currentSection} sur {totalSections}</span>
            </div>
          </div>
        )}
      </div>

      {/* Modal de profil */}
      <AnimatePresence>
        {showModal && selectedCandidate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="absolute inset-0" onClick={closeModal}></div>
            <motion.div 
              className="relative bg-white rounded-2xl overflow-hidden shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>

              {/* Image de couverture */}
              <div className="relative w-full h-56">
                <img 
                  src={selectedCandidate.image} 
                  alt={selectedCandidate.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-4 flex space-x-2">
                  <div className="bg-[#2AB4C4] text-white font-medium rounded-full px-3 py-1">
                    {selectedCandidate.category}
                  </div>
                  <div className="bg-black/70 text-white flex items-center gap-1 rounded-full px-3 py-1 backdrop-blur-sm font-semibold">
                    <Hash size={14} />
                    <span>{selectedCandidate.id}</span>
                  </div>
                </div>
              </div>

              {/* Contenu du profil */}
              <div className="p-6 overflow-y-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedCandidate.name}</h2>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#2AB4C4]/10 text-[#2AB4C4] text-sm font-medium rounded-full px-3 py-1">
                    {selectedCandidate.category}
                  </div>
                  <div className="text-gray-600 text-sm ml-2">
                    <span className="font-semibold text-[#2AB4C4]">{selectedCandidate.votes.toLocaleString()}</span> votes
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">À propos</h3>
                <p className="text-gray-600 mb-6">{selectedCandidate.bio}</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Statistiques</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Progression</span>
                        <span className="text-sm font-medium text-[#2AB4C4]">
                          {Math.round((selectedCandidate.votes / Math.max(...candidates.map(c => c.votes))) * 100)}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#2AB4C4] rounded-full"
                          style={{ width: `${(selectedCandidate.votes / Math.max(...candidates.map(c => c.votes))) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Classement</span>
                        <span className="text-sm font-medium text-[#2AB4C4]">
                          {candidates.sort((a, b) => b.votes - a.votes).findIndex(c => c.id === selectedCandidate.id) + 1} / {candidates.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full py-3 px-4 bg-[#2AB4C4] hover:bg-[#1da3b3] text-white font-medium rounded-lg transition-colors">
                    Voter pour {selectedCandidate.name}
                  </button>
                  <div className="text-center text-sm text-gray-500">
                    Vote gratuit disponible une fois par personne.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CandidatesGrid;