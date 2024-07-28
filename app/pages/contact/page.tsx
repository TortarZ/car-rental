import React from "react";
import "./style.css";

const Contact = () => {
  const telephoneIcon = (
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
      className="tabler-icon tabler-icon-phone"
    >
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
    </svg>
  );

  const mail = (
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
  );

  const cursorArrow = (
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
      className="tabler-icon tabler-icon-location"
    >
      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
    </svg>
  );

  const sendEmail = (
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
      className="tabler-icon tabler-icon-mail-opened"
    >
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
      <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path>
      <path d="M3 19l6 -6"></path>
      <path d="M15 13l6 6"></path>
    </svg>
  );
  return (
    <>
      <section className="p-8 bg-white flex justify-center">
        <article className="flex flex-col items-center text-center gap-6 contact-con p-4 md:grid grid-cols-2 lg:w-4/5">
          <div className="flex flex-col gap-6 text-center items-center md:text-start md:items-start">
            <h1>Need additional information&#63;</h1>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <a className="flex gap-2 contact-link">
              <span>{telephoneIcon}</span>
              <h4>(123) 456&minus;7869</h4>
            </a>
            <a className="flex gap-2 contact-link">
              <span>{mail}</span>
              <h4>carrantal@carmail.com</h4>
            </a>
            <a className="flex gap-2 contact-link">
              <span>{cursorArrow}</span>
              <h4>Belgrade, Serbia</h4>
            </a>
          </div>
          <form
            action=""
            method="POST"
            className="flex flex-col gap-4 w-full mt-8 contact-form"
            autoComplete="on"
          >
            <label htmlFor="fName">
              Full Name <b>*</b>
            </label>
            <input
              type="text"
              id="fName"
              name="fName"
              placeholder={`E.g: "John Doe"`}
            />
            <label htmlFor="email">
              Email <b>*</b>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="youremail@example.com"
              autoComplete="on"
            />
            <div className="flex flex-col">
              <label htmlFor="tellUsAboutIt">
                Tell us about it <b>*</b>
              </label>
              <textarea
                name="tellUsAboutIt"
                id="tellUsAboutIt"
                className="h-32 p-4 mt-4"
                placeholder="Write Here..."
              ></textarea>
            </div>
            <div className="button flex justify-center items-center gap-2">
              <span>{sendEmail}</span>
              <h3>Send Message</h3>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default Contact;
