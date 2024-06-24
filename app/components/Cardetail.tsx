import React from "react";
import Image from "next/image";
import "./Styles/CarDetail.css";

const CarDetail = () => {
  return (
    <>
      <section>
        <div className="car-detail-con">
          <div className="pick-title">
            <h3>Vehicle Models</h3>
            <h2>Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="pick-container">
            <div className="pick-box">
              <button className="button pick-btn active">Audi A1 S-Line</button>
              <button className="button pick-btn">VW Golf 6</button>
              <button className="button pick-btn">Toyota Camry</button>
              <button className="button pick-btn">BMW 320 ModernLine</button>
              <button className="button pick-btn">Mercedes-Benz GLK</button>
              <button className="button pick-btn">VW Passat CC</button>
            </div>
            <div className="pick-img">
              <Image
                src="/Audi A1 S-Line.jpg"
                width={0}
                height={0}
                alt="audi_a1_s-line"
                sizes="100vh"
                priority
                className="pick-car"
              />
            </div>
            <div className="pick-detail">
              <div className="car-detail-price">
                <span>$45</span>
                <span>/ rent per day</span>
              </div>
              <div className="car-detail-col">
                <span>Model</span>
                <span>Audi</span>
              </div>
              <div className="car-detail-col">
                <span>Mark</span>
                <span>A1</span>
              </div>
              <div className="car-detail-col">
                <span>Year</span>
                <span>2012</span>
              </div>
              <div className="car-detail-col">
                <span>Doors</span>
                <span>4/5</span>
              </div>
              <div className="car-detail-col">
                <span>AC</span>
                <span>Yes</span>
              </div>
              <div className="car-detail-col">
                <span>Tranmission</span>
                <span>Manual</span>
              </div>
              <div className="car-detail-col">
                <span>Fuel</span>
                <span>Gasoline</span>
              </div>
              <div className="btn-box">
                <a href="#" className="cta-btn">
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetail;
