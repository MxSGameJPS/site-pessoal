import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardsProjetos = ({ project }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__image">
          <img src={project.imageUrl} alt={project.name} />
        </div>
        <div className="card__content">
          <p className="card__title">{project.name}</p>
          <p className="card__description">{project.description}</p>
          <div className="card__tech-container">
            <span className="card__tech-label">Tecnologia:</span>
            <span className="card__tech-value">{project.tecnologia}</span>
          </div>
          <Link
            to={project.url}
            className="card__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Projeto
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin: 1rem;

  .card {
    position: relative;
    width: 320px;
    height: 220px;
    background: var(--primary-color);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    }
  }

  .card__image {
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }

  .card:hover .card__image img {
    transform: scale(1.1);
    filter: blur(2px) brightness(0.7);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    box-sizing: border-box;
    background: linear-gradient(
      to bottom,
      rgba(5, 22, 53, 0.8) 0%,
      rgba(10, 60, 133, 0.85) 100%
    );
    backdrop-filter: blur(5px);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease;
  }

  .card:hover .card__content {
    opacity: 1;
    transform: translateY(0);
  }

  .card__title {
    margin: 0 0 0.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }

  .card__description {
    margin: 0 0 1rem;
    font-size: 0.95rem;
    color: #e6e6ff;
    line-height: 1.5;
    text-align: center;
    font-weight: 400;
  }

  .card__tech-container {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    background: rgba(0, 0, 0, 0.2);
    padding: 0.4rem 0.8rem;
    border-radius: 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .card__tech-label {
    font-size: 0.85rem;
    color: var(--tertiary-color);
    font-weight: 600;
    margin-right: 0.4rem;
  }

  .card__tech-value {
    font-size: 0.85rem;
    color: #ffffff;
  }

  .card__button {
    padding: 0.6rem 1.4rem;
    border: none;
    border-radius: 30px;
    background: var(--tertiary-color);
    color: #ffffff;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

    &:hover {
      background: var(--accent-light);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 280px;
      height: 200px;
    }

    .card__title {
      font-size: 1.2rem;
    }

    .card__description {
      font-size: 0.85rem;
      margin-bottom: 0.8rem;
    }

    .card__tech-container {
      margin-bottom: 1rem;
      padding: 0.3rem 0.7rem;
    }

    .card__button {
      padding: 0.5rem 1.2rem;
      font-size: 0.85rem;
    }
  }
`;

export default CardsProjetos;
