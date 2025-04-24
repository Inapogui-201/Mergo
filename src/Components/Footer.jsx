import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Vote, 
  CreditCard, 
  ShoppingBag, 
  HelpCircle, 
  CircleHelp
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et informations de l'entreprise */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Vote size={24} className="text-[#2AB4C4]" />
              <span className="text-2xl font-bold">LaMergo Vote</span>
            </div>
            <p className="text-gray-300 mb-4">
            Pionniers d'une Nouvelle Ère d'Innovation et de Performance. Nous transformons vos idées en réalité.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-[#2AB4C4]/80 transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-[#2AB4C4]/80 transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-[#2AB4C4]/80 transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300 mb-2">
              <Mail size={16} className="text-[#2AB4C4]" />
              <a href="mailto:lamergogroup@gmail.com" className="hover:text-[#2AB4C4] transition-colors">
              lamergogroup@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={16} className="text-[#2AB4C4]" />
              <a href="tel:+212629482958" className="hover:text-[#2AB4C4] transition-colors">
                +212 629482958
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#2AB4C4] transition-colors duration-300 flex items-center gap-2">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/candidates" className="text-gray-300 hover:text-[#2AB4C4] transition-colors duration-300 flex items-center gap-2">
                  Candidates
                </Link>
              </li>
             
             
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#2AB4C4] transition-colors duration-300 flex items-center gap-2">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#2AB4C4] transition-colors duration-300 flex items-center gap-2">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations sur le vote */}
          
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Comment Voter</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Vote size={20} className="text-[#2AB4C4] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Votez une fois gratuitement</span>
              </li>
              <li>
                <Link to="/help/how-to-vote" className="flex items-start gap-2 hover:text-[#2AB4C4]">
                    <CircleHelp size={20} className="text-[#2AB4C4]  mt-1 flex-shrink-0" />
                <span className="text-gray-300 hover:text-[#2AB4C4]">Comment faire pour voter</span>
                </Link>
            
              </li>
          
            </ul>
        
          </div>
        
          

          {/* Aide et support */}
          <div>
            <h3 className="text-lg font-emibold mb-4 pb-2 border-b border-gray-700">Aide & Support</h3>
            <ul className="space-y-3">
           
              <li>
                <Link to="/help/terms-of-use" className="text-gray-300 hover:text-[#2AB4C4] transition-colors duration-300 flex items-center gap-2">
                  <HelpCircle size={16} className="text-[#2AB4C4]" />
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/help/privacy-policy" className="text-gray-300 hover:text-[#2AB4C4] transition-colors duration-300 flex items-center gap-2">
                  <HelpCircle size={16} className="text-[#2AB4C4]" />
                  Politique de confidentialité
                </Link>
              </li>
           
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h4 className="font-medium text-[#2AB4C4] mb-2">Besoin d'aide ?</h4>
              <p className="text-gray-300 text-sm mb-2">Notre équipe est disponible pour répondre à vos questions.</p>
              <Link 
                to="/contact" 
                className="text-white text-sm hover:text-[#2AB4C4] transition-colors"
              >
                Contactez-nous →
              </Link>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8"></div>

        {/* Bannière de newsletter */}
        <div className="bg-[#2AB4C4]/10 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Restez informé</h3>
              <p className="text-gray-300">Recevez les dernières mises à jour sur le concours et les résultats</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB4C4] text-white"
                />
                <button className="px-5 py-2 bg-[#2AB4C4] text-white rounded-lg hover:bg-[#229DAB] transition-colors duration-300">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright et crédits */}
        <div className="text-center pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © {currentYear} LaMergo Group - Pionniers d'une Nouvelle Ère d'Innovation et de Performance
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Tous droits réservés. Système de vote développé par LaMergo Group.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;