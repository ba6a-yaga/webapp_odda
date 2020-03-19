import React from "react";
import footerImg from "../../assets/pic/Niz.png";
import "./index.scss"


const Hero = props => {
  return (
    <div className={`footer ${props.className}`}>
      <img src={footerImg} alt="dd"/>
      <div className="desc">
        <h3>YOU VIKING!</h3>
        <h1>YOU HERO!</h1>
        <div ><a className="button-play" href="https://play.google.com/apps/testing/com.DefaultCompany.Oddal_test">PLAY</a></div>
      </div>
    </div>

  );
};

export default Hero;
