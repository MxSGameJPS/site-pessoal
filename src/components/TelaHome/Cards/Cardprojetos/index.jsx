import React from "react";
import styled from "styled-components";

const CardProjetos = () => {
  return (
    <StyledWrapper>
      <div className="card-border">
        <div className="card-b">
          <div className="container-log">
            <div className="log" />
            <div className="log-inside">
              <img className="firs" src="/Ativo1.png" alt="logo" />
              <div className="first"></div>
              {/* <div className="second" /> */}
            </div>
          </div>
          <div id="blur-area" />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span className="viper">Projetos Projects Projetos</span>
              <span className="viper">FrontEnd FrontEnd FrontEnd</span>
              <span className="viper">Saulo Pavanello Saulo Pavanello</span>
            </div>
          </div>
        </div>
        <div className="mist-container">
          <div className="mist" />
        </div>
        <strong id="text-ext"></strong>
        <strong id="text-border">Projetos</strong>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-border {
    z-index: 0;
    position: relative;
    padding: 1rem;
    width: 300px;
    height: 350px;
    box-sizing: border-box;
    background: transparent;
    backdrop-filter: blur(40px);
    border-radius: 0px 2rem;
    background-image: radial-gradient(#22395389, #05455ecc),
      linear-gradient(35deg, #122549 62%, #5776ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 1px 1px 3rem #578cff;
    transition: all 0.5s;
    animation: pulse_3011 3s infinite;
  }

  .card-b {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0px 0.8rem;
    background: linear-gradient(
      346.8deg,
      #121349 30%,
      #16405c 30%,
      rgba(255, 70, 84, 0) 30%,
      rgba(255, 70, 84, 0) 32%,
      #121849 32%,
      #124942 35%,
      transparent 35%
    );
  }

  strong {
    display: flex;
    height: 100%;
    width: 100%;
    text-transform: uppercase;
    font-family: "Open Sans Pro", sans-serif;
    font-size: 1.6rem;
    font-weight: 900;
    align-items: center;
    letter-spacing: 0.5rem;
  }

  #text-border {
    position: absolute;
    top: 15.35rem;
    left: 1.5rem;
    width: 100%;
    height: fit-content;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(255, 255, 255);
    background: linear-gradient(90deg, transparent 100%, #ffffff 65%);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
  }

  .marquee {
    top: 0;
    z-index: -5;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    --offset: 2rem;
    --move-initial: calc(-20% + var(--offset));
    --move-final: calc(-85% + var(--offset));
    border-radius: 0px 1rem;
    filter: opacity(0.3);
  }

  .marquee__inner {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: slide 60s linear infinite;
    border-radius: 0px 1rem;
  }

  .marquee__inner {
    animation-play-state: running;
  }

  #blur-area {
    display: block;
    position: absolute;
    z-index: -1;
    inset: 0;
    /* border: 1px solid rgb(12, 255, 65); */
    border-radius: 0 1rem;
    backdrop-filter: blur(3px);
    background: linear-gradient(90deg, transparent 0%, #00000044 100%);
  }

  .viper {
    display: flex;
    text-transform: uppercase;
    font-family: "Open Sans Pro", sans-serif;
    font-size: 8rem;
    font-weight: 900;
    align-items: center;
    line-height: 0.9em;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(255, 255, 255);
  }

  .container-log {
    display: flex;
    position: absolute;
    width: 3.5rem;
    height: 3em;
    top: 1rem;
    left: 1rem;
    align-items: center;
    justify-content: center;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }

  .log {
    position: absolute;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      #223d86 0%,
      #fff 10%,
      #7bd5ff 25%,
      #0d2338 50%,
      #1c62cc 70%,
      #6989b3 90%
    );
    animation: spin 5s linear infinite;
  }

  .log-inside {
    display: flex;
    width: 85%;
    height: 85%;
    align-items: center;
    justify-content: center;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    background-color: #212121;
  }

  .firs,
  .second {
    position: absolute;
    width: 80%;
    height: 80%;
    /* background-color: #5784ff; */
  }

  .first {
    clip-path: polygon(0 10%, 70% 90%, 35% 90%, 0 50%);
  }

  .second {
    clip-path: polygon(100% 10%, 100% 50%, 88% 65%, 55% 65%);
  }

  .mist-container {
    position: absolute;
    width: 450px;
    height: 150px;
    overflow: hidden;
    filter: blur(1rem);
    top: 60%;
    left: 0;
  }

  .mis {
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(131, 241, 255, 0.63) 10%,
      rgba(255, 255, 255, 0) 50%
    );
    animation: mist 10s infinite both;
  }

  .card-border:hover {
    transform: rotateY(20deg);
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  

  @keyframes mist {
    0% {
      transform: translateX(-50%) translateY(0%) scaleY(0.7) rotate(0deg);
      opacity: 0.3;
    }

    50% {
      transform: translateX(0%) translateY(50%) scaleY(-10.3) rotate(20deg);
      opacity: 0.5;
    }

    100% {
      transform: translateX(-50%) translateY(0%) scaleY(0.7) rotate(-20deg);
      opacity: 0.3;
    }
  }

  @keyframes pulse_3011 {
    0% {
      box-shadow: 0 0 1rem #57c1ff;
    }

    70% {
      box-shadow: 0 0 2rem #57fff7;
    }

    100% {
      box-shadow: 0 0 1rem #57ffff;
    }
  }

  @keyframes slide {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }
`;

export default CardProjetos;
