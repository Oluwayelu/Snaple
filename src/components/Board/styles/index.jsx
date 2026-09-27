import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 4px;
  background: linear-gradient(145deg, #1c2740, #0f1728);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06),
    0 20px 45px rgba(0, 0, 0, 0.45), 0 0 30px rgba(57, 255, 136, 0.08);
  height: ${({ sm }) => (sm ? "26vh" : "42vh")};
  width: ${({ sm }) => (sm ? "70vw" : "92vw")};
  max-width: ${({ sm }) => (sm ? "260px" : "480px")};

  @media (min-width: 1024px) {
    height: ${({ sm }) => (sm ? "260px" : "480px")};
    width: ${({ sm }) => (sm ? "260px" : "480px")};
  }
`;

export const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
