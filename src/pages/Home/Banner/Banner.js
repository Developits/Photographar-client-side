import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg?auto=compress&cs=tinysrgb&w=600")`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">I SHOOT HAPPINESS</h1>
          <p className="mb-5">
            Photography is a way of feeling, of touching, of loving. What you
            have caught on film is captured forever... it remembers little
            things, long after you have forgotten everything.
          </p>
          <button className="btn btn-primary">
            <Link to="/services">Get in touch</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
