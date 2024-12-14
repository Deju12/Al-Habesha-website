"use client";

import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineHome,
  AiFillFileImage,
  AiFillContacts,
  AiOutlineMessage,
} from "react-icons/ai";
import {
  RiCustomerService2Fill,
  RiGalleryFill,
  RiLoginBoxFill,
} from "react-icons/ri";
import { SiGnuprivacyguard, SiGooglemaps } from "react-icons/si";
import { useEffect, useState } from "react";
import Image from "next/image";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [header, useHeader] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      useHeader(true);
    } else {
      useHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <div className="relative sm:absolute z-20 w-full text-white bg-transparent">
      <div className=" bg-gray-700 w-full h-8 justify-end  hidden sm:block">
        <div className="flex text-yellow-400 w-[90%] justify-end gap-6 ">
          <h3 className="">
            phone : <span>0987654321</span>
          </h3>
          <h3>email: alhabesha@gmail.com </h3>
          <h3>
            <a
              href="https://maps.app.goo.gl/ECx7RRxNabvH4qPs5"
              target="_blank"
              className=" hover:text-white  flex justify-center items-center gap-2"
            >
              <span className="justify-center items-start flex">
                <SiGooglemaps />
              </span>
              location
            </a>{" "}
          </h3>
        </div>
      </div>
      <nav
        className={
          header
            ? "fixed top-0 w-full items-center bg-gray-700 text-white px-4 min-w-72 "
            : "absolute w-full items-center bg-gray-800 text-white px-4 min-w-72 bg-transparent"
        }
      >
        <div className="flex justify-between items-center mx-auto max-w-[1100px]">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/asset/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <h2 className="text-4xl font-semibold text-yellow-500 pr-1">
              Al Habesha{" "}
              <span className="text-yellow-700 text-3xl sm:inline hidden">
                አል ሀበሻ
              </span>
            </h2>
          </Link>
          {/* navbar links*/}
          <ul
            className={
              header
                ? "hidden justify-center items-center gap-2 text-[20px] text-orange-400 md:flex"
                : "hidden justify-center items-center gap-2 text-[20px] text-white md:flex"
            }
          >
            <li className="font-medium hover:cursor-pointer  hover:text-yellow-600 ease-in-out duration-500 p-2">
              <Link
                href="/"
                className="hover:border-b-2 hover:border-yellow-400 hover:text-yellow-600"
              >
                Home
              </Link>
            </li>
            <li className="font-medium  hover:cursor-pointer hover:text-yellow-600 ease-in-out duration-500 p-2">
              <Link
                href="/service"
                className="hover:border-b-2 hover:border-yellow-400  hover:text-yellow-600"
              >
                Service
              </Link>
            </li>
            <li className="font-medium  hover:cursor-pointer hover:text-yellow-600 ease-in-out duration-500 p-2">
              <Link
                href="/gallery"
                className="hover:border-b-2 hover:border-yellow-400  hover:text-yellow-600 "
              >
                Gallery
              </Link>
            </li>
            <li className="font-medium  hover:cursor-pointer hover:text-yellow-600 ease-in-out duration-500 p-2">
              <Link
                href="/about"
                className="hover:border-b-2 hover:border-yellow-400  hover:text-yellow-600"
              >
                About Us
              </Link>
            </li>
            <li className="font-medium  hover:cursor-pointer hover:text-yellow-600 ease-in-out duration-500 p-2">
              <Link
                href="/contact"
                className="hover:border-b-2 hover:border-yellow-400  hover:text-yellow-600"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* login and signup links*/}
          <ul className="hidden justify-center items-center gap-2 text-[16px] text-gray-500">
            <li className="font-medium  hover:cursor-pointer hover:text-yellow-600 ease-in-out duration-500 p-2">
              <Link href="#">LogIn</Link>
            </li>
            <li className="font-medium  hover:cursor-pointer hover:text-yellow-600 ease-in-out duration-500 p-2">
              <Link href="#"> SignUp</Link>
            </li>
          </ul>

          {/* responsive menu*/}
          <div
            onClick={handleNav}
            className="block md:hidden text-2xl hover:cursor-pointer"
          >
            <AiOutlineMenu className={menuOpen ? "hidden" : ""} />
            <AiOutlineClose className={menuOpen ? "" : "hidden"} />
          </div>
        </div>
        {/* mobile navbar */}
        <div
          className={
            menuOpen
              ? "md:hidden fixed top-0 left-0 h-screen min-w-[200px] bg-gray-800 justify-center flex ease-in duration-900 pt-16"
              : "hidden"
          }
        >
          <div className="">
            <Link className="flex items-center justify-center p-4" href="/">
              <Image
                src="/asset/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <h2 className="text-3xl font-semibold text-yellow-500 p-3">
                Al Habesha{" "}
              </h2>
            </Link>
            {/* navbar links*/}
            <div className="justify-center items-center flex">
              <ul className="justify-center items-center gap-2 text-[20px] text-gray-400 ">
                <li className="  hover:text-yellow-600 font-medium  hover:cursor-pointer  p-2 flex items-center gap-2">
                  <AiOutlineHome /> <Link href="/">Home</Link>
                </li>
                <li className="  hover:text-yellow-600 font-medium  hover:cursor-pointer  p-2 flex items-center gap-2">
                  <RiCustomerService2Fill />
                  <Link href="/service">Service</Link>
                </li>
                <li className="  hover:text-yellow-600 font-medium  hover:cursor-pointer  p-2 flex items-center gap-2">
                  <RiGalleryFill /> <Link href="/gallery">Gallery</Link>
                </li>
                <li className="  hover:text-yellow-600 font-medium  hover:cursor-pointer  p-2 flex items-center gap-2">
                  <AiOutlineMessage /> <Link href="/about">About Us</Link>
                </li>
                <li className="  hover:text-yellow-600 font-medium  hover:cursor-pointer  p-2 flex items-center gap-2">
                  <AiFillContacts /> <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* login and signup links*/}
            <div className="justify-center  items-end hidden">
              <ul className="justify-center items-center gap-2 text-[16px] text-gray-500">
                <li className="font-medium  hover:cursor-pointer hover:text-white ease-in-out duration-500 p-2 flex items-center gap-2">
                  <RiLoginBoxFill />
                  <Link href="#">LogIn</Link>
                </li>
                <li className="font-medium  hover:cursor-pointer hover:text-white ease-in-out duration-500 p-2 flex items-center gap-2">
                  <SiGnuprivacyguard />
                  <Link href="#"> SignUp</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
