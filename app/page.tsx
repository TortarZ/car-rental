import Banner from "./Home/Banner";
import BookCar from "./Home/BookCar";
import CarDetail from "./Home/CarDetail";
import Download from "./Home/Download";
import FAQ from "./Home/FAQ";
import Hero from "./Home/Hero";
import Plan from "./Home/Plan";
import PromoCar from "./Home/PromoCar";
import UserReview from "./Home/UserReview";

export default function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <Plan />
      <CarDetail />
      <Banner />
      <PromoCar />
      <UserReview />
      <FAQ />
      <Download />
    </>
  );
}
