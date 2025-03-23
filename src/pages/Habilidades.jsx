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
import {
  SiAdobexd,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
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
      <PageContainer>
        <TituloSkills />

        <SectionTitle>Linguagens e Frameworks</SectionTitle>
        <ContainerCardsSkills>
          {habilidades.map((habilidade, index) => (
            <CardHabilidades key={index} habilidade={habilidade} />
          ))}
        </ContainerCardsSkills>

        <SectionTitle>Ferramentas de Desenvolvimento</SectionTitle>
        <ContainerCardsSkills>
          {habilidadesDesign.map((habilidade, index) => (
            <CardHabilidades key={`design-${index}`} habilidade={habilidade} />
          ))}
        </ContainerCardsSkills>

        <Legend>
          <LegendItem>
            <LevelDot level="avancado" />
            <span>Avançado (≥ 2 anos)</span>
          </LegendItem>
          <LegendItem>
            <LevelDot level="intermediario" />
            <span>Intermediário (1-2 anos)</span>
          </LegendItem>
          <LegendItem>
            <LevelDot level="iniciante" />
            <span>Iniciante (≤ 1 ano)</span>
          </LegendItem>
        </Legend>
      </PageContainer>
    </BackGroundSkills>
  );
}

const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 1.8rem;
  margin: 2.5rem 0 1.5rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 0.5rem;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--tertiary-color);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 2rem 0 1.2rem;
  }
`;

const ContainerCardsSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 3rem auto 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
    margin: 2rem auto 1.5rem;
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  font-size: 0.9rem;
`;

const LevelDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.level === "avancado") return "var(--tertiary-color)";
    if (props.level === "intermediario") return "#4C9AFF";
    return "#8993A4";
  }};
`;
