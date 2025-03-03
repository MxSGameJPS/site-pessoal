import React from 'react';
import styled from 'styled-components';

const TextoDestaque = () => {
  return (
    <StyledWrapper>
      <p className="txt">Front-End Developer</p>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .txt {
    position: relative;
    font-family: sans-serif;
    font-size: 1em;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, #fff 10%, #4d4d4d 20%);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 7s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }

  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }`;

export default TextoDestaque;
