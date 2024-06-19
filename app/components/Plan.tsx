import React from "react";
import "./Styles/Plan.css";
import Image from "next/image";

const Plan = () => {
  return (
    <>
      <section>
        <div className="plan-container">
          <div className="plan-container-title">
            <h3>Plan your trip now</h3>
            <h2>Quick & easy car rental</h2>
          </div>
          <div className="plan-container-boxes">
            <div className="plan-container-boxes-box">
              <Image
                src="/car.png"
                width={0}
                height={0}
                alt="car"
                priority
                sizes="100vh"
                className="plan-img"
              />
              <h2>Select Car</h2>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="plan-container-boxes-box">
              <Image
                src="/contact.png"
                width={0}
                height={0}
                alt="car"
                priority
                sizes="100vh"
                className="plan-img"
              />
              <h2>Contact Operator</h2>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="plan-container-boxes-box">
              <Image
                src="/drive.png"
                width={0}
                height={0}
                alt="car"
                priority
                sizes="100vh"
                className="plan-img"
              />
              <h2>Let's Drive</h2>
              <p>
                Whether you;re hitting the open road, we've hot you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plan;
