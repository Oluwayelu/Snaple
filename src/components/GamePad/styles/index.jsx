import styled from "styled-components";

export const Pad = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 200px;
  outline: 2px solid #000;
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
  outline: ${({ center }) => center && "2px solid #000000"};
  border-radius: ${({ center }) => center && "100%"};
`;

export const Section = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
