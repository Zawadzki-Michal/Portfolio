"use client";
import { Whisper } from "next/font/google";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const whisper = Whisper({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 pt-10 mt-10 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-6xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <div className={whisper.className}>
              Hi, I am <span className="text-yellow-400"> Michal</span>
            </div>
          </h1>
          <div className="text-white text-xl lg:text-3xl mb-5">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am Full Stack Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I am Proactive and Self-motivated")
                  .deleteAll()
                  .typeString("I'm driven by passion and curiosity")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I am problem solver")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I'm looking forward to working with you!")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </div>
          <div>
            <button className="bg-[#13131314] hover:bg-[#13131314] text-yellow-400 font-bold py-2 px-4 rounded-full mr-4 border-2 border-yellow-400 hover:border-[rgba(231,231,45,0.91)] hover:text-[rgba(231,231,45,0.91)] transition duration-300 ease-in-out">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#13131314] w-[300px] h-[300px] relative lg:h-[500px] lg:w-[500px]">
            <Image
              src={"/images/landing2.png"}
              alt="Michal's image"
              width={600}
              height={600}
              className="rounded-lg absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

// flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800
