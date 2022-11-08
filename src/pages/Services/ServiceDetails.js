import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  const { title, img, description, price, rating } = details;
  return (
    <div>
      {/* Service details section */}
      <div className="hero   min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div className=" w-1/2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <div className="flex items-center justify-evenly">
              <div>Price: {price} $</div>
              <div>Ratings: {rating}</div>
            </div>
            <div className="text-center">
              <button className="btn btn-accent">Add service</button>
            </div>
          </div>
        </div>
      </div>

      {/* review section */}
      <section>
        <p>description</p>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>rating</div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
