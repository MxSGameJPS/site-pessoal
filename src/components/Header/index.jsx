import styled from "styled-components";
import TextoDestaque from "./TextoDestaque";
import HeaderIcons from "./IconHeader";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background: linear-gradient(45deg, #051635, #7397d8, #9cb0d6);
  color: #fff;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column; /* Muda pra vertical */
    justify-content: center; /* Centraliza tudo */
    padding: 1em; /* Reduz padding pra caber melhor */
    gap: 10px; /* Menor espaço entre elementos */

    .logo {
      display: none;
    }
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin-left: 200px;

  @media (max-width: 1024px) {
    margin-left: 0; /* Remove margem em mobile */
    width: 100%; /* Ajusta largura pra não ocupar tudo */
  }
`;

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 30px;
    svg {
      /* Alvo os ícones dentro do div */
      font-size: 1.5em; /* Reduz tamanho dos ícones (ajusta como quiser) */
    }
  }
`;

export default function Header() {
  return (
    <Nav>
      <Logo className="logo" src="/Ativo1.png" alt="Logo site" />
      <ContainerHeader>
        <TextoDestaque />
      </ContainerHeader>
      <ContainerIcon>
        <HeaderIcons />
      </ContainerIcon>
    </Nav>
  );
}

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
