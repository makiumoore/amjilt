import Image from "next/image";
import Link from "next/link";
import Header from "./components/mainPage/Header";
import Footer from "./components/mainPage/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Footer />
      <h1>Home</h1>
    </div>
  );
}
