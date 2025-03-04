import styled from "styled-components";

export default function BackGroundSkills({ children }) {
  return <StyledBackGroundSkills>{children}</StyledBackGroundSkills>; // Passa os filhos
}



const StyledBackGroundSkills = styled.section`
  margin: 0;
  min-height: 100vh;
  background-image: url("/chegda.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative; /* Garante contexto para filhos */
  display: flex;
  flex-direction: column;
  align-items: center; /* Alinha conteúdo e footer */

  @media (max-width: 1024px) {
    min-height: 80vh; /* Reduz altura em tablets */
    background-size: cover; /* Ajusta pra caber sem cortar */
  }

  @media (max-width: 480px) {
    min-height: 60vh; /* Reduz mais em celulares */
    background-size: cover; /* Garante visibilidade */
  }
`;