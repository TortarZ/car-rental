"use client";
import { useState } from "react";
import "./Styles/FAQ.css";

const faqData = [
  {
    question: "What is special about comparing rental car deals",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    question: "How do I find the car rental deals",
    answer:
      "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travel city allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    question: "How do I find such low rental car prices",
    answer:
      "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travel city to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];

const FAQ = () => {
  const [selectQuestion, setSelectQuestion] = useState(faqData[0]);

  const handleClick = (faq: any) => {
    setSelectQuestion(faq);
  };
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
          {faqData.map((faq, i) => (
            <div className="faq-box">
              <a
                onClick={() => handleClick(faq)}
                className={`question ${
                  selectQuestion.question === faq.question
                    ? "active-question"
                    : ""
                }`}
              >
                <p>
                  {i + 1}. {faq.question}?
                </p>
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
              </a>
              <div
                className={`answer ${
                  selectQuestion.question === faq.question
                    ? "active-answer"
                    : ""
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
