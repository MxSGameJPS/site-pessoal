import React from "react";
import styled from "styled-components";

export default function TextoEstilizado() {
  return (
    <ContainerText>
      <StyledWrapper>
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Saulo Pavanello&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Front-End&nbsp;
          </span>
        </button>
      </StyledWrapper>
    </ContainerText>
  );
}

const ContainerText = styled.div`
display: flex;
justify-content: center;
margin-top: 10%;
`

const StyledWrapper = styled.div`
  /* === removing default button style ===*/
  .button {
    margin: 0 auto;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  /* button styling */
  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(255, 255, 255, 0.6);
    --animation-color: #FFD700;
    --fs-size: 10em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }
  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }
  /* hover */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 40px var(--animation-color));
  }


  @media (max-width: 1024px) {
    .button {
    --border-right: 6px;
    --fs-size: 2em;
    letter-spacing: 1px;    
  }
  }
`;