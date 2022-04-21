import React from "react";
import { Title, Apple } from "./styles";

const Logo = ({ sm }) => {
  return (
    <Title sm={sm}>
      <span
        style={{
          color: "green",
          fontSize: `${sm ? "30px" : "50px"}`,
        }}
      >
        S
      </span>
      NAPLE
      <Apple sm={sm} />
    </Title>
  );
};

export default Logo;
