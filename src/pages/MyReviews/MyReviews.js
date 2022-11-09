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

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((rvs) => rvs._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div className="mt-16 grid grid-cols-1 min-h-screen">
      <>
        {reviews.length < 1 ? (
          <h1 className="text-3xl text-center font-bold">
            No reviews were added.
          </h1>
        ) : (
          <div className="my-6">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="card w-3/4 mx-auto mt-6 bg-base-300 shadow-xl"
              >
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
                    <button
                      onClick={() => {
                        handleDelete(review._id);
                      }}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default MyReviews;
