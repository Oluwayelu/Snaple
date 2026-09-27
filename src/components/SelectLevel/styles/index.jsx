import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #e6fff0;
  letter-spacing: 0.5px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 10px;
`;

export const Main = styled.div`
  width: 100%;
  text-align: center;
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: rgba(230, 255, 240, 0.6);
`;

export const Button = styled.button`
  padding: 8px 14px;
  height: 38px;
  display: flex;
  color: #0b1220;
  border: none;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: ${({ active, color }) =>
    active ? `0 0 0 2px #0b1220, 0 0 0 4px ${color}` : "none"};
  background-color: ${({ color }) => color};
  opacity: ${({ active }) => (active ? 1 : 0.85)};

  &:hover {
    transform: translateY(-1px);
    opacity: 1;
  }
`;
