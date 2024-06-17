import Image from "next/image";
import React from "react";
import "./Styles/Header.css";

const logo_h = 52;
const logo_w = 145;
const Header = () => {
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
            <a href="/" className="regis-btn">
              Register
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
