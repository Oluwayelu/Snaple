import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding: 20px 50px;
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

export const Controls = styled.div`
  display: flex;
  width: 280px;
  align-items: center;
  padding: 1em 0;
  @media (min-width: 1024px) {
    width: 400px;
  }
`;

export const ControlSection = styled.div`
  width: 100%;
`;

export const StartGameBtn = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResetGameBtn = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background-color: "#007baa";
`;
