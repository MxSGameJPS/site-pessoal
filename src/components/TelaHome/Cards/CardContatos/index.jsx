import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContato = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__date">
          <span className="date">Fale comigo</span>
          <span className="time">Contato</span>
        </div>
        <div className="popup">
          <p className="title">Vamos criar algo incrível!</p>
          <p>Vamos trabalhar juntos?</p>
          <button className="btn-primary">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/contato"
            >
              Entrar em contato
            </Link>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  z-index: 1;

  .card {
    width: 164px;
    height: 276px;
    background: url("/fundocontato.png");
    background-size: cover;
    background-position: center;
    border: 3px solid rgb(20, 20, 20);
    border-radius: 15px;
    position: relative;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    transition: all 0.4s ease;
    color: antiquewhite;
    overflow: hidden;

    @media (max-width: 480px) {
      width: 120px;
      height: 200px;
      padding: 3px;
      gap: 15px;
    }

    @media (max-width: 768px) {
      width: 140px;
      height: 240px;
      padding: 4px;
      gap: 18px;
    }

    &:hover {
      background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95)),
        url("/fundocontato.png");
      background-size: cover;
      background-position: center;
      .card__date,
      .popup {
        opacity: 1;
      }
    }
  }

  .btn-primary {
    background-color: #6a4c9f;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    margin-top: 5px;

    &:hover {
      background-color: #513a7c;
      transform: translateY(-2px);
    }

    a {
      text-decoration: none;
      color: #fff;
      font-size: 11px;
      display: block;
    }

    @media (max-width: 480px) {
      padding: 3px 8px;

      a {
        font-size: 9px;
      }
    }

    @media (max-width: 768px) {
      padding: 4px 9px;

      a {
        font-size: 10px;
      }
    }
  }

  .card::before {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: rgb(17, 4, 94);

    @media (max-width: 480px) {
      width: 8px;
      height: 8px;
    }

    @media (max-width: 768px) {
      width: 9px;
      height: 9px;
    }
  }

  .card__date {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;

    @media (max-width: 480px) {
      margin-top: 15px;
    }

    @media (max-width: 768px) {
      margin-top: 18px;
    }

    .date {
      font-weight: 600;
      font-size: 0.85em;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }
  }

  .time {
    font-size: 1.6em;
    font-weight: bold;
    margin-top: 2px;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);

    @media (max-width: 480px) {
      font-size: 1.2em;
    }

    @media (max-width: 768px) {
      font-size: 1.4em;
    }
  }

  .popup {
    background-color: rgba(79, 55, 107, 0.85);
    backdrop-filter: blur(2px);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    padding: 8px;
    overflow: hidden;

    p {
      margin: 3px 0;
    }

    @media (max-width: 480px) {
      font-size: 0.6em;
      padding: 6px;
    }

    @media (max-width: 768px) {
      font-size: 0.7em;
      padding: 7px;
    }
  }

  .popup .title {
    font-size: 10px;
    color: #ffccdd;
    font-weight: bold;
    margin-bottom: 3px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);

    @media (max-width: 480px) {
      font-size: 8px;
    }

    @media (max-width: 768px) {
      font-size: 9px;
    }
  }

  .card__date,
  .popup {
    opacity: 0;
    transition: all 0.5s ease;
  }

  .card:hover {
    transform: scale(1.15);
    box-shadow: 0px 0px 15px 5px rgba(106, 76, 159, 0.7);
    z-index: 5;
  }

  /* Para garantir que funcione em dispositivos móveis também */
  @media (max-width: 768px) {
    .card:active {
      transform: scale(1.15);
      box-shadow: 0px 0px 15px 5px rgba(106, 76, 159, 0.7);
      z-index: 5;
    }

    .card:active .card__date,
    .card:active .popup {
      opacity: 1;
    }
  }
`;

export default CardContato;
