import React, { useState } from 'react';
import Mergo from "../../public/afficheMergo.jpg"
import Logo from "../../public/Mergo.jpg"


const LoginPages = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion ici
    console.log('Tentative de connexion avec:', email, password);
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

        {/* Formulaire de connexion à droite */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-16">
              <img 
                src={Logo}
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              className="w-full bg-[#2AB4C4]  text-white py-3 rounded-md hover:bg-[#2AB4C4]  transition-colors font-medium"
            >
              Connexion
            </button>
            
            <div className="text-center">
              <a href="#" className="text-sm text-[#2AB4C4]  hover:underline">
                Vous n'avez pas de compte ?
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;