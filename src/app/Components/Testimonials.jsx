"use client";

import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const ReferalData = [
  {
    id: 1,
    Author: "Jean ****",
    AuthorImage: "/images/Referals/jean.jpg",
    Occupation:
      " Graphic Designer┃Motion Designer┃UI DesignerGraphic Designer┃Motion Designer┃UI Designer",
    Comment:
      "Wassim joined Mad Promotions Ltd for a brief time during a hectic period however his work on our company website is to last for years to come. He is diligent, eager to learn and has a great attitude in general. Wassim is a great asset for any team! \n \n \n \n \n \n I wish him the absolute best in his professional career - you will be dearly missed!",
  },
  {
    id: 2,
    Author: "James *****",
    AuthorImage: "/images/Referals/james.jpg",
    Occupation: " IT-Specialist┃TeamLead┃Department responsible",
    Comment:
      "Wassim's dedication to his work is truly remarkable. Not only is he hardworking and always ready to take initiative, but his structured approach to problem-solving.",
  },
  {
    id: 3,
    Author: "Theodor *****",
    AuthorImage: "/images/Referals/theod.png",
    Occupation: " Tech hobbiest┃Modder/Scripter┃Frequent collaborator",
    Comment:
      "From personal experience, Wassim has a very professional composure; he is not afraid to put his head down and spend time on a project. Neither does he let any personal dissonance affect progress.",
  },
];

export const Testimonials = () => {
  return (
    <div>
      <h2 className=" text-4xl font-bold text-white-300   mb-4">
        Testimonials
      </h2>
      {ReferalData.map((referal) => {
        return (
          <div
            key={referal.id}
            className="py-8 px-4 xl:gap-16 sm:py-4 xl:px-16"
          >
            <div className="border-[#33353F] bg-[#121212] border rounded-bl-3xl py-8 px-17 flex flex-col text-sm ">
              <div className="flex flex-col md:flex-row  items-center gap-10 md:px-10">
                <Image
                  className=" border-[#33353F] border flex-shrink-0 rounded-bl-3xl"
                  src={referal.AuthorImage}
                  alt="hero iamge"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col mx-4">
                  <h2 className="text-white text-2xl font-bold">
                    {referal.Author}
                  </h2>
                  <span className="text-[#ADB7BE] mb-5 text-xs md:text-base font-semibold whitespace-break-spaces">
                    {referal.Occupation}
                  </span>
                  <p className="text-white text-justify  text-base">
                    {referal.Comment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
