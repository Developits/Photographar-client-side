import React from "react";

const ServiceCard = ({ service }) => {
  const { img, price, title, description, rating } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)} ....read more</p>
        <div>
          <div>Price: {price} $</div>
          <div>Ratings: {rating}</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
