"use client"; // Ensure this is a client component

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "./components/mainPage/Header";
import Footer from "./components/mainPage/Footer";
import Hero from "./components/mainPage/Hero";
import Cards from "./components/mainPage/Cards"
import Scroll from "./components/scroll/scroll";
import Maincard from "./components/mainPage/Maincard"


export default function Home() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <Scroll />
      {/* <Maincard /> */}
      <Cards />
      <Footer />
    </div>
  );
}
