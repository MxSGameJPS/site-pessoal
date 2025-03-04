import React from "react";
import { Link } from "react-router";
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
          <p>Vamos trabalhar juntos e criar algo incrível</p>
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
  .card {
    width: 164px;
    height: 276px;
    background: rgb(0, 0, 0);
    border: 3px solid rgb(17, 4, 94);
    border-radius: 15px;
    position: relative;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    transition: all 1s ease;
    color: antiquewhite;

    @media (max-width: 480px) {
      width: 120px; /* Reduz largura */
      height: 200px; /* Reduz altura */
      padding: 3px; /* Reduz padding */
      gap: 15px; /* Reduz gap */
    }

    /* Para tablets */
    @media (max-width: 768px) {
      width: 140px; /* Ajuste intermediário */
      height: 240px; /* Ajuste intermediário */
      padding: 4px; /* Ajuste de padding */
      gap: 18px; /* Ajuste de gap */
    }
  }

  .btn-primary {
    background-color: #9cbde2;
    border: 1px solid #9cbde2;
    border-radius: 5px;
    padding: 3px;
    cursor: pointer;

    @media (max-width: 480px) {
      padding: 2px;
      font-size: 10px;
    }

    @media (max-width: 768px) {
      padding: 2.5px;
      font-size: 12px;
    }
  }

  .card::before {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: 10px;
    right: 77px;
    border-radius: 50%;
    background-color: rgb(17, 4, 94);

    @media (max-width: 480px) {
      width: 8px;
      height: 8px;
      right: 55%;
      left: 30%;
    }

    @media (max-width: 768px) {
      width: 9px;
      height: 9px;
      right: 55%;
      left: 49%;
    }
  }

  .card__date {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    @media (max-width: 480px) {
      margin-top: 20px;
    }

    @media (max-width: 768px) {
      margin-top: 25px;
    }
  }

  .time {
    font-size: 2em;

    @media (max-width: 480px) {
      font-size: 1.5em;
    }

    @media (max-width: 768px) {
      font-size: 1.8em;
    }
  }

  .popup {
    background-color: #4f376b;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    padding: 3px;

    @media (max-width: 480px) {
      font-size: 0.6em;
      padding: 2px;
    }

    @media (max-width: 768px) {
      font-size: 0.7em;
      padding: 2.5px;
    }
  }

  .popup .title {
    font-size: 9px;
    color: #9cbde2;

    @media (max-width: 480px) {
      font-size: 7px;
    }

    @media (max-width: 768px) {
      font-size: 8px;
    }
  }

  .card__date,
  .popup {
    opacity: 0;
    transition: all 0.5s ease;
  }

  .card:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 10px 10px #289fed;
  }

  .card:hover .card__date,
  .card:hover .popup {
    opacity: 1;

    @media (max-width: 768px) {
      .card:active {
        transform: scale(1.2);
        box-shadow: 0px 0px 10px 10px #289fed;
      }

      .card:active .card__date,
      .card:active .popup {
        opacity: 1;
      }
    }
  }
`;

export default CardContato;
