import React from "react";
import { Link } from "react-router-dom";
import "./Fotter.css";

import youtube from "../../Assets/youtube.png";
import fb from "../../Assets/facebook.webp";
import insta from "../../Assets/insta.png";
import linkedin from "../../Assets/linkedin.webp";

const Fotter = () => {
  const social = [insta, fb, linkedin, youtube];
  return (
    <>
      <footer>
        <h1>GLX TRVL</h1>
        <div className="links">
          <h3>Usefull Links</h3>
          <div className="link">
            <Link to="/">Home</Link>
            <Link to="/traning">Training</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="social">
          {social.map((item) => {
            return <img src={item} alt="" />;
          })}
        </div>
      </footer>
    </>
  );
};

export default Fotter;
