import styled from "styled-components";

export default function BackGroundHome({ children }) { // Adiciona children como prop
  return <BackGround>{children}</BackGround>; // Passa os filhos
}

const BackGround = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #022057, #23498f, #819ed3);
  overflow: hidden;
`;