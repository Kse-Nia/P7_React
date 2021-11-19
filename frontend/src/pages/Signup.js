import * as React from "react";

function Signup() {
  return (
    <div className="ContainerL">
      <div className="Card">
        <h2> S'inscrire </h2>
        <div className="FormSignup">
          <input
            className="Input"
            type="text"
            placeholder="Nom d'utilisateur"
          />
          <input
            className="Input"
            type="text"
            placeholder="Votre mot de passe"
          />
          <button className="Validation">Créer le compte</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
