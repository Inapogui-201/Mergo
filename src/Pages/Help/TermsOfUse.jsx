import React from 'react'

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">
      Conditions d'Utilisation
    </h1>
    <p className="text-gray-700 mb-4">
      En utilisant notre plateforme, vous acceptez les conditions suivantes :
    </p>
    <ul className="list-disc list-inside space-y-4 text-gray-700">
      <li>
        Vous devez fournir des informations exactes lors de votre inscription.
      </li>
      <li>
        Vous acceptez de ne pas utiliser la plateforme à des fins illégales
        ou nuisibles.
      </li>
      <li>
        Les votes sont limités à une fois par jour par utilisateur.
      </li>
      <li>
        Nous nous réservons le droit de suspendre ou de supprimer tout compte
        en cas de violation des règles.
      </li>
      <li>
        Les données collectées sont utilisées conformément à notre politique
        de confidentialité.
      </li>
    </ul>
    <p className="text-gray-700 mt-6">
      Pour toute question, veuillez nous contacter à{" "}
      <a href="mailto:lamergogroup@gmail.com" className="text-blue-500">
      lamergogroup@gmail.com
      </a>
      .
    </p>
  </div>
  )
}

export default TermsOfUse