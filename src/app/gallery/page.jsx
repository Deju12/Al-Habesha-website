"use client"; // Ensure this is added at the top

import React, { useState } from "react";
import YouTube from "react-youtube";

const Gallery = () => {
  // Array of objects containing image URLs and descriptions
  const imageData = [
    {
      url: "/asset/gallery/image6.jpg",
      description: "Description for Image 6",
    },
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
    {
      url: "/asset/gallery/image_4.jpg",
      description: "Description for Image 4",
    },
    {
      url: "/asset/gallery/image_5.jpg",
      description: "Description for Image 5",
    },
    {
      url: "/asset/gallery/image6.jpg",
      description: "Description for Image 6",
    },
    {
      url: "/asset/gallery/image_3.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque quo facere quisquam! Odit sunt dignissimos molestiae quibusdam! Laudantium nobis expedita consequuntur tempore cupiditate natus temporibus veniam alias! Quam, doloribus.",
    },
  ];
  if (imageData.length % 2 == 1) {
    imageData.in;
  }

  const videoData = [
    {
      url: "8guP6F56TPk",
      description: "Description for video 1",
    },
    {
      url: "eMplIjZ80Zs",
      description: "Description for video 1",
    },
    {
      url: "ZBdifBC-Cfw",
      description: "Description for video 1",
    },
  ];

  // Define the number of images per page
  const imagesPerPage = 2;
  const videoPerPage = 2;

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(0);
  const [currentvidPage, setCurrentvidPage] = useState(0);

  // Calculate the range of images to display based on the current page
  const startIndex = currentPage * imagesPerPage;
  const selectedImages = imageData.slice(
    startIndex,
    startIndex + imagesPerPage
  );
  const startVidIndex = currentvidPage * videoPerPage;
  const selectedVideos = videoData.slice(
    startVidIndex,
    startVidIndex + videoPerPage
  );
  // Function to go to the next page
  const nextPage = () => {
    if ((currentPage + 1) * imagesPerPage < imageData.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const nextVidPage = () => {
    if ((currentvidPage + 1) * videoPerPage < videoData.length) {
      setCurrentvidPage(currentvidPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const prevVidPage = () => {
    if (currentvidPage > 0) {
      setCurrentvidPage(currentvidPage - 1);
    }
  };

  return (
    <section
      id="Gallery"
      className=" bg-green-950  h-auto bg-opacity-60 justify-center md:items-end items-center flex pb-6"
    >
      <div className="w-full">
        <h1 className="bg-gallerybg bg-cover bg-right bg-no-repeat text-yellow-500 text-6xl font-bold text-center justify-center items-center flex mb-8 h-[230px]">
          Gallery
        </h1>

        {/* Grid layout for images */}
        <div className=" z-10 p-8 rounded-md mx-8 mb-10 backdrop-blur-sm shadow-2xl shadow-black">
          <h1 className="text-center m-4 text-2xl text-yellow-400 font-bold">
            Image Gallery
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-6 ">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.url}
                  alt={`Image ${startIndex + index + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg shadow-2xl shadow-black"
                />
                <p className="text-white text-center px-4">
                  {image.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*video gallery*/}
        <div className="  z-10 p-8 rounded-md mx-8 backdrop-blur-sm shadow-2xl shadow-black">
          <h1 className="text-center m-4 text-2xl text-yellow-400 font-bold">
            Video Gallery
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6 ">
            {selectedVideos.map((video, index) => (
              <div key={index} className="relative group">
                <YouTube
                  videoId={video.url} // Replace with the correct video ID
                  className="w-full"
                  opts={{
                    height: "350", // Adjust height
                    width: "100%", // Adjust width
                    playerVars: {
                      autoplay: 0, // Disable autoplay
                    },
                  }}
                />
              </div>
            ))}
          </div>
          {/* navigation video button */}
          <div className="absolute left-0 transform md:-translate-y-48 -translate-y-[430px] flex justify-between w-full">
            <button
              onClick={prevVidPage}
              className="text-yellow-700 bg-opacity-75 hover:bg-opacity-100 font-bold p-2 text-2xl rounded-full"
            >
              <span className="text-5xl">❮</span> {/* Previous icon */}
            </button>
            <button
              onClick={nextVidPage}
              className="text-yellow-700 bg-opacity-75 hover:bg-opacity-100 font-bold p-2 rounded-full"
            >
              <span className="text-5xl">❯</span> {/* Next icon */}
            </button>
          </div>
        </div>
      </div>
      {/* Navigation buttons */}

      <div className="absolute left-0 transform ] md:-translate-y-[670px] -translate-y-72 flex justify-between w-full px-6">
        <button
          onClick={prevPage}
          className="text-yellow-700 bg-opacity-75 hover:bg-opacity-100 font-bold p-2 text-2xl rounded-full"
        >
          <span className="text-5xl">❮</span> {/* Previous icon */}
        </button>
        <button
          onClick={nextPage}
          className="text-yellow-700 bg-opacity-75 hover:bg-opacity-100 font-bold p-2 rounded-full"
        >
          <span className="text-5xl">❯</span> {/* Next icon */}
        </button>
      </div>
    </section>
  );
};

export default Gallery;
