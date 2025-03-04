import React from "react";
import { Link } from "react-router";
import styled from "styled-components";


const CardsProjetos = ({ project }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <Link to={project.url} target= "_blank" height="100%">
            <img src={project.imageUrl} alt="" />
        </Link> 
        <div className="card__content">
          <p className="card__title">{project.name}</p>
          <p className="card__description">{project.description}</p>
          <p className="card__tech"> {"=>"} {project.tecnologia}</p>
          <button><Link to={project.url} target= "_blank" style={{ textDecoration: 'none', color: 'inherit'}} >Ver Projeto</Link></button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 200px;
    background: linear-gradient(-45deg, #ac8711 0%, #060e81 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card img {
    width: 100%;
    height: 100%;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

    button {
      border: none;
      padding: 5px;
      border-radius: 25px 0;
      background: linear-gradient(-45deg, #ac8711 0%, #060e81 100%);
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: linear-gradient(-45deg, #f8bf03 0%, #1097f1 100%);
      }
    }

   
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
    font-weight: 600;
  }

  .card:hover svg {
    scale: 0;
    transform: rotate(-45deg);
  }

  .card__tech {
    margin: 5px 0 0;
    font-size: 14px;
    color: #555;
    display: flex;
    align-items: center;
    gap: 5px; /* Espaço entre ícone e texto */

    @media (max-width: 1024px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
      margin: 3px 0 0;
    }
  }
`;

export default CardsProjetos;
