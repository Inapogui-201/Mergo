import React, { useState } from 'react';
import Mergo from "../../public/afficheMergo.jpg";
import Logo from "../../public/Mergo.jpg";

const RegisterPages = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation basique
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    
    // Vérification du numéro de téléphone (format international)
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setError('Veuillez entrer un numéro de téléphone valide');
      return;
    }
    
    // Réinitialiser l'erreur si tout est valide
    setError('');
    
    // Logique d'inscription
    console.log('Données d\'inscription:', formData);
    // Ici vous ajouteriez l'appel API pour enregistrer l'utilisateur
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row bg-white">
        {/* Image à gauche */}
        <div className="md:w-1/2 relative">
          <img 
            src={Mergo}
            alt="Grand concours en l'honneur de la femme" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulaire d'inscription à droite */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-16">
              <img 
                src={Logo}
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-center mb-6">Créer un compte</h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Nom complet"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Numéro de téléphone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="flex justify-between items-center">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <div className="px-4 text-gray-500 text-sm">ou</div>
              <div className="h-px bg-gray-300 flex-grow"></div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#2AB4C4] text-white py-3 rounded-md hover:bg-[#2AB4C4]/90 transition-colors font-medium"
            >
              S'inscrire
            </button>
            
            <div className="text-center">
              <a href="/login" className="text-sm text-[#2AB4C4] hover:underline">
                Vous avez déjà un compte ? Connectez-vous
              </a>
            </div>
            
            <div className="mt-4">
              <button 
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Continuer avec Google
              </button>
            </div>

            <div className="mt-4 text-xs text-gray-500 text-center">
              En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPages;