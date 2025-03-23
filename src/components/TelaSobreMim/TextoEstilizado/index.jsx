import React from "react";
import styled from "styled-components";

const TituloSobreMim = () => {
  return (
    <StyledSobreMim>
      <div className="title">SOBRE MIM</div>
    </StyledSobreMim>
  );
};

const StyledSobreMim = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  position: relative;

  .title {
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
    background: linear-gradient(
      to right,
      var(--tertiary-color),
      #ffffff,
      var(--tertiary-color)
    );
    background-size: 200% auto;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    animation: gradientMove 6s linear infinite;

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

  @media (max-width: 768px) {
    padding: 1rem 0;

    .title {
      font-size: 2.5rem;

      &:after {
        width: 60px;
        height: 3px;
        bottom: -8px;
      }
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

export default TituloSobreMim;
