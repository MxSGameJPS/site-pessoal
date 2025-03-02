import styled from "styled-components";

export default function BackGroundHome({ children }) { // Adiciona children como prop
  return <BackGround>{children}</BackGround>; // Passa os filhos
}

const BackGround = styled.section`
  width: 100vw;
  height: 100vh;
  background: #022058;
  overflow: hidden;
`;