import React from "react";
import "./Components.css";
import Logo from "../pages/Medias/icon-left-font.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/" className="Link">
        Accueil
      </a>{" "}
      <a href="/register" className="Link">
        S 'inscrire
      </a>
      <a href="/login" className="Link">
        Se connecter
      </a>
      <div className="logo">
        <img src={Logo} alt="Groupomania logo" />
      </div>
    </div>
  );
}

export default Navbar;
