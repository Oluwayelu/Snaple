import styled from "styled-components";

export const Pad = styled.div`
  display: flex;
  flex-direction: column;
  height: 190px;
  width: 190px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 10px 30px rgba(0, 0, 0, 0.4);
  border-radius: 100%;
  background: radial-gradient(circle at 30% 30%, #1c2740, #0b1220);

  @media (min-width: 1024px) {
    height: 260px;
    width: 260px;
  }
`;

export const Button = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #e6fff0;
  transition: background 0.15s ease, color 0.15s ease;
  box-shadow: ${({ center }) => center && "0 0 0 2px #39ff88"};
  border-radius: ${({ center }) => center && "100%"};
  background: ${({ center }) => (center ? "rgba(57, 255, 136, 0.12)" : "transparent")};

  &:hover {
    color: #39ff88;
  }

  &:active {
    background: rgba(57, 255, 136, 0.2);
  }
`;

export const Section = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
