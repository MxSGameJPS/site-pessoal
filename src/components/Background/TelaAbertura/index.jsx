import React from "react";
import styled from "styled-components";
import Nave from "./nave.svg"; // Importa o SVG da mesma pasta

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
      {/* Nave com SVG */}
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
    transform: translateX(-50%); /* Começa centralizado */
    width: 500px; /* Ajusta pro tamanho da tua nave.svg */
    height: 300px; /* Ajusta proporcional à imagem */
    max-width: 100%;
    background-image: url(${Nave}); /* Usa o SVG como background */
    background-size: contain; /* Mantém proporção */
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent; /* Garante que o fundo seja transparente */
    /* Remove clip-path e gradiente antigos */
    /* background: linear-gradient(90deg, #ffffff, #000000, #878f97, #878f97, #000000, #878f97, #878f97, #000000, #ffffff); */
    /* clip-path: polygon(50% 0%, 20% 60%, 0% 100%, 100% 100%, 80% 60%); */
    /* border: 2px solid #e6f0fa; */
    /* border-radius: 100%; */
    animation: realisticMove 10s infinite ease-in-out; /* Animação realista */
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

  @keyframes realisticMove {
    0% {
      transform: translateX(-50%) translateY(0); /* Começa centralizado */
    }
    25% {
      transform: translateX(-60%) translateY(-10px); /* Desloca pra esquerda e sobe leve */
    }
    50% {
      transform: translateX(-40%) translateY(10px); /* Volta pra direita e desce leve */
    }
    75% {
      transform: translateX(-60%) translateY(-10px); /* Outro ciclo */
    }
    100% {
      transform: translateX(-50%) translateY(0); /* Volta ao centro */
    }
  }
`;

export default SpaceBackground;