import styled from "styled-components";

export default function BackGroundProjetos({ children }) {
  return (
    <StyledBackGroundProjetos>
      <BackgroundOverlay />
      {children}
    </StyledBackGroundProjetos>
  );
}

const StyledBackGroundProjetos = styled.section`
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    #0a2c59 50%,
    #1e4b94 100%
  );
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(49, 114, 221, 0.2) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(84, 58, 183, 0.1) 0%,
      transparent 40%
    ),
    url("/fundoprojetos.png");
  background-repeat: no-repeat;
  background-size: cover, cover, contain;
  background-position: center;
  background-blend-mode: screen;
  opacity: 0.6;
  z-index: 0;
`;
