import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonInstagram = () => {
  return (
    <StyledWrapper>
      <button className="Btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 448 512"
          className="svgIcon"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
        <span className="text">
          <a
            href="https://www.instagram.com/mxsgamejps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.4s;
    cursor: pointer;
    position: relative;
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
    }
  }

  .svgIcon {
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .text {
    position: absolute;
    color: rgb(255, 255, 255);
    width: 120px;
    font-weight: 600;
    opacity: 0;
    transition-duration: 0.4s;

    @media (max-width: 480px) {
      width: 100px;
      font-size: 0.9rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .Btn:hover {
    width: 110px;
    transition-duration: 0.4s;
    border-radius: 30px;

    @media (max-width: 480px) {
      width: 90px;
    }
  }

  .Btn:hover .text {
    opacity: 1;
    transition-duration: 0.4s;
  }

  .Btn:hover .svgIcon {
    opacity: 0;
    transition-duration: 0.3s;
  }
`;

export default ButtonInstagram;
