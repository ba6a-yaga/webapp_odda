import React from "react";
import styled from "styled-components";
import footerImg from "../../assets/pic/Niz.png";
import "./index.scss"
import Wrapper from "../../components/wrapper";


const Hero = props => {
  return (
    <div className={`footer ${props.className}`}>
      <img src={footerImg} alt="dd"/>
      <div className="desc">
        <h3>YOU VIKING!</h3>
        <h1>YOU HERO!</h1>
        <div ><a className="button-play" href="#">PLAY</a></div>
      </div>
    </div>

  );
};

export default Hero;
