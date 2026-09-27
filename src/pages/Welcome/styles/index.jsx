import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Tagline = styled.p`
  color: rgba(230, 255, 240, 0.55);
  font-size: 13px;
  text-align: center;
`;

export const Content = styled.div`
  margin-top: 4px;
  width: 100%;
  max-width: 360px;
  display: flex;
  position: ${({ position }) => position};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Button = styled.div`
  width: 70%;
  height: 44px;
  display: flex;
  color: #0b1220;
  font-weight: 700;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  box-shadow: 0 8px 24px rgba(57, 255, 136, 0.25);
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`;
