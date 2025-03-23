// import { TiHomeOutline } from "react-icons/ti";
// import { BsPersonBadge } from "react-icons/bs";
// import { IoFileTrayStacked } from "react-icons/io5";
// import { GiSkills } from "react-icons/gi";
// import { BiSolidContact } from "react-icons/bi";
import styled from "styled-components";
// import { Link } from "react-router";
import NavigationButtons from "./NavigationButtons";

// const HeaderIcon = [
//   { icon: TiHomeOutline, title: "Home" },
//   { icon: BsPersonBadge, title: "Sobremim" },
//   { icon: IoFileTrayStacked, title: "Projetos" },
//   { icon: GiSkills, title: "Habilidades" },
//   { icon: BiSolidContact, title: "Contato" },
// ];
export default function HeaderIcons() {
  return (
    <ContainerIcons>
      <NavigationButtons />
    </ContainerIcons>
  );
}

const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #899706;
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    padding: 5px; /* Menor padding */
    svg {
      /* Alvo os ícones dentro do div */
      font-size: 1.5em; /* Reduz tamanho dos ícones (ajusta como quiser) */
    }
  }
`;
