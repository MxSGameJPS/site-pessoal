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
      cor: "#E34F26",
      icon: <IoLogoHtml5 size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "CSS3",
      cor: "#1a1897",
      icon: <IoLogoCss3 size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "Sass",
      cor: "#CC6699",
      icon: <IoLogoSass size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "JavaScript ES6+",
      cor: "#dbc60b",
      icon: <IoLogoJavascript size={30} color="#000000" />,
      proficiencia: "Intermediário",
    },
    {
      habilidade: "ReactJS",
      cor: "#61DAFB",
      icon: <IoLogoReact size={30} />,
      proficiencia: "Intermediário",
    },
    {
      habilidade: "NodeJS",
      cor: "#8BC34A",
      icon: <FaNode size={30} />,
      proficiencia: "Intermediário",
    },
    {
      habilidade: "Express Js",
      cor: "#37393a",
      icon: <SiExpress size={30} />,
      proficiencia: "Intermediário",
    },
    {
      habilidade: "MongoDB",
      cor: "#4CAF50",
      icon: <SiMongodb size={30} />,
      proficiencia: "Iniciante",
    },
    {
      habilidade: "FireBase",
      cor: "#ff5507",
      icon: <FaFire size={30} />,
      proficiencia: "Iniciante",
    },
    {
      habilidade: "ReactNative",
      cor: "#61DAFB",
      icon: <IoLogoReact size={30} />,
      proficiencia: "Iniciante",
    },
    {
      habilidade: "TypeScript",
      cor: "#007acc",
      icon: <SiTypescript size={30} />,
      proficiencia: "Iniciante",
    },
    {
      habilidade: "NextJS",
      cor: "#000000",
      icon: <RiNextjsFill size={30} />,
      proficiencia: "Iniciante",
    },
  ]);

  const [habilidadesDesign] = useState([
    {
      habilidade: "Figma",
      cor: "#e70e0e",
      icon: <FaFigma size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "Adobe XD",
      cor: "#6d0c7a",
      icon: <SiAdobexd size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "Git",
      cor: "#E34F26",
      icon: <SiGit size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "GitHub",
      cor: "#474747",
      icon: <SiGithub size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "Wordpress",
      cor: "#535353",
      icon: <SiWordpress size={30} />,
      proficiencia: "Avançado",
    },
    {
      habilidade: "Docker",
      cor: "#2926e3",
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
          <h2> Ferramentas de Desenvolvimento </h2>
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
