import React from "react";
import "./style.css";
import HeaderPic from "./sacra-header.png"

function Hero(props) {
  return (
    <div className="hero text-center" alt= "Sacramento skyline businesses" style={{ backgroundImage: `url(${HeaderPic})` }}>
      <h1>Sacramento Management Company</h1>
    </div>
  );
}

export default Hero;
