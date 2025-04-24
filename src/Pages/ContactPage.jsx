import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-Nous</h1>
            <p className="text-xl opacity-90 mb-8">Nous sommes là pour répondre à vos questions et vous accompagner dans votre participation</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Besoin d'aide?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Notre équipe est disponible pour vous aider avec toutes vos questions concernant le concours EMPOWER 2025. N'hésitez pas à nous contacter par email, téléphone ou en remplissant le formulaire.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#2AB4C4]/10 p-3 rounded-lg mr-4">
                  <Mail size={24} className="text-[#2AB4C4]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">contact@empower2025.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#2AB4C4]/10 p-3 rounded-lg mr-4">
                  <Phone size={24} className="text-[#2AB4C4]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-600">+212 629 482 958</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#2AB4C4]/10 p-3 rounded-lg mr-4">
                  <MapPin size={24} className="text-[#2AB4C4]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600">Casablanca, Maroc</p>
                </div>
              </div>
              
            
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB4C4]" 
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB4C4]" 
                  placeholder="Votre adresse email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB4C4]"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="nomination">Question sur les nominations</option>
                  <option value="voting">Aide avec les votes</option>
                  <option value="promo">Codes promotionnels</option>
                  <option value="general">Question générale</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB4C4]" 
                  placeholder="Comment pouvons-nous vous aider?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-[#2AB4C4] text-white font-medium rounded-lg hover:bg-[#1da3b3] transition-colors flex items-center justify-center"
              >
                <Send size={18} className="mr-2" /> Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
      

      {/* CTA Section */}
      <div className="bg-[#2AB4C4]/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Besoin d'une Aide Rapide?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Vous avez une question urgente? Contactez-nous directement par téléphone ou envoyez-nous un email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+212629482958" 
              className="px-6 py-3 bg-[#2AB4C4] text-white font-medium rounded-lg hover:bg-[#1da3b3] transition-colors inline-flex items-center justify-center"
            >
              <Phone size={18} className="mr-2" /> +212 629 482 958
            </a>
            <a 
              href="mailto:lamergogroup@gmail.com" 
              className="px-6 py-3 bg-white border border-[#2AB4C4] text-[#2AB4C4] font-medium rounded-lg hover:bg-[#2AB4C4]/5 transition-colors inline-flex items-center justify-center"
            >
              <Mail size={18} className="mr-2" /> lamergogroup@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;