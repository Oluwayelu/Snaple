import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  font-size: 21px;
  font-weight: bold;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  width: 100%;
  text-align: center;
`;

export const Button = styled.div`
  padding: 2px 10px;
  margin: 5px;
  height: 40px;
  display: flex;
  color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  box-shadow: ${({ active }) => active && "0 0 0 2px green"};
  background-color: ${({ color }) => color};
`;
