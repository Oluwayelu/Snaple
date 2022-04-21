import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  position: absolute;
  align-items: center;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`;

export const LeftSection = styled.div``;

export const RightSection = styled.div`
  font-weight: 600;
  text-align: right;
`;
