"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const downloadTxtFile = () => {
    window.location.href =
      "http://simoportfolio.com/public/Documents/00_WassimElHaddaoui_CV.pdf";
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-40">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white  h-40 mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
            <span className="bg-clip-text  text-white-300">
              Hello, I am mechanical engineer.
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Welcome to my page, I upload a variety of projects to showcase my skills.
          </p>
          <div>
            <a
              href="/#contact"
					className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-black-300 border border-white hover:bg-slate-200 text-white">
              Contact Me
            </a>
            <a
              href="\Documents\Resumé_WEH.pdf"
              download="WassimElHaddaoui_CV.pdf"
					className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-black-300 border border-white hover:bg-slate-200 text-white">

                Resumé
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="shadow-2xl md:skew-y-12 rounded-full bg-[#E2C044] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            {" "}
            <Image
              className=" absolute rounded-full animate-hover transform bottom-0 left-0 md:bottom-0 md:left-0"
              src="/images/profile_frame.png"
              alt="hero image"
              width={625}
              height={625}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
