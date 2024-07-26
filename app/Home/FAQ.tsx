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

const FAQItem = ({ question, answer, isOpen, onClick, index }: any) => {
  const [isActive, setIsActive] = useState(false);

  let toggleClassActive = isOpen ? "active" : "";
  let toggleClassAnswer = isOpen ? "show" : "";

  return (
    <div className="faq-con-content">
      <div onClick={onClick} className={`question ${toggleClassActive}`}>
        <div>
          {index}
          <b>.</b>
          {question}
        </div>
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
      {isOpen && <div className={`answer ${toggleClassAnswer}`}>{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index: any) => {
    setOpenIndex(index === openIndex ? null : index);
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
        <div className="faq-con-container">
          {faqData.map((item, i) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={i === openIndex}
              index={i + 1}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
