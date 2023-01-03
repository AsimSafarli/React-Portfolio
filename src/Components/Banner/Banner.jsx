import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="hundurluk">
      <div className="main">
        <div className="right">
          <img className="ox" src="Assets/ox.png" />
        </div>
        <div className="left">
          <h1 className="text-banner">CREATIVE UI </h1>
          <h1 className="text-banner-color">DESIGNER</h1>
          <button className="buton">Hire Me</button>
          <button className="butoncv" download ><span>Dowloand CV</span> <ion-icon name="download-outline"></ion-icon></button>
        </div>
        <div className="back">
        <div>
          <img
            className="bannericon"
            src="Assets/Bannericon.png"
            alt=""
            srcset=""
          />
          <img
            className="rounded float-end banner"
            src="Assets/banner.png"
            alt=""
            srcset=""
          />
          <img src="Assets/ellipse 3.png" />
        </div>
      </div>
      </div>

     
    </div>
  );
}

export default Banner;
