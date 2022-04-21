import styled from "styled-components";

export const Board = styled.section`
  display: flex;
  background-color: #e5ff60;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 5px black;
  border-radius: 5px;
  height: ${({ sm }) => (sm ? "25vh" : "40vh")};
  width: ${({ sm }) => (sm ? "70%" : "100%")};

  @media (min-width: 1024px) {
    height: ${({ sm }) => (sm ? "250px" : "400px")};
    width: ${({ sm }) => (sm ? "250px" : "400px")};
  }
`;

export const Row = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  border: none;
`;
export const Column = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ isSnake, isApple, isBlock }) =>
    isSnake ? "green" : isApple ? "red" : isBlock ? "black" : ""};
  border-radius: ${({ isApple }) => isApple && "70%"};
  border-radius: ${({ snakeHead }) => snakeHead && "40%"};
`;
