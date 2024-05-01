import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Fotter from "../../Components/Fotter/Fotter";
import Cards from "./Component/Cards";
import "./PricingStyle.css"

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Header heading="Pricing page" />
      <Cards />
      <Fotter />
    </>
  );
};

export default Pricing;
