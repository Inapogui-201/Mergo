import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/Mergo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Candidates", path: "/candidatures" },
    { name: "A propos", path: "/about" },
    { name: "Contact", path: "/contact" },
    ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <img src={logo} alt="Mergo Logo" className="h-12 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-[#2AB4C4] px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#2AB4C4] transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/inscription"
                className="px-5 py-2 text-base font-medium text-gray-700 hover:text-[#2AB4C4] transition-colors duration-200"
              >
                S'inscrire
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/login"
                className="px-6 py-3 text-base font-medium text-white bg-[#2AB4C4] rounded-md hover:bg-[#229DAB] transition-colors duration-200 shadow-md"
              >
                Se connecter
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#2AB4C4] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg rounded-b-lg mx-4 mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <Link
                    to={link.path}
                    className="block px-3 py-3 text-gray-700 hover:text-[#2AB4C4] text-lg font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-4 py-4 flex flex-col space-y-3">
              <Link
                to="/login"
                className="w-full text-center py-3 text-lg font-medium text-[#2AB4C4] border border-[#2AB4C4] rounded-md hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-full text-center py-3 text-lg font-medium text-white bg-[#2AB4C4] rounded-md hover:bg-[#229DAB] transition-colors duration-200 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;