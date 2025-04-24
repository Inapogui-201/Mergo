import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Vote, Trophy } from "lucide-react";
import Mergo from "../../public/afficheMergo.jpg"

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#2AB4C4]/10 to-[#2AB4C4]/5 min-h-screen flex items-center">
      {/* Éléments de fond animés */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#2AB4C4]/20 w-4 h-4 md:w-6 md:h-6"
            initial={{ 
              x: Math.random() * 100, 
              y: Math.random() * 100,
              opacity: 0.1 + Math.random() * 0.3
            }}
            animate={{ 
              x: [
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight, 
                Math.random() * window.innerHeight
              ],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 20 + Math.random() * 20, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
        
        {/* Lignes de connexion */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <pattern
            id="grid-pattern"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="#2AB4C4"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Contenu textuel */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-1 rounded-full bg-[#2AB4C4]/10 text-[#2AB4C4] font-medium text-sm mb-6"
            >
              Concours de Vote En Ligne
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Soutenez votre <span className="text-[#2AB4C4]">candidate préférée</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Votez une fois gratuitement ou achetez des votes supplémentaires pour 
              augmenter les chances de votre candidate favorite de remporter le concours.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link 
                to="/candidates" 
                className="px-8 py-4 bg-[#2AB4C4] text-white rounded-lg shadow-lg hover:bg-[#229DAB] transition-all duration-300 flex items-center justify-center gap-2 font-medium text-lg w-full sm:w-auto"
              >
                <Vote size={20} />
                Voter maintenant
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 font-medium text-lg w-full sm:w-auto"
              >
               En savoir plus
              </Link>
            </motion.div>
            
            {/* Badges flottantes */}
            {/* 
             <motion.div 
              className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <Trophy size={18} className="text-[#2AB4C4] mr-2" />
                <span className="text-sm font-medium">5 votes = 1$</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <Award size={18} className="text-[#2AB4C4] mr-2" />
                <span className="text-sm font-medium">Codes promo disponibles</span>
              </div>
            </motion.div>
            
            */}
           
          </motion.div>

          {/* Image ou illustration */}
          <motion.div 
            className="lg:w-1/2 mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src={Mergo}
                alt="Concours de vote avec Mergo" 
                className="w-full h-auto"
              />
              {/* 
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="text-white font-bold text-2xl mb-2">Vote en direct</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-white/70 text-xs">En tête</div>
                    <div className="text-white font-bold">Emma L.</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-white/70 text-xs">Votes</div>
                    <div className="text-white font-bold">2,845</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-white/70 text-xs">Participants</div>
                    <div className="text-white font-bold">15</div>
                  </div>
                </div>
                <Link 
                  to="/leaderboard" 
                  className="inline-flex items-center gap-2 text-white font-medium hover:underline"
                >
                  Voir le classement complet
                  <ArrowRight size={16} />
                </Link>
              </div>
              */}
          
            </div>
          </motion.div>
        </div>
        
        {/* Statistiques en bas */}
        {/* 
         <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-[#2AB4C4] font-bold text-3xl mb-2">5,280+</div>
            <div className="text-gray-600">Votes comptabilisés</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-[#2AB4C4] font-bold text-3xl mb-2">15</div>
            <div className="text-gray-600">Candidates en compétition</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-[#2AB4C4] font-bold text-3xl mb-2">3</div>
            <div className="text-gray-600">Jours restants</div>
          </div>
        </motion.div>
        */}
       
      </div>
    </div>
  );
};

export default HeroSection;