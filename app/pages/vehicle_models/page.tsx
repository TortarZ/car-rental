"use client";
import React, { useState } from "react";
import CarData from "../../data/car-data.json";
import { styled, ThemeProvider } from "styled-components";

interface ButtonProps {
  $active?: boolean;
}

const Button = styled.button<ButtonProps>`
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
  &:disabled {
    cursor: default;
    background-color: ${(props) => theme.hover};
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

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ $active }) => $active && `opacity: 1`}
`;

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div className="flex gap-10 mt-5">
      {types.map((type) => (
        <ButtonToggle
          $active={active === type}
          onClick={() => setActive(type)}
          key={type}
        >
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}

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
          <Button disabled onClick={clickMe}>
            Button
          </Button>
        </ThemeProvider>
      </div>
      {ToggleGroup()}
    </>
  );
};
export default page;
