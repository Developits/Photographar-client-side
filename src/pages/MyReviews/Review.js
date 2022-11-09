import React from "react";

const Review = () => {
  return (
    <div className="card w-3/4 mx-auto bg-base-300 shadow-xl">
      <div className="card-body items-center text-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Update</button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
