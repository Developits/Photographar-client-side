import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import ReviewUpdate from "./ReviewUpdate";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  console.log(description, rating);

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
            toast.success("Deleted successfully");
            const remaining = reviews.filter((rvs) => rvs._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const description = form.message.value;
    const rating = parseFloat(form.rate.value).toFixed(1);
    setDescription(description);
    setRating(rating);
    form.reset();
  };

  const handleUpdateReview = (id) => {};

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
              <ReviewUpdate
                handleUpdateReview={handleUpdateReview}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                key={review._id}
                review={review}
              ></ReviewUpdate>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default MyReviews;
