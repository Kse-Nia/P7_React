import React from "react";
import "./Components.css";
import Logo from "../pages/Medias/icon-left-font.png";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/" className="Link">
        Accueil
      </a>
      <a href="/register" className="Link">
        S 'inscrire
      </a>
      <a href="/login" className="Link">
        Se connecter
      </a>
      <div className="Logo">
        <img src={Logo} className="Navbarlogo" alt="Groupomania logo" />
      </div>
    </div>
  );
}

export default Navbar;
