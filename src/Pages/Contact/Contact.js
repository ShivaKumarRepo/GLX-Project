import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Fotter from "../../Components/Fotter/Fotter";
import Form from "./Component/Form";
import "./ContactStyle.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Header heading="Contact page" />
      <Form />
      <Fotter />
    </>
  );
};

export default Contact;
