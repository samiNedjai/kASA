import React from 'react';

 function Error({ message }) {
     document.title = "kasa-Erreur 404";
    return (
        <div className="error">
      <div className="error-container">
        <h1>404</h1>
        <h2>
        Oups! {message || "La page que vous demandez n'existe pas."}
        </h2>
      </div>
      <a className="error-redirect" href="/">
        Retournez sur la page d'accueil
      </a>
    </div>
    );
}
export default Error;