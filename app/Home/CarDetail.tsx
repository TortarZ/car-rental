"use client";
import { useState } from "react";
import Image from "next/image";
import "./Styles/CarDetail.css";
import CarData from "../data/car-data.json";

const cars = CarData;

const CarDetail = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0]); // Used useState to set default value to cars[0].

  const handleButtonClick = (car: any) => {
    //Create func that handle onClick is received a car in cars Object and change that default value in useState.
    setSelectedCar(car);
  };

  return (
    <>
      <section className="car-detail-con">
        <div className="pick-title">
          <h3>Vehicle Models</h3>
          <h2>Our rental fleet</h2>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="pick-container">
          <div className="pick-box" id="item-1">
            {cars.map(
              (
                car // map a cars from JSON file to destructuring.
              ) => (
                <button
                  key={car.id}
                  className={`button pick-car-btn ${
                    selectedCar.id === car.id ? "active" : "" //this check if selectedCar in useState value is match car.id from the button that have been clicked it will set the className to active.
                  }`}
                  onClick={() => handleButtonClick(car)}
                >
                  {car.name}
                </button>
              )
            )}
          </div>
          <div className="pick-img" id="item-2">
            <Image
              src={`${selectedCar.image}`}
              width={0}
              height={0}
              alt={selectedCar.name}
              sizes="100%"
              priority
              className="pick-car"
            />
          </div>
          <div className="pick-detail" id="item-3">
            <div className="car-detail-price">
              <span>${`${selectedCar.price}`}</span>
              <span>/ rent per day</span>
            </div>
            <div className="car-detail-col">
              <span>Model</span>
              <span>{selectedCar.model}</span>
            </div>
            <div className="car-detail-col">
              <span>Mark</span>
              <span>{selectedCar.Mark}</span>
            </div>
            <div className="car-detail-col">
              <span>Year</span>
              <span>{selectedCar.Year}</span>
            </div>
            <div className="car-detail-col">
              <span>Doors</span>
              <span>{selectedCar.Doors}</span>
            </div>
            <div className="car-detail-col">
              <span>AC</span>
              <span>{selectedCar.AC}</span>
            </div>
            <div className="car-detail-col">
              <span>Transmission</span>
              <span>{selectedCar.Transmission}</span>
            </div>
            <div className="car-detail-col">
              <span>Fuel</span>
              <span>{selectedCar.Fuel}</span>
            </div>
            <div className="btn-box">
              <a href="#" className="cta-btn">
                Reserve Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetail;
