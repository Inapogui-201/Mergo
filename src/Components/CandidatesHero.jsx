import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Heart, Clock } from "lucide-react";

const CandidatesHeroImproved = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  // Animation variants
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
      transition: { duration: 0.5 }
    }
  };

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white pt-8 pb-16 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#2AB4C4]/5 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#2AB4C4]/10 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row">
          {/* Left column - Main content */}
          <motion.div 
            className="lg:w-7/12 lg:pr-12 mb-10 lg:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-3">
              <div className="bg-[#2AB4C4]/10 text-[#2AB4C4] font-semibold px-4 py-2 rounded-full text-sm">
                EMPOWER 2025
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Soutenez votre candidate <span className="text-[#2AB4C4]">préférée</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-6 max-w-2xl"
            >
              Découvrez nos candidates exceptionnelles et suivez l'évolution du concours jusqu'à l'annonce des résultats.
            </motion.p>
            
            {/* Statistics */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-[#2AB4C4]/10 rounded-full">
                    <Trophy size={20} className="text-[#2AB4C4]" />
                  </div>
                  <span className="font-semibold text-gray-800">Candidates</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">60+</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-[#2AB4C4]/10 rounded-full">
                    <Star size={20} className="text-[#2AB4C4]" />
                  </div>
                  <span className="font-semibold text-gray-800">Catégories</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">4</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-[#2AB4C4]/10 rounded-full">
                    <Heart size={20} className="text-[#2AB4C4]" />
                  </div>
                  <span className="font-semibold text-gray-800">Participantes</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">15K+</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Timer */}
          <motion.div 
            className="lg:w-5/12 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              {/* Decorative background */}
              <div className="absolute inset-0 transform -translate-x-4 translate-y-4 rounded-2xl bg-[#2AB4C4]/20 z-0"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-10">
                <div className="bg-[#2AB4C4] text-white py-4 px-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl">⏰ Fin du Concours</h3>
                    <span className="text-xs opacity-80">Restez informés!</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <Clock size={24} className="text-[#2AB4C4] mr-2" />
                      <h3 className="text-xl font-bold text-gray-800">Temps Restant</h3>
                    </div>
                    <p className="text-gray-600">Suivez le décompte jusqu'à la clôture du concours.</p>
                  </div>
                  
                  {/* Counter */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-gray-900">{timeLeft.days}</div>
                      <div className="text-xs text-gray-500 uppercase mt-1">Jours</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-gray-900">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-500 uppercase mt-1">Heures</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-gray-900">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-500 uppercase mt-1">Minutes</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-gray-900">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-500 uppercase mt-1">Secondes</div>
                    </div>
                  </div>
                  
                  {/* Important information */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                      <h4 className="font-medium text-amber-800 mb-1">Date limite</h4>
                      <p className="text-amber-700 text-sm">Le concours se termine le 24 Mars 2025 à minuit.</p>
                    </div>
                    
                    <div className="bg-[#2AB4C4]/5 border-l-4 border-[#2AB4C4] p-4 rounded-r-lg">
                      <h4 className="font-medium text-[#2AB4C4] mb-1">Annonce des résultats</h4>
                      <p className="text-gray-700 text-sm">Les gagnantes seront annoncées le 28 Mars 2025 lors de la cérémonie de remise des prix.</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button className="px-6 py-3 bg-[#2AB4C4] text-white font-medium rounded-lg hover:bg-[#1da3b3] transition-colors">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesHeroImproved;