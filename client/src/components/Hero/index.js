import React from "react";
import "./style.css";
import HeaderPic from "./sacra-header.png"

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${HeaderPic})` }}>
      {/* {props.children} */}
      <h1>Sacramento Management Company</h1>
    </div>
  );
}

export default Hero;
