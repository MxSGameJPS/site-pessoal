import React from "react";
import styled from "styled-components";
import Nave from "./nave.svg"; // Confirma que o caminho tá certo

const SpaceBackground = ({ children }) => {
  return (
    <StyledSpace>
      {/* Estrelas fixas no fundo */}
      <div className="fixedStar" />
      <div className="fixedStar" />
      <div className="fixedStar" />
      <div className="fixedStar" />
      <div className="fixedStar" />
      {/* Estrelas passando rápido */}
      <div className="movingStar" />
      <div className="movingStar" />
      <div className="movingStar" />
      <div className="movingStar" />
      <div className="movingStar" />
      {/* Nave */}
      <div className="spaceship" />
      {children}
    </StyledSpace>
  );
};

const StyledSpace = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000000;
  overflow: hidden;

  .fixedStar {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 50%;
  }

  .movingStar {
    position: absolute;
    width: 2px;
    height: 10px; /* Alongado pra parecer passando */
    background: #fff;
    animation: flyBy 1s linear infinite;
  }

  .spaceship {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 500px; /* Ajuste pro tamanho da imagem */
    height: 300px; /* Ajuste proporcional à imagem */
    max-width: 100%;
    background: url(${Nave}); /* Usa o import como URL */
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    /* Remove clip-path e bordas antigas */
    clip-path: polygon(50% 0%, 50% 60%, 0% 100%, 100% 100%, 80% 60%);
    /* border: 2px solid #e6f0fa; */
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.7);
    animation: enginePulse 0.5s infinite alternate;
  }

  /* Posições das estrelas fixas */
  .fixedStar:nth-child(1) {
    top: 10%;
    left: 20%;
  }
  .fixedStar:nth-child(2) {
    top: 30%;
    left: 40%;
  }
  .fixedStar:nth-child(3) {
    top: 50%;
    left: 60%;
  }
  .fixedStar:nth-child(4) {
    top: 70%;
    left: 30%;
  }
  .fixedStar:nth-child(5) {
    top: 90%;
    left: 80%;
  }

  /* Posições iniciais das estrelas móveis */
  .movingStar:nth-child(6) {
    top: 20%;
    left: 90%;
    animation-delay: 0s;
  }
  .movingStar:nth-child(7) {
    top: 40%;
    left: 85%;
    animation-delay: 0.2s;
  }
  .movingStar:nth-child(8) {
    top: 60%;
    left: 95%;
    animation-delay: 0.4s;
  }
  .movingStar:nth-child(9) {
    top: 80%;
    left: 80%;
    animation-delay: 0.6s;
  }
  .movingStar:nth-child(10) {
    top: 10%;
    left: 90%;
    animation-delay: 0.8s;
  }

  @keyframes flyBy {
    0% {
      transform: translateX(0) translateY(0);
      opacity: 0.5;
    }
    100% {
      transform: translateX(-100vw) translateY(90vh);
      opacity: 1;
    }
  }

  @keyframes enginePulse {
    0% {
      box-shadow: 0 0 20px rgba(0, 168, 232, 0.2);
    }
    100% {
      box-shadow: 50px 50px 150px rgba(0, 168, 232, 1);
    }
  }
`;

export default SpaceBackground;
