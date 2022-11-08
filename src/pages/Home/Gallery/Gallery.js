import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="text-center mt-16">
        <h1 className="text-2xl font-bold">PHOTOGRAPHY GENRES</h1>
        <p className="">
          I would like to give you a unique photography experience,
          <br /> built to serve you best and capture your special moments for
          you and your families creatively and beautifully.
        </p>
      </div>
      <div className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="Weeding photography"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="fashion photography"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="Newborn photography"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/7973662/pexels-photo-7973662.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="Portrait photograph"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/3788039/pexels-photo-3788039.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="family"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="commercial photography"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
