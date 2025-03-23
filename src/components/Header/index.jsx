import styled from "styled-components";
import TextoDestaque from "./TextoDestaque";
import HeaderIcons from "./IconHeader";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secondary-color),
    var(--tertiary-color)
  );
  color: var(--text-light);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--box-shadow);
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 0.8em 0.5em;
    gap: 12px;
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    order: 2;
  }
`;

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    order: 3;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 5px;
  }
`;

const Logo = styled.img`
  width: 54px;
  height: 54px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(5deg);
  }

  @media (max-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export default function Header() {
  return (
    <Nav>
      <LogoContainer>
        <Logo src="/Ativo1.png" alt="Logo site" />
      </LogoContainer>
      <ContainerHeader>
        <TextoDestaque />
      </ContainerHeader>
      <ContainerIcon>
        <HeaderIcons />
      </ContainerIcon>
    </Nav>
  );
}
