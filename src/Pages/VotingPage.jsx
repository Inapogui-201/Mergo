import React, { useState } from 'react';
import { Trophy, Heart, ChevronRight, ShoppingCart, Gift, CreditCard, CheckCircle } from 'lucide-react';

const VotingPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [votingStep, setVotingStep] = useState(1);
  const [additionalVotes, setAdditionalVotes] = useState(5);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Liste fictive de candidates
  const candidates = [
        { id: 1, name: "Emma Laurent", votes: 1245, category: "Mode", image: "/public/candidate.jpg", bio: "Passionnée de mode depuis son plus jeune âge, Emma crée des designs innovants qui allient élégance et durabilité." },
        { id: 2, name: "Sophie Martin", votes: 1120, category: "Sport", image: "/public/candidate.jpg", bio: "Athlète accomplie en athlétisme, Sophie a remporté plusieurs médailles nationales et inspire les jeunes sportifs." },
        { id: 3, name: "Léa Dubois", votes: 980, category: "Danse", image: "/public/candidate.jpg", bio: "Danseuse contemporaine, Léa exprime à travers ses chorégraphies des émotions profondes qui touchent tous les spectateurs." },
        { id: 4, name: "Julia Petit", votes: 875, category: "Art", image: "/public/candidate.jpg", bio: "Artiste peintre autodidacte, Julia explore dans ses œuvres les thèmes de la nature et de l'identité." },
   
   ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCandidateSelect = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleVotesChange = (value) => {
    if (additionalVotes + value >= 5 && additionalVotes + value <= 100) {
      setAdditionalVotes(additionalVotes + value);
    }
  };

  const handlePromoToggle = () => {
    setShowPromoCode(!showPromoCode);
  };

  const calculateTotal = () => {
    return (additionalVotes / 5).toFixed(2);
  };

  const nextStep = () => {
    setVotingStep(votingStep + 1);
  };

  const prevStep = () => {
    setVotingStep(votingStep - 1);
  };

  // Rendu des différentes étapes du vote
  const renderStepContent = () => {
    switch (votingStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Choisissez votre candidate</h2>
            <p className="text-gray-600">Sélectionnez la candidate que vous souhaitez soutenir dans cette compétition</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {candidates.map(candidate => (
                <div 
                  key={candidate.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedCandidate?.id === candidate.id ? 'border-[#2AB4C4] bg-[#2AB4C4]/5 ring-2 ring-[#2AB4C4]/20' : 'border-gray-200 hover:border-[#2AB4C4]/50'}`}
                  onClick={() => handleCandidateSelect(candidate)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                      <img src={candidate.image} alt={candidate.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{candidate.name}</h3>
                      <p className="text-sm text-gray-500">Catégorie: {candidate.category}</p>
                      <div className="mt-1 text-[#2AB4C4] flex items-center">
                        <Trophy size={14} className="mr-1" />
                        <span className="text-sm">{candidate.votes.toLocaleString()} votes</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                className="px-6 py-3 bg-[#2AB4C4] text-white font-medium rounded-lg hover:bg-[#1da3b3] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
                disabled={!selectedCandidate}
                onClick={nextStep}
              >
                Continuer <ChevronRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Vos informations</h2>
            <p className="text-gray-600">Veuillez fournir vos coordonnées pour confirmer votre vote</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB4C4]" 
                  placeholder="Votre nom"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB4C4]" 
                  placeholder="Votre adresse email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB4C4]" 
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="mr-3 text-blue-500">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Votre vote compte!</h4>
                  <p className="text-sm text-blue-600">Chaque votant a droit à un vote gratuit. À l'étape suivante, vous pourrez ajouter des votes supplémentaires pour augmenter les chances de victoire de votre candidate.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                onClick={prevStep}
              >
                Retour
              </button>
              
              <button
                className="px-6 py-3 bg-[#2AB4C4] text-white font-medium rounded-lg hover:bg-[#1da3b3] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
                disabled={!formData.name || !formData.email || !formData.phone}
                onClick={nextStep}
              >
                Continuer <ChevronRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Votes supplémentaires</h2>
            <p className="text-gray-600">Ajoutez des votes supplémentaires pour augmenter les chances de victoire de votre candidate</p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                  <div className="font-medium text-gray-800">Vous avez 1 vote gratuit</div>
                  <div className="text-sm text-gray-500">Ajoutez des votes supplémentaires pour soutenir davantage</div>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart size={18} className="text-red-500" />
                  <span className="font-bold text-lg">1</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Votes supplémentaires</label>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button 
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-lg"
                    onClick={() => handleVotesChange(-5)}
                  >
                    -
                  </button>
                  <div className="flex-1 text-center py-2 font-medium">{additionalVotes} votes</div>
                  <button 
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-lg"
                    onClick={() => handleVotesChange(5)}
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>Minimum: 5 votes</span>
                  <span>Maximum: 100 votes</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm mb-4">
                <div className="flex items-center">
                  <CreditCard size={20} className="text-[#2AB4C4] mr-2" />
                  <span className="font-medium">Paiement direct</span>
                </div>
                <div className="text-lg font-semibold">{calculateTotal()}$</div>
              </div>
              
              <div>
                <button 
                  className="w-full py-3 text-center text-gray-700 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  onClick={handlePromoToggle}
                >
                  <Gift size={18} className="mr-2 text-[#2AB4C4]" />
                  {showPromoCode ? "Masquer le code promo" : "J'ai un code promo"}
                </button>
                
                {showPromoCode && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Code promotionnel</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB4C4]" 
                      placeholder="Entrez votre code promo"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Achetez des produits pour obtenir plus de votes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg border border-gray-200 hover:border-[#2AB4C4] transition-colors">
                  <div className="text-center p-2">
                    <div className="w-16 h-16 bg-gray-100 mx-auto mb-2 rounded-full flex items-center justify-center">
                      <ShoppingCart size={24} className="text-gray-500" />
                    </div>
                    <h4 className="font-medium">T-shirt EMPOWER</h4>
                    <div className="text-sm text-gray-500">50 votes</div>
                    <div className="mt-2 text-[#2AB4C4] font-semibold">15$</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200 hover:border-[#2AB4C4] transition-colors">
                  <div className="text-center p-2">
                    <div className="w-16 h-16 bg-gray-100 mx-auto mb-2 rounded-full flex items-center justify-center">
                      <ShoppingCart size={24} className="text-gray-500" />
                    </div>
                    <h4 className="font-medium">Casquette EMPOWER</h4>
                    <div className="text-sm text-gray-500">30 votes</div>
                    <div className="mt-2 text-[#2AB4C4] font-semibold">10$</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200 hover:border-[#2AB4C4] transition-colors">
                  <div className="text-center p-2">
                    <div className="w-16 h-16 bg-gray-100 mx-auto mb-2 rounded-full flex items-center justify-center">
                      <ShoppingCart size={24} className="text-gray-500" />
                    </div>
                    <h4 className="font-medium">Mug EMPOWER</h4>
                    <div className="text-sm text-gray-500">20 votes</div>
                    <div className="mt-2 text-[#2AB4C4] font-semibold">8$</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                onClick={prevStep}
              >
                Retour
              </button>
              
              <button
                className="px-6 py-3 bg-[#2AB4C4] text-white font-medium rounded-lg hover:bg-[#1da3b3] transition-colors flex items-center"
                onClick={nextStep}
              >
                Continuer <ChevronRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle size={32} className="text-green-500" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900">Merci pour votre vote!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Votre vote pour <span className="font-semibold">{selectedCandidate?.name}</span> a été enregistré avec succès.
              {additionalVotes > 0 && ` Vous avez ajouté ${additionalVotes} votes supplémentaires.`}
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto">
              <div className="font-medium text-gray-800 mb-2">Résumé de votre vote</div>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-500">Candidate:</span>
                  <span className="font-medium">{selectedCandidate?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Vote gratuit:</span>
                  <span className="font-medium">1 vote</span>
                </div>
                {additionalVotes > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Votes supplémentaires:</span>
                    <span className="font-medium">{additionalVotes} votes</span>
                  </div>
                )}
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-gray-700 font-medium">Total:</span>
                  <span className="font-bold">{1 + additionalVotes} votes</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <button
                className="px-6 py-3 bg-[#2AB4C4] text-white font-medium rounded-lg hover:bg-[#1da3b3] transition-colors"
                onClick={() => window.location.reload()}
              >
                Retour à l'accueil
              </button>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg max-w-md mx-auto mt-8">
              <div className="text-sm text-blue-700">
                Partagez ce concours avec vos amis et votre famille pour augmenter les chances de victoire de votre candidate préférée!
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2AB4C4]/90 to-[#2AB4C4] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-white/10 -ml-32 -mb-20"></div>
          <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-white/5 -mr-48 -mt-48"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 bg-white/20 rounded-full text-sm font-medium">
              EMPOWER 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Votez pour votre Favorite</h1>
            <p className="text-xl opacity-90 mb-6">Soutenez les talents exceptionnels et aidez-les à remporter ce concours prestigieux</p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="relative">
            <div className="absolute top-3 left-0 w-full h-1 bg-gray-200 rounded-full"></div>
            <div 
              className="absolute top-3 left-0 h-1 bg-[#2AB4C4] rounded-full transition-all duration-500" 
              style={{ width: `${(votingStep / 4) * 100}%` }}
            ></div>
            
            <div className="flex justify-between relative">
              <div className="flex flex-col items-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${votingStep >= 1 ? 'bg-[#2AB4C4] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <div className="text-xs mt-1 font-medium">Candidate</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${votingStep >= 2 ? 'bg-[#2AB4C4] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <div className="text-xs mt-1 font-medium">Informations</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${votingStep >= 3 ? 'bg-[#2AB4C4] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <div className="text-xs mt-1 font-medium">Votes</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${votingStep >= 4 ? 'bg-[#2AB4C4] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  4
                </div>
                <div className="text-xs mt-1 font-medium">Confirmation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
          {renderStepContent()}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block mb-2 px-3 py-1 bg-[#2AB4C4]/10 text-[#2AB4C4] rounded-full text-sm font-medium">
              STATISTIQUES DE VOTE
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Le Concours en Chiffres</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#2AB4C4] mb-1">25K+</div>
              <div className="text-gray-600 text-sm">Votes Totaux</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#2AB4C4] mb-1">60+</div>
              <div className="text-gray-600 text-sm">Candidates</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#2AB4C4] mb-1">7K+</div>
              <div className="text-gray-600 text-sm">Votants</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#2AB4C4] mb-1">20</div>
              <div className="text-gray-600 text-sm">Jours Restants</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;