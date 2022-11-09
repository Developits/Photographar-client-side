import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/userreviews/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user]);
  return (
    <div className="mt-16">
      <h1 className="text-3xl mb-5 text-center font-bold">
        Thanks for your reviews
      </h1>
      <div className="my-6">
        {reviews.map((review) => (
          <div className="card w-3/4 mx-auto mt-6 bg-base-300 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={review.img} alt="" />
                </div>
              </div>
              <h2 className="card-title">{review.name}</h2>
              <p>rating: {review.rating}</p>
              <p>{review.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
