"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { motion } from 'framer-motion'


const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="left-0 right-0 z-10 bg-[#121212] g-gray-800 xl:bg-opacity-95 bg-opacity-100 fixed mx-auto border border-[#33353F] border-l-transparent top-0 cursor-none">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link
          className="text-2xl xl:text-3xl text-white font-semibold"
          href={"/"}
        >
          <div className="flex flex-row gap-3 items-center">
            <Image
              src="/images/herro-image.png"
              alt="logo"
              width={40}
              height={40}
              className="w-full h-full object-contain rounded-full"
            />
            <h1>Benjamin.Dev</h1>
          </div>
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <motion.button
              whileTap={{ scale: 0.5 }}
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-600 text-slate-300 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.5 }}
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-700 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </motion.button>
          )}
        </div>

        <div className="menu md:block hidden md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: '0.1', type: 'spring' }}
        className="md:hidden block">
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </motion.div>
    </nav>
  );
};

export default Navbar;
