import React from 'react';
import styled from 'styled-components';

const TituloSobreMim = () => {
  return (
    <StyledSobreMim>
        <div className="shine">SOBRE MIM</div>
    </StyledSobreMim>
  );
}

const StyledSobreMim = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  .shine {
    font-size: 5em;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.3);
    background: #222 linear-gradient(
        linear,
        left top,
        right top,
        from(#222),
        to(#222),
        color-stop(2, #fff)
      ) 0 0 no-repeat;
    background-image: linear-gradient(
      -40deg,
      transparent 0%,
      transparent 40%,
      #fff 50%,
      transparent 60%,
      transparent 100%
      
    );
    background-clip: text;
    background-size: 50px;
    animation: zezzz;
    animation-duration: 7s;
    animation-iteration-count: infinite;
  }

  @media (max-width: 768px) {
    .shine {
      font-size: 3em;
    }
  }
  @keyframes zezzz {
    0%,
    10% {
      background-position: -200px;
    }
    20% {
      background-position: top left;
    }
    100% {
      background-position: 200px;
    }
  }`;

export default TituloSobreMim;
