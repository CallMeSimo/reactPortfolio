"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TypeAnimation } from "react-type-animation";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Creo - <span className="text-gray-500 "> [CAD]</span></li>
        <li>Autodesk - <span className="text-gray-500 "> [CAD]</span></li>
        <li>Blender - <span className="text-gray-500 "> [CAD]</span></li>
        <li>PYTHON - <span className="text-gray-500 "> [PROGRAMMING]</span></li>
        <li>Node.js - <span className="text-gray-500 "> [PROGRAMMING]</span></li>
        <li>Javascript - <span className="text-gray-500 "> [PROGRAMMING]</span></li>
        <li>React - <span className="text-gray-500 "> [PROGRAMMING]</span></li>
        <li>SEO - <span className="text-gray-500 "> [MARKETING]</span></li>
        <li>Network - <span className="text-gray-500 "> [IT]</span></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Mechanical engineer and Materialscience <span className="text-gray-500 ">[CURRENTLY STUDENT]</span></li>
        <li>Gymnasieingenjör</li>
        <li>Nerd</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Test Technician</li>
        <li>Developer</li>
        <li>Wordpress-developer</li>
        <li>Marketing</li>
        <li>Team lead</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransistion] = useTransition();

  const handleTabChange = (id) => {
    startTransistion(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div style={{ borderRadius: "10%", overflow: "hidden" }}>
           <video width="550" autoPlay loop muted>
      <source src="/images/Aboutspin480.webm" type="video/webm"/>
     </video>
        </div>
        {/* <iframe
          src="https://giphy.com/embed/XIqCQx02E1U9W"
          width="500"
          height="500"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white-300  mb-4">
            About me
          </h2>
          <p className="text-base lg:text-lg text-justify">
            I am a mechanical engineering and materials science student with a strong understanding of 
            mechanical design and material properties.
            My work experience includes hands-on involvement in lab activities such
            as tensile testing and materials chemistry, where I gained practical skills
            in analyzing and testing various materials. I am comfortable working with CAD
            tools to create and refine designs, and I have contributed to team projects that
            require collaborative problem-solving. Fluent in both Swedish and English, I focus
            on clear communication and teamwork to ensure successful project outcomes. (PS. I built this website!)
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              Experiences
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
