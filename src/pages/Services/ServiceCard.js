import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, description, rating } = service;
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/services/${_id}`);
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img className="w-full h-60 rounded" src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)} ....read more</p>
        <div className="flex justify-center item-center">
          <p>Price: {price} $</p>
          <p>Ratings: {rating}</p>
        </div>
        <div className="card-actions justify-end">
          <button onClick={handleDetails} className="btn btn-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
