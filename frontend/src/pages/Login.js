import * as React from "react";

function Login() {
  return (
    <div className="ContainerL">
      <div className="Card">
        <h2> Se connecter </h2>
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
          <button className="Validation">Se connecter</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
