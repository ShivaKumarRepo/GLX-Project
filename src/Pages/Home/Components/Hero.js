import React from "react";
import video from "../../../Assets/space1.mp4";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <video src={video} autoPlay loop muted></video>

      <div className="content">
        <h1>Travel Galaxies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          tempora.
        </p>
        <div className="buttons">
           <Link to="/traning">Traning</Link>
           <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
