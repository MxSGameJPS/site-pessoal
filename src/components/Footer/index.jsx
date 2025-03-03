import styled from "styled-components";

export default function Footer() {
  return (
    <Rodape>
      <img src="/Ativo1.png" alt="Logo" />
      <div>
        <h1>Saulo Pavanello</h1>
        <p>Front-End Developer</p>
      </div>
    </Rodape>
  );
}

const Rodape = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  background: linear-gradient(45deg, #022057, #23498f, #819ed3);
  padding: 1rem 0; /* Adiciona padding pra não colar */
  width: 100%; /* Garante largura total */
  box-sizing: border-box; /* Inclui padding na largura */

  img {
    width: 50px;
    height: 50px;
  }

  /* Mantém na base, mas ajusta em mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem 0;
    gap: 10px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;