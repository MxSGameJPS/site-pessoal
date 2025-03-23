import styled from "styled-components";

export default function BackGroundSkills({ children }) {
  return (
    <StyledBackGroundSkills>
      <BackgroundOverlay />
      {children}
    </StyledBackGroundSkills>
  );
}

const StyledBackGroundSkills = styled.section`
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    #051c42 60%,
    #1d4b91 100%
  );
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 80vh; /* Reduz altura em tablets */
    background-size: cover; /* Ajusta pra caber sem cortar */
  }

  @media (max-width: 480px) {
    min-height: 60vh; /* Reduz mais em celulares */
    background-size: cover; /* Garante visibilidade */
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 15% 40%,
      rgba(65, 105, 225, 0.15) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 85% 60%,
      rgba(42, 82, 190, 0.1) 0%,
      transparent 40%
    ),
    url("/chegda.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  opacity: 0.6;
  z-index: 0;
`;
