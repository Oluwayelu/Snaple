import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Background = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: #cecece;
  opacity: 0.7;
`;

export const Card = styled.div`
  width: 90vw;
  position: relative;
  background-color: white;
  opacity: 1;
  border-radius: 20px;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  color: red;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const CardBody = styled.div`
  font-size: 15px;
  font-weight: 400;
  padding: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 20px;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 20px;
  }
`;

export const Level = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: black;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "col" ? "column" : "row"};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify === "between" && "space-between"};
`;

export const Button = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  color: white;
  margin: 0 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const Congrats = styled.div`
  position: relative;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
