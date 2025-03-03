import React from "react";
import styled from "styled-components";
import { TiHomeOutline } from "react-icons/ti";
import { BsPersonBadge } from "react-icons/bs";
import { IoFileTrayStacked } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";
import { Link } from "react-router";

const headerBtnIcons = [
  { icon: TiHomeOutline, route: "home" },
  { icon: BsPersonBadge, route: "sobre-mim" },
  { icon: IoFileTrayStacked, route: "projetos" },
  { icon: GiSkills, route: "habilidades" },
  { icon: BiSolidContact, route: "contato" },
];

const ButtonHeader = () => {
  return (
    <StyledWrapper>
      {headerBtnIcons.map((button) => {
        const IconComponent = button.icon;
        return (
            <Link to={`/${button.route}`} key={button.route}>
                <button className="Btn">
                <span className="svgContainer">
                    <IconComponent />
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

  .Btn {
    width: 45px;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    /* overflow: hidden; */
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
    color: #fff;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent; /* Fundo escuro */
      z-index: -1;
      border-radius: 7px;
      transition: all 0.3s;
    }

    &:hover {
      transform: rotate(25deg); /* Gira o fundo */
      transform-origin: bottom;
    }

    &:hover .svgContainer {
      background-color: rgba(0, 0, 0, 0.466); /* Cinza translúcido */
      backdrop-filter: blur(4px); /* Blur no hover */
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
  }

  /* .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #181818;
    z-index: -1;
    border-radius: 10px;
    pointer-events: none;
    transition: all .3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
    backdrop-filter: blur(4px);
  } */
`;

export default ButtonHeader;
