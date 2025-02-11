import Image from "next/image";
import Link from "next/link";
import Header from "./components/mainPage/Header";
import Footer from "./components/mainPage/Footer";
import Hero from "./components/mainPage/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
