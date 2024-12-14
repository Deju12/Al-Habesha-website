"use client"; // Ensure this is added at the top

import React, { useState } from "react";
import Link from "next/link";

const Gallery = () => {
  // Array of objects containing image URLs and descriptions
  const imageData = [
    {
      url: "/asset/gallery/image_1.jpg",
      description: "Description for Image 1",
    },
    {
      url: "/asset/gallery/image_2.jpg",
      description: "Description for Image 2",
    },
    {
      url: "/asset/gallery/image_3.jpg",
      description: "Description for Image 3",
    },
  ];

  return (
    <section
      id="Gallery"
      className=" bg-black h-auto bg-opacity-50 block justify-center items-center p-4 pt-16"
    >
      <div className="flex justify-center items-center">
        <div className="relative max-w-6xl mx-auto w-full ">
          <h1 className="text-yellow-500 text-4xl font-bold text-center mb-8">
            Gallery
          </h1>

          {/* Grid layout for images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-8 ">
            {imageData.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.url}
                  alt="gallery Image"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-28 justify-center items-center flex ">
        <Link
          href="/gallery"
          className="flex items-center gap-2 text-black bg-yellow-500 opacity-80 p-2 min-w-[180px] justify-center border-none rounded-md text-xl hover:bg-black hover:bg-opacity-80 hover:text-yellow-500 ease-in-out duration-500"
        >
          {" "}
          View more{" "}
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
