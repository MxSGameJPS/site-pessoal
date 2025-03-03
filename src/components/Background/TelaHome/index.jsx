import styled from "styled-components";

export default function BackGroundHome({ children }) {
  return <BackGround>{children}</BackGround>; // Passa os filhos
}

const BackGround = styled.section`
  width: 100%;
  min-height: 100vh; /* Garante altura mínima da tela */
  background: linear-gradient(45deg, #022057, #23498f, #819ed3);
  position: relative; /* Garante contexto para filhos */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Alinha conteúdo e footer */
`;