import React from "react";
import "./Hero.css";
import logo from "../../assets/real_Ai logo.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={logo} alt="" />
      <h1>
        {" "}
        <span>An Intelligent Image</span> Generator, Bringing Imagination to
        Life
      </h1>
      <p>
        A Web-application for creating Realistic Images by entering prompts as
        user input.
      </p>
      <div className="hero-action">
        <div className="hero-input_Prompt">Enter Prompt</div>
        <div className="hero-generate_img">Generate Image</div>
      </div>
    </div>
  );
};

export default Hero;
