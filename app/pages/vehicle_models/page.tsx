"use client";
import React, { useState } from "react";
import CarData from "../../data/car-data.json";
import { styled, ThemeProvider } from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.main};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 2px lightgray;
  text-transform: uppercase;
  transition: ease background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

Button.defaultProps = {
  theme: {
    main: "#3949ab",
    hover: "#283593",
  },
};

const theme = {
  main: "#e91e63",
  hover: "#ad1457",
};

const [audi, golf6, camry, bmw, benz, passat] = CarData;
const types = ["audi", "golf6", "camry", "bmw", "benz", "passat"];

const clickMe = () => {
  alert("You clicked me!");
};
const page = () => {
  return (
    <>
      <div>
        <h3 id="demo">Audi</h3>
        <Button onClick={clickMe}>Button</Button>
        <ThemeProvider theme={theme}>
          <Button>Button</Button>
        </ThemeProvider>
      </div>
    </>
  );
};
export default page;
