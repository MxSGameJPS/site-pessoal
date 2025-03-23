import styled from "styled-components";

export default function TextoHome() {
  return (
    <ContainerTextoHome>
      <h1>Por que me escolher para seu projeto?</h1>
      <p>
        No vasto universo digital, seu projeto merece estar perfeito. Como um
        desenvolvedor Front-End apaixonado e um UI Designer com visão moderna,
        eu transformo ideias em sites que deslumbram e performam. Com expertise
        em criar interfaces intuitivas e código otimizado, garanto resultados
        que conquistam clientes e impulsionam seu sucesso online. Minha
        dedicação vai além do básico: eu entrego soluções personalizadas, com
        prazos cumpridos e um toque de inovação que faz a diferença. Vamos
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
  padding: 2.5rem;
  background: linear-gradient(45deg, #041328, #1e478c, #3a6cbf);
  border-radius: 4rem 0;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.3);
  transform: rotate(1deg);
  color: #ffffff;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4rem 0;
    backdrop-filter: blur(1px);
  }

  h1 {
    font-size: 2.2rem;
    margin: 0 0 1.5rem 0;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2;
    font-weight: 700;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 0;
    position: relative;
    z-index: 2;
    color: #f0f8ff;
    font-weight: 400;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1024px) {
    transform: rotate(0);
    padding: 2rem;
    border-radius: 2rem 0;

    &::before {
      border-radius: 2rem 0;
    }

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
