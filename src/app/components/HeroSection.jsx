"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, motion } from "framer-motion";

const HeroSection = () => {
  return (
    <AnimatePresence initial={false}>
      <section className="lg:py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 cursor-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-bold">
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Hello I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Benjamin",
                  1000,
                  "Frontend",
                  1000,
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>

            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Bringing your ideas to life through code and pixels is my passion.{" "}
              <br /> I specialize in creating engaging web applications with a
              focus on user experience. <br /> Let&apos;s create something
              extraordinary together! 💪
            </p>

            <div>
              <Link href="">
                <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500  hover:bg-slate-200 text-white">
                  Hire Me
                </button>
              </Link>

              <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500  hover:bg-slate-800 text-white mt-3 ">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative place-items-center">
              <Image
                src="/images/dev-ed-wave.png"
                className="absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
                alt="hero image"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default HeroSection;
