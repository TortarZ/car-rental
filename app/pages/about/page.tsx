"use client";
import React, { useState } from "react";

// คอมโพเนนต์สำหรับแต่ละคำถามและคำตอบ
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div>
      <div
        onClick={onClick}
        style={{
          cursor: "pointer",
          marginBottom: "10px",
          backgroundColor: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {question}
      </div>
      {isOpen && (
        <div
          style={{
            marginLeft: "20px",
            marginBottom: "10px",
            backgroundColor: "#e9e9e9",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

// คอมโพเนนต์หลักสำหรับแสดง FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // เก็บดัชนีของคำถามที่เปิดอยู่

  const faqData = [
    { question: "คำถามที่ 1", answer: "คำตอบสำหรับคำถามที่ 1" },
    { question: "คำถามที่ 2", answer: "คำตอบสำหรับคำถามที่ 2" },
    { question: "คำถามที่ 3", answer: "คำตอบสำหรับคำถามที่ 3" },
  ];

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index); // สลับการเปิด/ปิดคำถาม
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>FAQ</h2>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
