import React, { Fragment } from "react";

import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
import Services from "../components/Services-section/Services";

import Contact from "../components/Contact/Contact";


const Home = () => {
  return (
    
    <Fragment>
      
      <HeroSection />
      <Services />
     
      <AboutUs />
      <Contact />
      
    </Fragment>
  );
};

export default Home;
