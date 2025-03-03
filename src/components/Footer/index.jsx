import styled from "styled-components";

export default function Footer() {
  return (
    <Rodape>
      <img src="/Ativo1.png" alt="Logo" />
      <div className="textofooter">
        <h3>Saulo Pavanello</h3>
        <p>Front-End Developer | Ui/UX Designer | React | Front-End Mobile</p>
      </div>
    </Rodape>
  );
}

const Rodape = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin: 0 auto;
  background: linear-gradient(45deg, #022057, #23498f, #819ed3);
  padding: 10px 0; /* Adiciona padding pra não colar */
  width: 100%; /* Garante largura total */
  box-sizing: border-box; /* Inclui padding na largura */

  img {
    width: 30px;
    height: 30px;
  }

    .textofooter {
    text-align: center;
    }
    
    .textofooter p {
      font-size: 0.8rem;
    }

  /* Mantém na base, mas ajusta em mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem 0;
    

    img {
      width: 20px;
      height: 20px;
    }
  }
`;