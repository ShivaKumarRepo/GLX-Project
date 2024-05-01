import React from "react";
import "./Header.css";
import Img from "../../Assets/sea.jpg";

const Header = ({ heading }) => {
  return (
    <>
      <section
        className="header"
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: "cover",
          backgroundPosition: "fixed",
        }}
      >
        <h1>{heading}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          commodi.
        </p>
      </section>
    </>
  );
};

export default Header;
