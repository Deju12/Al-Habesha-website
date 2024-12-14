import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
const Hero = () => {
  return (
    <section
      id="Hero"
      className=" bg-black h-screen bg-opacity-50 justify-center items-center flex  vsm:pt-0 "
    >
      <div className="h-5/6 justify-center flex flex-col items-center pt-16 ">
        <h1 className=" text-yellow-600 md:text-5xl text-3xl text-opacity-100 font-bold capitalize text-center text-shadow-hard">
          Al habesha foreign employment agency
        </h1>
        <h2 className=" text-yellow-300 md:text-5xl text-3xl z-10 opacity-100 text-center mt-4 text-shadow-hard md:p-1 p-2">
          አል ሀበሻ በውጭ ሀገር ስራና ሰራተኛ አገናኝ ኢጀንሲ
        </h2>
        <div className="justify-center items-center flex mt-6 ">
          <p className=" text-center text-xl max-w-2xl text-yellow-100 opacity-890">
            We are Al habesha Foreign Employment Agency one of the leading
            licensed Foreign Employment Agency based in Addis Ababa Ethiopia, We
            Supply Fresher and Experienced Housemaids, and all types of workers
            from Ethiopia to UAE, Bahrain, Lebanon, Kuwait, Qatar, Saudi Arabia
            and other Countries.
          </p>
        </div>

        <div className="h-28 justify-center items-center flex">
          <Link
            href="#Contact"
            className="flex items-center gap-2 text-black bg-yellow-500 opacity-80 p-2 min-w-[180px] justify-center border-none rounded-md text-xl hover:bg-black hover:bg-opacity-80 hover:text-yellow-500 ease-in-out duration-500"
          >
            {" "}
            Contact Us{" "}
            <span>
              <AiOutlineArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
