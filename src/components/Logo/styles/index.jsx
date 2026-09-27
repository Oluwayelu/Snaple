import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  position: relative;
  font-family: "Courier New", monospace;
  font-weight: 800;
  letter-spacing: 1px;
  color: #e6fff0;
  font-size: ${({ sm }) => (sm ? "20px" : "34px")};
  text-shadow: 0 0 18px rgba(57, 255, 136, 0.35);
`;

export const Apple = styled.div`
  width: ${({ sm }) => (sm ? "8px" : "12px")};
  height: ${({ sm }) => (sm ? "8px" : "12px")};
  border-radius: 100%;
  position: absolute;
  background-color: #ff4d6d;
  box-shadow: 0 0 8px rgba(255, 77, 109, 0.8);
  top: 15%;
  left: 22%;
`;
