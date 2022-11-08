import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Services></Services>
      <About></About>
    </div>
  );
};

export default Home;
