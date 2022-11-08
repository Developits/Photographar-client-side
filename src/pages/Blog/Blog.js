import React from "react";

const Blog = () => {
  return (
    <div className="mx-6 pb-6">
      <h1 className="my-10 text-center text-3xl">
        Some important question about Web Development.
      </h1>
      <div className="mt-5 p-6 bg-base-300 border-2 rounded-xl">
        <h3 className="font-bold">
          Question 01: Difference between SQL and NoSQL?
        </h3>
        <p>
          <strong>Ans</strong>:
        </p>
      </div>
      <div className="mt-5 p-6 bg-base-300  border-2 rounded-xl">
        <h3 className="font-bold">
          Question 02 : What is JWT, and how does it work?
        </h3>
        <p>
          <strong>Ans</strong>:
        </p>
      </div>
      <div className="mt-5 p-6 bg-base-300  border-2 rounded-xl">
        <h3 className="font-bold">
          Question 03 : What is the difference between javascript and NodeJS?
        </h3>
        <p>
          <strong>Ans</strong>:
        </p>
      </div>
      <div className="mt-5 p-6 bg-base-300  border-2 rounded-xl">
        <h3 className="font-bold">
          Question 04 : How does NodeJS handle multiple requests at the same
          time?
        </h3>
        <p>
          <strong>Ans</strong>:
        </p>
      </div>
    </div>
  );
};

export default Blog;
