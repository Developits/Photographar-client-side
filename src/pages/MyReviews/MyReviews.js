import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/userreviews/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user, reviews]);

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

    fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ description, rating }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          form.reset();
          toast.success("Updated successfully");
        }
      });
  };

  const handleUpdateReview = (id) => {
    const review = reviews.find((review) => review._id === id);
    setReview(review);
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
                {/* The button to open modal */}

                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box relative">
                    <div className="modal-action">
                      <label
                        htmlFor="my-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                    </div>
                    <form onSubmit={handleUpdate} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Write your opinion</span>
                        </label>
                        <textarea
                          name="message"
                          className="textarea textarea-bordered h-24 w-full"
                          placeholder="Your opinion"
                          required
                        ></textarea>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Rating</span>
                        </label>
                        <input
                          type="text"
                          name="rate"
                          placeholder="Rating"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control mt-2">
                        <input
                          className="btn btn-primary"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>

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
                    <label
                      onClick={() => {
                        handleUpdateReview(review._id);
                      }}
                      htmlFor="my-modal"
                      className="btn btn-primary"
                    >
                      Update
                    </label>

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
