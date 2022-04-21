import styled from "styled-components";

export const Pad = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 200px;
  box-shadow: 0 0 0 2px black;
  border-radius: 100%;
  background-color: #fff;

  @media (min-width: 1024px) {
    height: 300px;
    width: 300px;
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
  box-shadow: ${({ center }) => center && "0 0 0 2px black"};
  border-radius: ${({ center }) => center && "100%"};
`;

export const Section = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
