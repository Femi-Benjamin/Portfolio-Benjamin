"use client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer";
import Snowfall from "react-snowfall";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] g-gray-800">
      <AnimatePresence initial={false}>
        <Snowfall snowflakeCount={10} />
        <Navbar />
        <div className="container mt-24 mx-auto py-4 px-12 xl:border border-[#1b1b1b]">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectSection />
          <EmailSection />
        </div>
        <Footer />
      </AnimatePresence>
    </main>
  );
}
