import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import useTitle from "../../hooks/useTitle";

const ServiceDetails = () => {
  useTitle("Service Details");
  const details = useLoaderData();
  const { user, loading } = useContext(AuthContext);
  const { _id, title, img, description, price, rating } = details;
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const description = form.message.value;
    const rating = parseFloat(form.rate.value).toFixed(1);

    const { uid, displayName, photoURL } = user;

    const review = {
      serviceId: _id,
      customerId: uid,
      img: photoURL,
      name: displayName,
      rating,
      description,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review added successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/servicereviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <button className="btn btn-lg btn-ghost loading"></button>
      </div>
    );
  }
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
          </div>
        </div>
      </div>
      {/* reviews showdown section */}

      <>
        {reviews.length < 1 ? (
          <></>
        ) : (
          <div className="mt-16">
            <h1 className="text-3xl mb-5 text-center font-bold">
              Review from happy clients
            </h1>
            <div className="mt-6">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>

      {/* review section */}

      <>
        {user?.uid ? (
          <div className="w-1/2 mt-16 mx-auto">
            <h1 className="text-3xl text-center font-bold">
              Please, Add your valuable review.
            </h1>
            <form onSubmit={handleAddReview} className="card-body">
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
        ) : (
          <div className="my-16 text-center">
            <h1 className="text-3xl  font-bold">
              Please login to add a review.
            </h1>
            <button className="btn btn-primary">
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default ServiceDetails;
