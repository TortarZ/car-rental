import React from "react";
import CarData from "../../data/car-data.json";
import Image from "next/image";
import "./style.css";

const VehicleModels = () => {
  const carIcon = (
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
      className="tabler-icon tabler-icon-car"
    >
      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
    </svg>
  );

  return (
    <>
      <section className="flex flex-col gap-8 items-center p-8 car-section">
        {CarData.map((car) => (
          <div
            key={car.id}
            className="flex flex-col items-center justify-between border w-full h-full bg-white"
          >
            <Image
              src={`${car.imageLink}`}
              alt={`${car.name}`}
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-auto object-cover"
            />
            <div className="grid grid-cols-2 gap-4 p-4 car-con-detail w-full">
              <div>
                <h2>{car.name}</h2>
                <span>5 Stars</span>
              </div>
              <div>
                <h2>&#36;{car.price}</h2>
                <p>per day</p>
              </div>
              <div className="car-con-detail-box">
                <span>{carIcon}</span>
                <h4>{car.model}</h4>
              </div>
              <div className="car-con-detail-box">
                <h4>{car.Doors}</h4>
                <span>{carIcon}</span>
              </div>
              <div className="car-con-detail-box">
                <span>{carIcon}</span>
                <h4>{car.Transmission}</h4>
              </div>
              <div className="car-con-detail-box">
                <h4>{car.Fuel}</h4>
                <span>{carIcon}</span>
              </div>
            </div>
            <div className="p-4 w-full border-t">
              <button className="button w-full">Book Ride</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default VehicleModels;
