import React from 'react'

const HowToVote = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Comment Voter</h1>
      <p className="text-gray-700 mb-4">
        Suivez ces étapes simples pour voter pour votre candidate préférée :
      </p>
      <ol className="list-decimal list-inside space-y-4 text-gray-700">
        <li>
          <strong>Inscrivez-vous :</strong> Créez un compte sur notre plateforme
          en utilisant votre adresse e-mail.
        </li>
        <li>
          <strong>Connectez-vous :</strong> Accédez à votre compte en entrant
          vos identifiants.
        </li>
        <li>
          <strong>Explorez les candidates :</strong> Parcourez la liste des
          candidates et découvrez leurs profils.
        </li>
        <li>
          <strong>Votez :</strong> Cliquez sur le bouton "Voter" pour soutenir
          votre candidate préférée. Vous pouvez voter une fois par jour.
        </li>
        <li>
          <strong>Partagez :</strong> Encouragez vos amis et votre famille à
          voter en partageant le lien de la plateforme.
        </li>
      </ol>
      <p className="text-gray-700 mt-6">
        Merci de votre participation et de votre soutien à nos candidates !
      </p>
    </div>
  )
}

export default HowToVote