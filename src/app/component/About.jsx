"use client"; // Ensure this is added at the top

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="bg-black h-auto bg-opacity-50 py-10 px-6 flex justify-center text-white transition-all duration-1000"
    >
      <div className="container max-w-5xl mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg ">
            <h2 className="text-yellow-400 text-3xl font-semibold mb-4">
              About Us
            </h2>
            <p className="text-lg">
              We are Al Habesha Foreign Employment Agency, a leading licensed
              agency based in Addis Ababa, Ethiopia. We connect families with
              skilled domestic workers.
            </p>
          </div>

          <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg ">
            <h2 className="text-yellow-400 text-3xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-lg">
              Our mission is to bridge families and qualified domestic workers,
              ensuring reliability, trust, and professionalism.
            </p>
          </div>

          <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg ">
            <h2 className="text-yellow-400 text-3xl font-semibold mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Licensed and trusted agency based in Ethiopia</li>
              <li>Experienced and well-trained domestic workers</li>
              <li>Commitment to professionalism and client satisfaction</li>
              <li>Focus on ethical recruitment and fair practices</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg">
            <h2 className="text-yellow-400 text-3xl font-semibold mb-4">
              Our Values
            </h2>
            <p className="text-lg">
              At Al Habesha, our core values guide everything we do. We believe
              in integrity, respect, and compassion.
            </p>
          </div>
        </div>
        <div className="h-28 justify-center items-center flex">
          <Link
            href="/about"
            className="flex items-center gap-2 text-black bg-yellow-500 opacity-80 p-2 min-w-[180px] justify-center border-none rounded-md text-xl hover:bg-black hover:bg-opacity-80 hover:text-yellow-500 ease-in-out duration-500"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
