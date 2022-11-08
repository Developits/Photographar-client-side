import React from "react";

const Quote = () => {
  return (
    <div className="hero mt-16  min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className=" w-1/2">
          <h1 className="text-2xl font-bold">
            IF NOT NOW, WHEN? LET'S <br /> WORK TOGETHER!
          </h1>
          <p className="py-6">
            My passion for capturing smiles and genuine moments is insatiable,
            and I always strive to create a seamless and fun experience for all
            of my clients. It's kinda our thing! So shoot me a message and I
            will be in touch usually the same day! I cannot wait to meet you and
            hear all about your special day or idea.
          </p>

          <p>Prito Reza</p>
          <>----------------------</>
          <p>+ 1 (758) 996 1042</p>
          <p>TORONTO, CANADA</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
