import React from "react";
import styled from "styled-components";
import { FaLaptopCode } from "react-icons/fa";

const TituloSkills = () => {
  return (
    <StyledHeader>
      <h1 className="title">Minhas Habilidades</h1>
      <p className="subtitle">Tecnologias e ferramentas que domino</p>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  padding: 2.5rem 1rem 1.5rem;
  text-align: center;
  position: relative;
  z-index: 1;
  
  .title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1.2rem;
    background: linear-gradient(to right, var(--tertiary-color), #ffffff, var(--tertiary-color));
    background-size: 200% auto;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradientMove 6s linear infinite;
    position: relative;
    display: inline-block;
    
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--tertiary-color);
      border-radius: 2px;
    }
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #e6e6ff;
    margin: 1.5rem auto 0;
    max-width: 600px;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem;
    
    .title {
      font-size: 2.2rem;
      
      &:after {
        width: 60px;
        height: 3px;
        bottom: -8px;
      }
    }
    
    .subtitle {
      font-size: 1rem;
      margin-top: 1.2rem;
    }
  }
  
  @keyframes gradientMove {
    0% {
      background-position: 0% center;
    }
    50% {
      background-position: 100% center;
    }
    100% {
      background-position: 0% center;
    }
  }
`;

export default TituloSkills;
