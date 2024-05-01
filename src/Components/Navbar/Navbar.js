import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const handleColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", handleColor);

  return (
    <nav className={color && "color"}>
      <div className="logo">
        <h1>GLX TRVL</h1>
      </div>

      <div className={click ? "menu active" : "menu"}>
        <Link to="/">Home</Link>
        <Link to="/traning">Training</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes style={{ color: "white" }} size={23} />
        ) : (
          <FaBars style={{ color: "white" }} size={23} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
