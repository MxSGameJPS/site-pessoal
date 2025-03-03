import styled from "styled-components";

export default function TextoHome() {
  return (
    <ContainerTextoHome>
      <h1>Porque me escolher, para desenvolver seu projeto?</h1>
      <p>
        No vasto universo digital, seu projeto merece estar perfeito. Como
        um desenvolvedor Front-End apaixonado e um UI Designer com visão
        moderna, eu transformo ideias em sites que deslumbram e performam. Com
        expertise em criar interfaces intuitivas e código otimizado, garanto
        resultados que conquistam clientes e impulsionam seu sucesso online.
        Minha dedicação vai além do básico: eu entrego soluções personalizadas,
        com prazos cumpridos e um toque de inovação que faz a diferença. Vamos
        juntos construir um site incrível que brilhe na internet? Entre em
        contato e vamos desenvolver seu projeto hoje!
      </p>
    </ContainerTextoHome>
  );
}

const ContainerTextoHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto 20px;
  max-width: 800px;
  padding: 2rem;
  background: linear-gradient(45deg, #051635, #7397d8, #9cb0d6);
  border-radius: 8rem 0;
  transform-box: fill-box;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  rotate: 3deg;

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  @media (max-width: 1024px) {
    rotate: 0deg;
  }
`;
