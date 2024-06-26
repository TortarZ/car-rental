import Image from "next/image";
import React from "react";
import "./Styles/Hero.css";

const Hero = () => {
  return (
    <>
      <section>
        <div className="homepage-con">
          <Image
            src="/bg-homepage.png"
            height={0}
            width={0}
            sizes="100vh"
            alt="bg-img"
            className="bg-homepage"
          />
          <div className="hero-con">
            <div className="hero-content">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span className="text-[#ff4d30]">big</span> with our car
                rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="btn-con">
                <a href="/" className="book-ride-btn button">
                  Book Ride{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-circle-check"
                  >
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </a>
                <a href="/" className="learn-more-btn">
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-chevron-right"
                  >
                    <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                </a>
              </div>
            </div>
            <Image
              src="/hero-main.png"
              height={0}
              width={0}
              alt="bg-img"
              sizes="100%"
              className="hero-img"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
