import React from "react";
import "./index.scss"
import gplay from "../../assets/pic/header/gplay.png";
import itunes from "../../assets/pic/header/itunes.png";


const Header = () => {

  return (
    <div className="header">
      <a className="button-play" href="https://play.google.com/apps/testing/com.DefaultCompany.Oddal_test">PLAY</a>
      <div class="store-buttons">
        <a href="https://play.google.com/apps/testing/com.DefaultCompany.Oddal_test"><img src={gplay} alt="Download from Google Play" /></a>
        <a href="#"><img src={itunes} alt="Download from ITunes" /></a>
      </div>
    </div>
  );
};

export default Header;
