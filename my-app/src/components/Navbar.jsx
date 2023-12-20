"use client";
import { Whisper } from "next/font/google";
import React from "react";

import Link from "next/link";
import { useState } from "react";

const whisper = Whisper({
  weight: ["400"],
  subsets: ["latin"],
});

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="bg-[#1D232A]">
      <nav className="w-full top-0 left-0 right-0">
        <div className="justify-between lg:px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 lg::py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <div className={whisper.className}>
                  <h2 className="md:text-6xl text-4xl text-yellow-400 font-bold ">
                    MZ
                  </h2>
                </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="relative group"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-yellow-400 hover:ring-8 group-focus:ring-4 ring-opacity-50 duration-200 shadow-md">
                      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div className="bg-yellow-400 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                        <div className="bg-yellow-400 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                        <div className="bg-yellow-400 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                        <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                          <div className="absolute bg-yellow-400 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                          <div className="absolute bg-yellow-400 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-yellow-400 hover:ring-8 group-focus:ring-4 ring-opacity-50 duration-200 shadow-md">
                      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div className="bg-yellow-400 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                        <div className="bg-yellow-400 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                        <div className="bg-yellow-400 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                        <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                          <div className="absolute bg-yellow-400 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                          <div className="absolute bg-yellow-400 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-2xl text-white py-6 md:px-6 text-center border-b-2 md:border-b-0  hover:text-yellow-400 md:hover:text-yellow-400">
                  <Link href="./about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>

                <li className="pb-6 text-2xl text-white py-6 px-6 text-center  border-b-2 md:border-b-0  hover:text-yellow-400 md:hover:text-yellow-400">
                  <Link href="./projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="pb-6 text-2xl text-white py-6 px-6 text-center border-b-2 md:border-b-0 hover:text-yellow-400 md:hover:text-yellow-400">
                  <Link href="./blog" onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                <li className="pb-6 text-2xl text-white py-6 px-6 text-center border-b-2 md:border-b-0 hover:text-yellow-400 md:hover:text-yellow-400">
                  <Link href="./resume" onClick={() => setNavbar(!navbar)}>
                    Resume
                  </Link>
                </li>
                <li className="pb-6 text-2xl text-white py-6 px-6 text-center  hover:text-yellow-400 md:hover:text-yellow-400">
                  <Link href="./contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
