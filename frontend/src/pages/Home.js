import * as React from "react";
import "./Home.css";
import Social from "./Medias/socialpicture.jpg";

function Home() {
  return (
    <>
      <main>
        <h1> Bienvenue sur Groupomania </h1>
        <div className="container">
          <div className="presentation">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className="presentation">
            <img
              className="HomePicture"
              src={Social}
              alt="social network picture"
            />
          </div>
          <div className="container-socialpicture"></div>
        </div>
      </main>{" "}
    </>
  );
}

export default Home;
