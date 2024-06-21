import Image from "next/image";
import React from "react";
import "./Styles/PromoCar.css";

const PromoCar = () => {
  return (
    <>
      <section className="promo-con">
        <div className="promo-con-box">
          <Image
            src="/promote_car.png"
            width={0}
            height={0}
            sizes="100vh"
            alt="our_car"
            priority
            className="promo-car-img"
          />
          <div className="promo-con-description">
            <div className="promo-text-left">
              <h4>Why Choose US</h4>
              <h2>Best valued deals you will ever find</h2>
              <p>
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <a href="#" className="button find-detail-btn">
                Find Details{" "}
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
                </svg>{" "}
              </a>
            </div>
            <div className="promo-text-right">
              <div className="promo-text-box">
                <Image
                  src="/promo-car.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="car-img"
                  className="promo-box-img"
                />
                <div className="box-text">
                  <h4>Cross Country Drive</h4>
                  <p>
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="promo-text-box">
                <Image
                  src="/promo-coin.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="car-img"
                  className="promo-box-img"
                />
                <div className="box-text">
                  <h4>All Inclusive Pricing</h4>
                  <p>
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="promo-text-box">
                <Image
                  src="/promo-money.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="car-img"
                  className="promo-box-img"
                />
                <div className="box-text">
                  <h4>No Hidden Charges</h4>
                  <p>
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoCar;
