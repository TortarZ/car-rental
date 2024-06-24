"use client";
import Image from "next/image";
import React from "react";
import "./Styles/Header.css";
import { useEffect, useState } from "react";

const logo_h = 52;
const logo_w = 145;
const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const openNavBar = () => {
    setOpenNav((openNav) => !openNav);
  };

  let toggleClassCheck = openNav ? "active-nav" : "";

  return (
    <>
      <header className="header">
        <div className="navbar-con">
          <a href="/">
            <Image
              src="/logo.png"
              height={logo_h}
              width={logo_w}
              alt="logo"
              priority
            />
          </a>
          <ul className="navbar-link">
            <li className="nav-hover">Home</li>
            <li className="nav-hover">About</li>
            <li className="nav-hover">Vehicle Models</li>
            <li className="nav-hover">Testimonials</li>
            <li className="nav-hover">Our Team</li>
            <li className="nav-hover">Contact</li>
          </ul>
          <div className="navbar-btns">
            <a href="/" className="nav-hover signin-btn">
              Sign In
            </a>
            <a href="/" className="button regis-btn">
              Register
            </a>
          </div>
        </div>
        <div className="navbar-con-mobile">
          <a href="/">
            <Image
              src="/logo.png"
              height={logo_h}
              width={logo_w}
              alt="logo"
              priority
            />
          </a>
          <a className="mobile-hamburger" onClick={openNavBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-menu-2"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </a>
        </div>
        <div className={`navbar-side ${toggleClassCheck}`}>
          <ul className="navbar-side-box">
            <li>Home</li>
            <li>About</li>
            <li>Models</li>
            <li>Testimonials</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
          <a className="navbar-side-close-btn" onClick={openNavBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-x"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </a>
        </div>
      </header>
      <div className="scroll-up">^</div>
    </>
  );
};

export default Header;
