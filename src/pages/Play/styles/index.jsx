import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 90px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding: 100px 50px 20px;
  }
  @media (min-width: 1024px) {
    padding: 20px 100px;
  }
`;

export const GameSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: inline-flex;
  margin-top: ${({ mt }) => `${mt}px`};
  flex-direction: ${({ direction }) =>
    direction === "col" ? "column" : "row"};
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    width: 50%;
    justify-content: ${({ justify }) => (justify === "end" ? "end" : "start")};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(11, 18, 32, 0.55);
  backdrop-filter: blur(2px);
  cursor: pointer;
`;

export const OverlayCard = styled.div`
  padding: 14px 22px;
  border-radius: 12px;
  background: rgba(15, 23, 40, 0.9);
  color: #e6fff0;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  box-shadow: 0 0 0 1px rgba(57, 255, 136, 0.35), 0 0 20px rgba(57, 255, 136, 0.25);
`;
