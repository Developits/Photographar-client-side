import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="mt-5 text-2xl font-bold">PHOTOGRAPHY GENRES</h1>
        <p className="">
          I would like to give you a unique photography experience,
          <br /> built to serve you best and capture your special moments for
          you and your families creatively and beautifully.
        </p>
      </div>
      <div class="overflow-hidden text-gray-700">
        <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <p>New born photo</p>
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
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
