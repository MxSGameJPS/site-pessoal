import React from "react";
import styled from "styled-components";

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
    animation: flyBy 1s linear infinite; /* Rápido pra alta velocidade */
  }

  .spaceship {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 520px;
    height: 180px;
    /* background: #656b6d; */
    background: linear-gradient(90deg, #ffffff, #000000, #878f97, #878f97, #000000, #878f97, #878f97, #000000, #ffffff);
    clip-path: polygon(50% 0%, 20% 60%, 0% 100%, 100% 100%, 80% 60%);    
    border: 2px solid #e6f0fa;
    border-radius: 100%;
    box-shadow: 110px 130px 390px rgba(24, 193, 223, 0.7);
    animation: enginePulse 0.5s infinite alternate; /* Tremor da nave */
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
      transform: translateX(0) translateY(0); /* Começa na direita */
      opacity: 0.5;
    }
    100% {
      transform: translateX(-100vw) translateY(90vh); /* Vai pra esquerda e desce */
      opacity: 1;
    }
  }

  @keyframes enginePulse {
    0% {
      box-shadow: 0px 0px 20px rgba(0, 168, 232, 0.2);
    }
    100% {
      box-shadow: 50px 50px 150px rgba(0, 168, 232, 1);
    }
  }
`;

export default SpaceBackground;
