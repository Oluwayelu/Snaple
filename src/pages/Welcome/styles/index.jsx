import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  position: ${({ position }) => position};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  width: 70%;
  height: 40px;
  display: flex;
  color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  @media (min-width: 1024px) {
    width: 30%;
  }
`;
