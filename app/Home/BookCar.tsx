"use client";
import { useState } from "react";
import "./Styles/BookCar.css";
import Image from "next/image";
import CarData from "../data/car-data.json";
import Location from "../data/location.json";

const BookCar = () => {
  const initialSelectValue = {
    carType: "Audi A1 S-Line",
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    dropOffDate: "",
  };

  const [selectValues, setSelectValues] = useState(initialSelectValue);
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);
  const [modal, setModal] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setSelectValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    })); // รีเซ็ต error เมื่อมีการเปลี่ยนแปลงค่า
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const values = Object.values(selectValues);
    if (values.some((value) => value === "")) {
      setError("All fields required!");
      return;
    }
    // ดำเนินการต่อถ้าค่าเลือกถูกต้อง
    console.log("Selected Values:", selectValues);
    setError("");
    setModal(!modal);
  };

  const handleReserveSubmit = (event: any) => {
    event.preventDefault();
    setComplete(!complete);
    setModal(!modal);
  };

  const handleCloseModal = () => {
    setModal(!modal);
  };

  const handleError = () => {
    setError("");
  };

  const handleComplete = () => {
    setComplete(!complete);
  };

  let toggleClassError = error ? "active_error" : "";
  let toggleClassComplete = complete ? "active_complete" : "";
  let toggleClassModal = modal ? "active_modal" : "";

  return (
    <>
      <section className="book_car">
        <div className="book_car_con">
          <h2>Book a car</h2>
          <div className={`booking_car_error ${toggleClassError}`}>
            <p className="error_text">{error}</p>
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
              className="tabler-icon tabler-icon-x cursor-pointer close_menu"
              onClick={handleError}
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </div>
          <div className={`booking_car_complete ${toggleClassComplete}`}>
            <p className="complete_text">
              Check your email to confirm an order.
            </p>
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
              className="tabler-icon tabler-icon-x cursor-pointer close_menu"
              onClick={handleComplete}
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </div>
          <form action="" method="POST" onSubmit={handleSubmit}>
            <div className="book_car_con_box">
              <div>
                <label htmlFor="carType">
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
                    className="input-icon"
                  >
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                  </svg>
                  Select Your Car Type
                  <b>*</b>
                </label>
                <select name="carType" id="carType" onChange={handleChange}>
                  <option value="">Select your car type</option>
                  {CarData.map((car) => (
                    <option value={car.name} key={car.id}>
                      {car.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="pickUpLocation">
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
                    className="input-icon"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                  Pick-up
                  <b>*</b>
                </label>
                <select
                  name="pickUpLocation"
                  id="pickUpLocation"
                  onChange={handleChange}
                >
                  <option value="">Select pick up location</option>
                  {Location.map((location) => (
                    <option value={location.location} key={location.location}>
                      {location.location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="dropOffLocation">
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
                    className="input-icon"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                  Drop-off
                  <b>*</b>
                </label>
                <select
                  name="dropOffLocation"
                  id="dropOffLocation"
                  onChange={handleChange}
                >
                  <option value="">Select drop off location</option>
                  {Location.map((location) => (
                    <option value={location.location} key={location.location}>
                      {location.location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="pickUpDate">
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
                    className="input-icon"
                  >
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 3l0 4"></path>
                    <path d="M8 3l0 4"></path>
                    <path d="M4 11l16 0"></path>
                    <path d="M8 15h2v2h-2z"></path>
                  </svg>
                  Pick-up
                  <b>*</b>
                </label>
                <input
                  type="date"
                  name="pickUpDate"
                  id="pickUpDate"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="dropOffDate">
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
                    className="input-icon"
                  >
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 3l0 4"></path>
                    <path d="M8 3l0 4"></path>
                    <path d="M4 11l16 0"></path>
                    <path d="M8 15h2v2h-2z"></path>
                  </svg>
                  Drop-off
                  <b>*</b>
                </label>
                <input
                  type="date"
                  name="dropOffDate"
                  id="dropOffDate"
                  onChange={handleChange}
                />
              </div>

              <div className="book_car_btn_box">
                <button type="submit" className="button book_car_btn">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className={`modal ${toggleClassModal}`}>
        <form className="booking_modal" autoComplete="on" method="POST">
          <div className="booking_modal_header">
            <h2>COMPLETE RESERVATION</h2>
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
              className="tabler-icon tabler-icon-x cursor-pointer close_menu"
              onClick={handleCloseModal}
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </div>
          <div className="booking_modal_title">
            <div>
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
                className="tabler-icon tabler-icon-info-circle-filled info_circle"
              >
                <path
                  d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              <h3>
                Upon completing this reservation enquiry, you will receive:
              </h3>
            </div>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          <div className="booking_modal_info">
            <div className="info_left">
              <h3>Location & Date</h3>
              <div className="info_left_box">
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
                  className="input-icon"
                >
                  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M16 3l0 4"></path>
                  <path d="M8 3l0 4"></path>
                  <path d="M4 11l16 0"></path>
                  <path d="M8 15h2v2h-2z"></path>
                </svg>
                <div className="info_left_detail">
                  <h4>Pick-Up Date & Time</h4>

                  <div className="info_left_item">
                    <p>{selectValues.pickUpDate} /</p>
                    <input type="time" name="pick_up_time" id="pick_up_time" />
                  </div>
                </div>
              </div>

              <div className="info_left_box">
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
                  className="input-icon"
                >
                  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M16 3l0 4"></path>
                  <path d="M8 3l0 4"></path>
                  <path d="M4 11l16 0"></path>
                  <path d="M8 15h2v2h-2z"></path>
                </svg>
                <div className="info_left_detail">
                  <h4>Drop-Off Date & Time</h4>
                  <div className="info_left_item">
                    <p>{selectValues.dropOffDate} /</p>
                    <input
                      type="time"
                      name="drop_off_time"
                      id="drop_off_time"
                    />
                  </div>
                </div>
              </div>

              <div className="info_left_box">
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
                  className="input-icon"
                >
                  <path
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
                <div className="info_left_detail">
                  <h4>Pick-Up Location</h4>
                  <p>{selectValues.pickUpLocation}</p>
                </div>
              </div>

              <div className="info_left_box">
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
                  className="input-icon"
                >
                  <path
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
                <div className="info_left_detail">
                  <h4>Drop-Off Location</h4>
                  <p>{selectValues.dropOffLocation}</p>
                </div>
              </div>
            </div>

            <div className="info_right">
              <div className="info_right_box">
                <h3>Car -</h3>
                <h3>{selectValues.carType}</h3>
              </div>
              <Image
                width={100}
                height={100}
                sizes="100%"
                alt="name"
                src={`/cars/${selectValues.carType}.jpg`}
                className="responsiveImage"
              />
            </div>
          </div>
          <div className="booking_modal_personal">
            <h3>PERSONAL INFORMATION</h3>
            <div className="personal_info_box">
              <div>
                <label htmlFor="fName">
                  First Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Enter your first name"
                />
                <p>This field is required</p>
              </div>

              <div>
                <label htmlFor="lName">
                  Last Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Enter your last name"
                />
                <p>This field is required</p>
              </div>

              <div>
                <label htmlFor="phoneNumber">
                  Phone Number <b>*</b>
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                />
                <p>This field is required</p>
              </div>

              <div>
                <label htmlFor="age">
                  Age <b>*</b>
                </label>
                <input type="number" name="age" id="age" placeholder="18" />
                <p>This field is required</p>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="email">
                  Email <b>*</b>
                </label>
                <input
                  autoComplete="on"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                />
                <p>This field is required</p>
              </div>

              <div>
                <label htmlFor="address">
                  Address <b>*</b>
                </label>
                <input
                  autoComplete="on"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your street address"
                />
                <p>This field is required</p>
              </div>
            </div>

            <div className="personal_info_box">
              <div>
                <label htmlFor="city">
                  City <b>*</b>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter your city"
                />
                <p>This field is required</p>
              </div>

              <div>
                <label htmlFor="zipCode">
                  Zip Code <b>*</b>
                </label>
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  placeholder="Enter your zip code"
                />
                <p>This field is required</p>
              </div>
            </div>
          </div>
          <div className="booking_modal_checkbox">
            <input type="checkbox" name="sendNews" id="sendNews" />
            <p>Please send me latest news and updates</p>
          </div>
          <div className="booking_modal_reserve">
            <button className="button" onClick={handleReserveSubmit}>
              Reserve Now
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default BookCar;
