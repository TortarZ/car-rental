import React from "react";
import "./Styles/FAQ.css";

const FAQ = () => {
  return (
    <>
      <section className="faq-con">
        <div className="faq-con-title">
          <h4>FAQ</h4>
          <h2>Frequently Asked Questions</h2>
          <p>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="faq-con-content">
          <div className="faq-box">
            <div className="question active-question">
              <p>1. What is special about comparing rental car deals?</p>
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
                className="tabler-icon tabler-icon-chevron-down"
              >
                <path d="M6 9l6 6l6 -6"></path>
              </svg>
            </div>
            <div className="active-answer">
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </div>
          </div>
          <div className="faq-box">
            <div className="question">
              <p>2. How do I find the car rental deals?</p>
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
                className="tabler-icon tabler-icon-chevron-down"
              >
                <path d="M6 9l6 6l6 -6"></path>
              </svg>
            </div>
          </div>
          <div className="faq-box">
            <div className="question">
              <p>3. How do I find such low rental car prices?</p>
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
                className="tabler-icon tabler-icon-chevron-down"
              >
                <path d="M6 9l6 6l6 -6"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
