import React from "react";
import styled from "styled-components";

const TextoDestaque = () => {
  return (
    <StyledWrapper>
      <p className="txt">Desenvolvedor Front-End</p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .txt {
    position: relative;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.4em;
    font-weight: 700;
    letter-spacing: 3px;
    overflow: hidden;
    background: linear-gradient(90deg, #ffffff, #b3e0ff, #ffffff);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 3s ease-in-out infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }

  @keyframes animate {
    0% {
      background-position: -200%;
    }
    50% {
      background-position: 200%;
    }
    100% {
      background-position: -200%;
    }
  }

  @media (max-width: 768px) {
    .txt {
      font-size: 1.2em;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 480px) {
    .txt {
      font-size: 1em;
      letter-spacing: 1.5px;
    }
  }
`;

export default TextoDestaque;
