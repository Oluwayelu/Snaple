import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const bounce = keyframes`
  0% {
    margin-bottom: 0;
    background-color: yellow;
  }
  50% {
    margin-bottom: 1rem;
    background-color: green;
  }
  100% {
    margin-bottom: 0;
    background-color: red;
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;

  border-top: 2px solid green;
  border-right: 3px solid green;
  border-bottom: 5px solid green;
  border-left: 2px dashed red;

  background: transparent;

  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Dot = styled.div`
  background-color: black;
  border-radius: 100%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${bounce} 0.5s linear infinite;
  animation-delay: ${({ delay }) => delay};
`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-size: 40px;
`;
