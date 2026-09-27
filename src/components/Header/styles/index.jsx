import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  padding: 14px 20px;
  position: fixed;
  z-index: 10;
  align-items: center;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  background: ${({ center }) => (center ? "transparent" : "rgba(7, 12, 22, 0.7)")};
  backdrop-filter: ${({ center }) => (center ? "none" : "blur(8px)")};
  border-bottom: ${({ center }) => (center ? "none" : "1px solid rgba(255,255,255,0.06)")};
  @media (min-width: 768px) {
    padding: 16px 40px;
  }
`;

export const LeftSection = styled.div``;

export const RightSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
  text-align: right;
  color: rgba(230, 255, 240, 0.85);
`;

export const ScoreLabel = styled.p`
  color: ${({ lead }) => (lead ? "#39ff88" : "inherit")};
`;
