import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
    <h1 className="text-6xl font-bold text-[#2AB4C4] mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
      Page Non Trouvée
    </h2>
    <p className="text-gray-600 mb-6">
      Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-[#2AB4C4] text-white rounded-lg shadow hover:bg-[#2399a8] transition"
    >
      Retour à l'Accueil
    </Link>
  </div>
  )
}

export default NotFound