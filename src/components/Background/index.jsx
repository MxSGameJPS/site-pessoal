import React from "react";
import styled from "styled-components";

const SpaceBackground = ({ children }) => {
  return (
    <StyledSpace>
      {/* Estrelas animadas */}
      <div className="star" />
      <div className="planet" />
      <div className="star" />
      <div className="planet" />
      <div className="star" />
      <div className="planet" />
      <div className="star" />
      <div className="planet" />
      <div className="star" />
      <div className="planet" />
      <div className="star" />
      <div className="planet" />
      {/* Conteúdo (cards ou rotas) */}
      {children}
    </StyledSpace>
  );
};

const StyledSpace = styled.div`
  /* position: relative; */
  width: 100%;
  /* height: 100%; */
  /* max-width: 1440px; */
  /* max-height: 1900px; */
  background: #000000; /* Fundo espacial escuro */
  overflow: hidden;

  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #ffd700; /* Estrelas brancas, pode mudar pra #FFD700 */
    border-radius: 50%;
    animation: moveForward 5s linear infinite; /* Movimento constante */
  }

  .planet {
    position: absolute;
    width: 50px;
    height: 50px;
    background: #00a8e8; /* Estrelas brancas, pode mudar pra #FFD700 */
    border-radius: 50%;
    animation: moveForward 5s linear infinite; /* Movimento constante */
  }

  /* Posiciona as estrelas manualmente pra teste */
  .star:nth-child(1) {
    top: 10%;
    left: 20%;
    animation-delay: 0s;
  }
  .planet:nth-child(2) {
    top: 30%;
    left: 90%;
    animation-delay: 1s;
  }
  .star:nth-child(3) {
    top: 50%;
    left: 70%;
    animation-delay: 2s;
  }
  .planet:nth-child(4) {
    top: 90%;
    left: 90%;
    animation-delay: 3s;
  }
  .star:nth-child(5) {
    top: 90%;
    left: 80%;
    animation-delay: 4s;
  }
  planet:nth-child(6) {
    top: 40%;
    left: 90%;
    animation-delay: 4s;
  }
  /* Posiciona as estrelas manualmente pra teste */
  .star:nth-child(7) {
    top: 20%;
    left: 40%;
    animation-delay: 0s;
  }
  .planet:nth-child(8) {
    top: 10%;
    left: 90%;
    animation-delay: 1s;
  }
  .star:nth-child(9) {
    top: 90%;
    left: 90%;
    animation-delay: 2s;
  }
  .planet:nth-child(10) {
    top: 100%;
    left: 80%;
    animation-delay: 3s;
  }
  .star:nth-child(11) {
    top: 25%;
    left: 60%;
    animation-delay: 4s;
  }
  planet:nth-child(12) {
    /* Adiciona como 6º elemento no JSX */
    top: 100%;
    left: 100%;
    animation-delay: 4s;
  }

  @keyframes moveForward {
    0% {
      transform: translateX(0) scale(1); /* Começa pequeno na direita */
    }
    100% {
      transform: translateX(-100vw) scale(3); /* Vai pra esquerda e cresce */
    }
  }
`;

export default SpaceBackground;
