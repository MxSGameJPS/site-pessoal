import BackGroundSkills from "../components/Background/TelaSkills";
import React, { useState } from "react";
import TituloSkills from "../components/TelaSkills/TituloSkills";
import CardHabilidades from "../components/TelaSkills/CardsSkills";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoJavascript,
} from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaNode, FaFire, FaFigma } from "react-icons/fa";
import { SiAdobexd, SiDocker, SiExpress, SiGit, SiGithub, SiMongodb, SiTypescript, SiWordpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import styled from "styled-components";

export default function Habilidades() {
  const [habilidades] = useState([
    {
      habilidade: "HTML5",
      cor: "linear-gradient(45deg, #E34F26, #fca78d)", // De vermelho escuro pra laranja
      icon: <IoLogoHtml5 size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "CSS3",
      cor: "linear-gradient(45deg, #1a1897, #7474fa)", // De azul escuro pra roxo claro
      icon: <IoLogoCss3 size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "Sass",
      cor: "linear-gradient(45deg, #d6438d, #fdb7da)", // De rosa escuro pra rosa claro
      icon: <IoLogoSass size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "JavaScript ES6+",
      cor: "linear-gradient(45deg, #dbc60b, #a18a08)", // De amarelo ouro pra amarelo brilhante
      icon: <IoLogoJavascript size={30} color="#000000" />,
      proficiencia: "Intermediário",
    },
    {
      habilidade: "ReactJS",
      cor: "linear-gradient(45deg, #61DAFB, #aaebfc)", // De azul claro pra ciano
      icon: <IoLogoReact size={30} />,
      proficiencia: "Intermediário",
    },
    {
      habilidade: "NodeJS",
      cor: "linear-gradient(45deg, #8BC34A, #b7d891)", // De verde oliva pra verde claro
      icon: <FaNode size={30} />,
      proficiencia: "Intermediário",
    },
    {
      habilidade: "Express Js",
      cor: "linear-gradient(45deg, #37393a, #6D7072)", // De cinza escuro pra cinza médio
      icon: <SiExpress size={30} />,
      proficiencia: "Intermediário",
    },
    {
      habilidade: "MongoDB",
      cor: "linear-gradient(45deg, #439e46, #81C784)", // De verde escuro pra verde claro
      icon: <SiMongodb size={30} />,
      proficiencia: "Iniciante",
    },
    {
      habilidade: "FireBase",
      cor: "linear-gradient(45deg, #ff0707, #fdafaf)", // De laranja escuro pra laranja claro
      icon: <FaFire size={30} />,
      proficiencia: "Iniciante",
    },
    {
      habilidade: "ReactNative",
      cor: "linear-gradient(45deg, #61DAFB, #81E6FF)", // Mesma paleta do ReactJS
      icon: <IoLogoReact size={30} />,
      proficiencia: "Iniciante",
    },
    {
      habilidade: "TypeScript",
      cor: "linear-gradient(45deg, #007acc, #92dafc)", // De azul forte pra azul claro
      icon: <SiTypescript size={30} />,
      proficiencia: "Iniciante",
    },
    {
      habilidade: "NextJS",
      cor: "linear-gradient(45deg, #000000, #535353)", // De preto pra cinza escuro
      icon: <RiNextjsFill size={30} />,
      proficiencia: "Iniciante",
    },
  ]);

  const [habilidadesDesign] = useState([
    {
      habilidade: "Figma",
      cor: "linear-gradient(45deg, #e00000, #fdafaf)",
      icon: <FaFigma size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "Adobe XD",
      cor: "linear-gradient(45deg, #6200d3, #deaffd)",
      icon: <SiAdobexd size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "Git",
      cor: "linear-gradient(45deg, #ff4d07, #fdc5af)",
      icon: <SiGit size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "GitHub",
      cor: "linear-gradient(45deg, #363636, #a5a5a5)",
      icon: <SiGithub size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "Wordpress",
      cor: "linear-gradient(45deg, #6e6e6e, #464646)",
      icon: <SiWordpress size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "Docker",
      cor: "linear-gradient(45deg, #002ab4, #2d60eb)",
      icon: <SiDocker size={30} />,
      proficiencia: "Iniciante",
    },
  ]);

  return (
    <BackGroundSkills>
      <TituloSkills />
      <ContainerCardsSkills>
        {habilidades.map((habilidade, index) => (
          <CardHabilidades key={index} habilidade={habilidade} />
        ))}
      </ContainerCardsSkills>
        <Div>
          <h3> Ferramentas de Desenvolvimento </h3>
        </Div>
        <ContainerCardsSkills>
        {habilidadesDesign.map((habilidade, index) => (
          <CardHabilidades key={`design-${index}`} habilidade={habilidade} />
        ))}        
        </ContainerCardsSkills>
    </BackGroundSkills>
  );
}

const Div = styled.div`
  font-size: 2rem;
  text-align: center;
  color: #fff;
`;

const ContainerCardsSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: rem;
  flex-wrap: wrap;
`;
