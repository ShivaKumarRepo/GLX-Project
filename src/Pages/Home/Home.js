import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import "../Home/Components/Homestyle.css";
import About from "./Components/About";
import SliderService from "./Components/SliderService";
import CalltoAction from "./Components/CalltoAction";
import Faq from "./Components/Faq";
import Fotter from "../../Components/Fotter/Fotter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About heading="About Space" />
      <SliderService />
      <CalltoAction />
      <Faq />
      <Fotter />
    </>
  );
};

export default Home;
