import React from "react";
import "./Components.css";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/" className="Link">
        Accueil{" "}
      </a>{" "}
      <a href="/register" className="Link">
        S 'inscrire{" "}
      </a>{" "}
      <a href="/login" className="Link">
        Se connecter{" "}
      </a>{" "}
      <div className="logo"> {/*  <img src="" alt="" /> */} </div>{" "}
    </div>
  );
}

export default Navbar;
