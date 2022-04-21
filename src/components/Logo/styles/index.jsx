import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  position: relative;
  font-family: monospace;
  font-size: ${({ sm }) => (sm ? "20px" : "30px")};
`;

export const Apple = styled.div`
  width: ${({ sm }) => (sm ? "8px" : "12px")};
  height: ${({ sm }) => (sm ? "8px" : "12px")};
  border-radius: 100%;
  position: absolute;
  background-color: red;
  top: 20%;
  left: 25%;
`;
