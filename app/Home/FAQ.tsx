"use client";
import { useState } from "react";
import "./Styles/FAQ.css";

const faqData = [
  {
    id: 1,
    question: "What is special about comparing rental car deals",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    id: 2,
    question: "How do I find the car rental deals",
    answer:
      "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travel city allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    id: 3,
    question: "How do I find such low rental car prices",
    answer:
      "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travel city to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];

const FAQ = () => {
  const [selectQuestion, setSelectQuestion] = useState(faqData[0]);

  const toggle = (i: any) => {
    setSelectQuestion(i);
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
        {faqData.map((item, i) => (
          <div className="faq-con-content" key={item.id}>
            <div
              className={`question ${
                selectQuestion.question === item.question ? "active" : ""
              }`}
              onClick={() => toggle(item)}
            >
              <p>
                {i + 1}.{item.question}
              </p>
              <span>&#709;</span>
            </div>
            <div
              className={`answer ${
                selectQuestion.answer === item.answer ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default FAQ;
