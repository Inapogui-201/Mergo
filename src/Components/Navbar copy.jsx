import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../../public/Mergo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      {/* Top Bar - Social Media & Contact */}
      <div className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-800 text-white py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm font-medium">
            <span>Email: contact@mergo.com</span>
            <span className="mx-3">|</span>
            <span>Tel: +33 123 456 789</span>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-200 transition-transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-200 transition-transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-200 transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://wa.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-200 transition-transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`container mx-auto px-4 transition-all ${scrolled ? 'py-1' : 'py-2'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10" onClick={closeMobileMenu}>
            <img 
              src={logo} 
              alt="Mergo" 
              className={`transition-all object-contain ${scrolled ? 'h-12' : 'h-16'}`}
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="nav-link text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              Accueil
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 group-hover:after:w-full after:transition-all"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/services/web" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Développement Web</Link>
                  <Link to="/services/mobile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Applications Mobile</Link>
                  <Link to="/services/design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Design UX/UI</Link>
                  <Link to="/services/consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Consulting</Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="nav-link text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              À propos
            </Link>
            <Link 
              to="/contact" 
              className="nav-link text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Connexion
            </Link>
            <Link 
              to="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors shadow-md hover:shadow-lg font-medium"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={closeMobileMenu}
            className="text-gray-700 hover:text-blue-600"
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center flex-grow text-center space-y-8 p-4">
          <Link 
            to="/" 
            className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            onClick={closeMobileMenu}
          >
            Accueil
          </Link>
          
          {/* Mobile Services Dropdown */}
          <div className="relative w-full">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors flex items-center justify-center w-full"
            >
              Services <ChevronDown size={20} className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="mt-4 space-y-3 bg-gray-50 py-4 rounded-lg">
                <Link 
                  to="/services/web" 
                  className="block text-lg text-gray-700 hover:text-blue-600"
                  onClick={closeMobileMenu}
                >
                  Développement Web
                </Link>
                <Link 
                  to="/services/mobile" 
                  className="block text-lg text-gray-700 hover:text-blue-600"
                  onClick={closeMobileMenu}
                >
                  Applications Mobile
                </Link>
                <Link 
                  to="/services/design" 
                  className="block text-lg text-gray-700 hover:text-blue-600"
                  onClick={closeMobileMenu}
                >
                  Design UX/UI
                </Link>
                <Link 
                  to="/services/consulting" 
                  className="block text-lg text-gray-700 hover:text-blue-600"
                  onClick={closeMobileMenu}
                >
                  Consulting
                </Link>
              </div>
            )}
          </div>
          
          <Link 
            to="/about" 
            className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            onClick={closeMobileMenu}
          >
            À propos
          </Link>
          <Link 
            to="/contact" 
            className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          
          <div className="pt-8 flex flex-col space-y-4 w-full">
            <Link 
              to="/login" 
              className="text-blue-600 hover:text-blue-800 font-semibold text-xl transition-colors"
              onClick={closeMobileMenu}
            >
              Connexion
            </Link>
            <Link 
              to="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors shadow-md hover:shadow-lg font-medium text-xl"
              onClick={closeMobileMenu}
            >
              S'inscrire
            </Link>
          </div>
          
          {/* Mobile Social Icons */}
          <div className="flex space-x-6 pt-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-600 transition-all"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-pink-600 hover:text-pink-800 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://wa.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-500 hover:text-green-700 transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;