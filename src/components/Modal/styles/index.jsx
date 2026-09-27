import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 20;
`;

export const Background = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: rgba(3, 6, 12, 0.75);
  backdrop-filter: blur(4px);
`;

export const Card = styled.div`
  width: 90vw;
  position: relative;
  background: linear-gradient(160deg, #16233b, #0b1220);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 20px 60px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  color: #e6fff0;
  @media (min-width: 768px) {
    width: 50vw;
    max-width: 480px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding-top: 24px;
  font-size: 24px;
  font-weight: 800;
  color: ${({ won }) => (won ? "#39ff88" : "#ff5d5d")};
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const CardBody = styled.div`
  font-size: 15px;
  font-weight: 400;
  padding: 16px 20px;
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 20px 28px;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  padding: 16px 20px 24px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Level = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: rgba(230, 255, 240, 0.6);
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "col" ? "column" : "row"};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify === "between" && "space-between"};
  margin-bottom: 16px;
  font-weight: 600;
`;

export const Button = styled.button`
  width: 100%;
  height: 42px;
  display: flex;
  border: none;
  color: #0b1220;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  cursor: pointer;
  background-color: ${({ color }) => color};
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const Congrats = styled.div`
  position: relative;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
  color: #39ff88;
  text-align: center;
  padding: 0 16px;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;
