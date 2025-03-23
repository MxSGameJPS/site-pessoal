import React from "react";
import styled from "styled-components";

const CardHabilidades = ({ habilidade }) => {
  if (!habilidade) {
    return <div>Erro: Habilidade não definida</div>;
  }

  const nivelProficiencia = {
    Avançado: 90,
    Intermediário: 65,
    Iniciante: 40,
  };

  const nivelValor = nivelProficiencia[habilidade.proficiencia] || 50;

  return (
    <StyledCard habilidade={habilidade} nivelValor={nivelValor}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <div className="icon-container">{habilidade.icon}</div>
            <h3 className="tech-name">{habilidade.habilidade}</h3>
          </div>

          <div className="card-back">
            <h3 className="tech-name">{habilidade.habilidade}</h3>
            <div className="proficiency">
              <span className="proficiency-label">
                Nível: {habilidade.proficiencia}
              </span>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin: 1rem;
  perspective: 1000px;

  .card {
    width: 200px;
    height: 200px;
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;

    &:hover {
      transform: rotateY(180deg);
    }
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  .card-front {
    background: ${(props) => props.habilidade.cor};
    color: white;

    .icon-container {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));

      svg {
        width: 50px;
        height: 50px;
      }
    }

    .tech-name {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  .card-back {
    background: linear-gradient(145deg, #051c42, #0b2f68);
    color: white;
    transform: rotateY(180deg);

    .tech-name {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
      color: var(--tertiary-color);
    }

    .proficiency {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .proficiency-label {
      font-size: 0.9rem;
      color: #e6e6ff;
    }

    .progress-bar {
      width: 100%;
      height: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      overflow: hidden;
      position: relative;
    }

    .progress-fill {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: ${(props) => props.nivelValor}%;
      background: var(--tertiary-color);
      border-radius: 5px;
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 180px;
      height: 180px;
    }

    .card-front {
      .icon-container {
        font-size: 2rem;

        svg {
          width: 40px;
          height: 40px;
        }
      }

      .tech-name {
        font-size: 1.1rem;
      }
    }

    .card-back {
      .tech-name {
        font-size: 1.2rem;
        margin-bottom: 1.2rem;
      }
    }
  }

  @media (max-width: 480px) {
    margin: 0.7rem;

    .card {
      width: 150px;
      height: 150px;
    }

    .card-front,
    .card-back {
      padding: 1rem;
    }

    .card-front {
      .icon-container {
        font-size: 1.8rem;
        margin-bottom: 0.8rem;

        svg {
          width: 35px;
          height: 35px;
        }
      }

      .tech-name {
        font-size: 1rem;
      }
    }

    .card-back {
      .tech-name {
        font-size: 1.1rem;
        margin-bottom: 1rem;
      }

      .proficiency-label {
        font-size: 0.8rem;
      }
    }
  }
`;

export default CardHabilidades;
