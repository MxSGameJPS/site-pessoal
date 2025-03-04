import styled from "styled-components";

const CardHabilidades = ({ habilidade }) => {
  

  if (!habilidade) {
    return <div>Erro: Habilidade não definida</div>;
  }

  return (
    <StyledWrapper habilidade={habilidade}>
      <>
      <div className="card">
        <div className="card-content">
          {habilidade.icon} {habilidade.habilidade}
        </div>
        {/* <div className="card-hover-content">{habilidade.proficiencia}</div> */}
      </div>      
      </>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 220px;
    height: 320px;
    background: ${props => props.habilidade.cor}; /* Usa a cor diretamente */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
    color: #ffffff;
    margin: 10px;

    @media (max-width: 1024px) {
      width: 180px;
      height: 280px;
      font-size: 20px;
      border-radius: 12px;
    }

    @media (max-width: 480px) {
      width: 150px;
      height: 240px;
      font-size: 18px;
      border-radius: 10px;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 2;
  }

  .card::before,
  .card::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    background-color: ${props => props.habilidade.cor + "50"}; /* 50% opacidade */
    transition: all 0.5s;
    opacity: 0;

    @media (max-width: 1024px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  .card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  .card:hover::before,
  .card:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    opacity: 1;
    transition: all 0.5s;
  }
  
  .card:hover .card-content {
    opacity: 0; /* Esconde o texto original no hover */
  }

  .card:hover::after {
    content: "${props => props.habilidade.proficiencia}"; /* Exibe a proficiência */
  }
`;

export default CardHabilidades;