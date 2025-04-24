import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">
      Politique de Confidentialité
    </h1>
    <p className="text-gray-700 mb-4">
      Votre confidentialité est importante pour nous. Voici comment nous
      gérons vos données :
    </p>
    <ul className="list-disc list-inside space-y-4 text-gray-700">
      <li>
        <strong>Collecte des données :</strong> Nous collectons des
        informations personnelles telles que votre nom, votre adresse e-mail
        et vos préférences de vote.
      </li>
      <li>
        <strong>Utilisation des données :</strong> Les données collectées
        sont utilisées pour améliorer votre expérience utilisateur et assurer
        le bon fonctionnement de la plateforme.
      </li>
      <li>
        <strong>Partage des données :</strong> Nous ne partageons pas vos
        données personnelles avec des tiers sans votre consentement, sauf si
        requis par la loi.
      </li>
      <li>
        <strong>Sécurité :</strong> Nous mettons en œuvre des mesures de
        sécurité pour protéger vos données contre tout accès non autorisé.
      </li>
      <li>
        <strong>Vos droits :</strong> Vous pouvez demander l'accès, la
        modification ou la suppression de vos données à tout moment.
      </li>
    </ul>
    <p className="text-gray-700 mt-6">
      Pour toute question concernant notre politique de confidentialité,
      contactez-nous à{" "}
      <a href="mailto:lamergogroup@gmail.com" className="text-blue-500">
      lamergogroup@gmail.com
      </a>
      .
    </p>
  </div>
            
  )
}

export default PrivacyPolicy