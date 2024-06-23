import React from "react";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-con">
        <div className="footer-con-box">
          <ul className="footer-content">
            <li>
              CAR <span>Rental</span>
            </li>
            <li className="car-rental-content-text">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li className="car-rental-content-contact">
              <a href="#">
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
                  className="tabler-icon tabler-icon-phone-call"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
                (123) -456-789
              </a>
            </li>
            <li className="car-rental-content-contact">
              <a href="#">
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
                  className="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
                carrental@gmail.com
              </a>
            </li>
            <li className="car-rental-design-link">
              <a href="#">Design by XpeedStudio</a>
            </li>
          </ul>
          <ul className="footer-content">
            <li>COMPANY</li>
            <li className="company-link">
              <a href="">Careers</a>
            </li>
            <li className="company-link">
              <a href="">New York</a>
            </li>
            <li className="company-link">
              <a href="">Mobile</a>
            </li>
            <li className="company-link">
              <a href="">Blog</a>
            </li>
            <li className="company-link">
              <a href="">How we work</a>
            </li>
          </ul>
          <ul className="footer-content">
            <li>WORKING HOURS</li>
            <li>Mon - Fri: 9:00AM - 19:00PM</li>
            <li>Sat: 9:00AM - 20:00PM</li>
            <li>Sun: Closed</li>
          </ul>
          <ul className="footer-content">
            <li>SUBSCRIPTION</li>
            <li>Subscribe your Email address for latest news & updates.</li>
            <li>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="input-email"
              />
            </li>
            <li>
              <button className="button">Submit</button>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
