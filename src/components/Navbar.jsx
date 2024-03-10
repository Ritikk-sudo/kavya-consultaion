"use client";

import React, { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import Image from "next/image";
import icon from "../../public/images/icon.jpg";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function showMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className="flex p-0 h-24 items-center justify-between bg-[#060842] text-white shadow-md">
        <Link href="/">
          <Image
            src={icon}
            width={150}
            height={150}
            className="sm:w-72 w-64 pl-4"
            alt="icon"
          ></Image>
        </Link>
        {/* <h1 className="text-2xl font-bold ml-10">My App</h1> */}

        <div className="  hidden sm:block">
          <ul className="flex gap-4 p-4 mr-20 font-semibold">
            <li>
              <Link
                className="hover:text-blue-400 focus:text-blue-400"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-400 focus:text-blue-400"
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-400 focus:text-blue-400"
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* //for mobile view */}
        <button
          className="flex sm:hidden items-center gap-4"
          onClick={showMenu}
        >
          <LuMenuSquare size={30} />
          <div className="flex"></div>
        </button>
      </header>
      {isOpen && (
        <ul className="absolute z-10 flex justify-center items-center flex-col rounded-md shadow-md p-7 gap-6 ml-[50%] mr-0 -mt-6 bg-slate-800 font-semibold text-white">
          <li>
            <Link
              onClick={showMenu}
              className="hover:text-blue-400"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={showMenu}
              className="hover:text-blue-400"
              href="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={showMenu}
              className="hover:text-blue-400"
              href="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
// onClick={() => setIsOpen(!isOpen)}
