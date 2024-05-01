import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Fotter from "../../Components/Fotter/Fotter";
import About from "../Home/Components/About";

const Traning = () => {
  return (
    <>
      <Navbar />
      <Header heading="Traning page" />
      <About heading="Traning on space" />
      <Fotter />
    </>
  );
};

export default Traning;
