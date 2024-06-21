import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BookCar from "./components/BookCar";
import Plan from "./components/Plan";
import Cardetail from "./components/Cardetail";
import Banner from "./components/Banner";
import PromoCar from "./components/PromoCar";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BookCar />
      <Plan />
      <Cardetail />
      <Banner />
      <PromoCar />
    </>
  );
}
