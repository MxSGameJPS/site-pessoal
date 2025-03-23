import React from "react";
import styled from "styled-components";
import { TiHomeOutline } from "react-icons/ti";
import { BsPersonBadge } from "react-icons/bs";
import { IoFileTrayStacked } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";
import { Link } from "react-router-dom";

const headerBtnIcons = [
  { icon: TiHomeOutline, route: "home", label: "Home" },
  { icon: BsPersonBadge, route: "sobre-mim", label: "Sobre Mim" },
  { icon: IoFileTrayStacked, route: "projetos", label: "Projetos" },
  { icon: GiSkills, route: "habilidades", label: "Habilidades" },
  { icon: BiSolidContact, route: "contato", label: "Contato" },
];

const NavigationButtons = () => {
  return (
    <StyledWrapper>
      {headerBtnIcons.map((button) => {
        const IconComponent = button.icon;
        return (
          <Link
            to={`/${button.route}`}
            key={button.route}
            aria-label={button.label}
          >
            <button className="Btn">
              <span className="svgContainer">
                <IconComponent />
                <span className="buttonText">{button.label}</span>
              </span>
            </button>
          </Link>
        );
      })}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  .Btn {
    width: auto;
    min-width: 45px;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
    color: #fff;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      z-index: -1;
      border-radius: 7px;
      transition: all 0.3s;
    }

    &:hover {
      transform: translateY(-5px);
    }

    &:hover .svgContainer {
      background-color: rgba(0, 0, 0, 0.466);
      backdrop-filter: blur(4px);
    }
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(0px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
    padding: 0 12px;
    gap: 8px;
  }

  .buttonText {
    display: none;

    @media (min-width: 768px) {
      display: inline;
    }
  }
`;

export default NavigationButtons;
