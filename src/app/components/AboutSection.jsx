"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>Html 5</li> */}
        {/* <li>Css 3</li> */}
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.Js</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>TailwindCSS</li>
        <li>Framer Motion</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>Ritman University, Akwa Ibom State.</li>
      </ul>
    ),
  },

  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Certification in Frontend Web Development</li>
        <li>Dev Town Certificate of Completion in Frontend Web Development</li>
        <li>Side Hustle (Terra) Certificate of Completion to Benjamin Olufemi for Successfully completing the Frontend Web Development(ReactJs)
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 cursor-none">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about image"
          className="rounded-xl"
        />
        <div className="text-white mt-4 md:mt-0 flex flex-col h-full z-10 ">
          <h2 className="text-4xl font-bold text-white mb-4 xl:text-left text-center">About Me</h2>
          <p className="text-base lg:text-lg xl:text-left text-center">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, HTML, CSS, and Git, Github. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start  mt-8">
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
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
