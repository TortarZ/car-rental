import Header from "./components/Header";
import Hero from "./components/Hero";
import BookCar from "./components/BookCar";
import Plan from "./components/Plan";
import Banner from "./components/Banner";
import PromoCar from "./components/PromoCar";
import UserReview from "./components/UserReview";
import CarDetail from "./components/CarDetail";
import FAQ from "./components/FAQ";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BookCar />
      <Plan />
      <CarDetail />
      <Banner />
      <PromoCar />
      <UserReview />
      <FAQ />
      <Download />
      <Footer />
    </>
  );
}
