import React,{useRef} from "react";
import "./Hero.css";
import logo from "../../assets/real_Ai logo.svg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Landing from "../../Landing";
const Hero = () => {
  const landingRef = useRef(null);

  const scrollToLanding = () => {
       if(landingRef.current){
        landingRef.current.scrollIntoView({ behavior: 'smooth' });
       }
  };

  return (
   <>
    
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
          {/* <div className="hero-input_Prompt">Enter Prompt</div> */}
          <div className="hero-generate_img" onClick={scrollToLanding}>Generate Image &nbsp; <ArrowForwardIosIcon className="forward-icon"/></div>
        </div>
      </div>
      <Landing ref={landingRef} /> {/* Pass the ref to Landing */}
    </>
  );
};

export default Hero;
