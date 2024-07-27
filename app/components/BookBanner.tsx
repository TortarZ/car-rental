import React from "react";
import "./Styles/BookBanner.css";
import Image from "next/image";

function BookBanner() {
  return (
    <>
      <section className="book-banner">
        <div className="book-banner-box">
          <h1>Book a car by getting in touch with us</h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-phone"
            >
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
            </svg>
            <h1>(123) 456-7869</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookBanner;
