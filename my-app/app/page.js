"use client"; // Ensure this is a client component
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "./components/mainPage/Header";
import Footer from "./components/mainPage/Footer";
import Hero from "./components/mainPage/Hero";
import Cards from "./components/mainPage/Cards";
import Scroll from "./components/scroll/scroll";
import Maincard from "./components/mainPage/Maincard";

export default function Home() {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const locomotiveScroll = new LocomotiveScroll();

    // Initialize AOS (Animate on Scroll)
    AOS.init({
      once: false, // Animation runs every time an element is in view
      duration: 1200, // Animation duration
      easing: "ease-out-cubic", // Optional easing
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Scroll />
      <Maincard />
      <Cards />
      <Footer />
    </div>
  );
}
