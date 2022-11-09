import React from "react";

const Review = ({ review }) => {
  const { img, name, rating, description } = review;
  return (
    <div className="card w-3/4 mx-auto bg-base-300 shadow-xl">
      <div className="card-body items-center text-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
        <h2 className="card-title">{name}</h2>
        <p>rating: {rating}</p>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Update</button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
