import * as React from "react";
import "./Home.css";
import Social from "./Medias/socialpicture.jpg";
import Sharing from "./Medias/sharing.jpg";

function Home() {
  return (
    <>
      <main>
        <div className="Container">
          <div className="Container1">
            <div className="presentation">
              <h1> Bienvenue sur Groupomania </h1>
              <p>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..."
              </p>
              <br />
              <p>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..."
              </p>
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
          <div className="Container2">
            <div className="Information">
              <h3>Lorem Ipsum</h3>
              <img src={Sharing} alt="" className="InformationPicture" />
              <div className="BlocText">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum lorem Ipsum lorem</p>
              </div>
            </div>
            <div className="Information">
              <h3>Lorem Ipsum</h3>
              <img src={Sharing} alt="" className="InformationPicture" />
              <div className="BlocText">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum lorem Ipsum lorem</p>
              </div>
            </div>
            <div className="Information">
              <h3>Lorem Ipsum</h3>
              <img src={Sharing} alt="" className="InformationPicture" />
              <div className="BlocText">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum lorem Ipsum lorem</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
