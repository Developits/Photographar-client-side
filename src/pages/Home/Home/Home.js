import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import Services from "../../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Services api="services"></Services>
      <div className="text-center mt-16">
        <Link to="/services">
          <button className="btn btn-accent">See All</button>
        </Link>
      </div>
      <About></About>
    </div>
  );
};

export default Home;
