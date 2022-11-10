import React from "react";

const ReviewUpdate = ({
  review,
  handleDelete,
  handleUpdate,
  handleUpdateReview,
}) => {
  return (
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
              <input className="btn btn-primary" type="submit" value="Submit" />
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
  );
};

export default ReviewUpdate;
