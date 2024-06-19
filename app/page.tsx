import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BookCar from "./components/BookCar";
import Plan from "./components/Plan";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BookCar />
      <Plan />
    </>
  );
}
