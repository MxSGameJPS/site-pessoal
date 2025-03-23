import TextoEstilizado from "../components/TelaHome/TextoEstilizado";
// import styled from "styled-components";
import BackGroundHome from "../components/Background/TelaHome";
import Terra from "../components/TelaHome/Cards";
import CardProjetos from "../components/TelaHome/Cards/Cardprojetos";
import styled from "styled-components";
import CardSobre from "../components/TelaHome/Cards/CardSobre";
import CardHabilidades from "../components/TelaHome/Cards/CardSkills";
import CardContato from "../components/TelaHome/Cards/CardContatos";
import TextoHome from "../components/TelaHome/Texto";

export default function Home() {
  return (
    <HomeContainer>
      <BackGroundHome>
        <TextoEstilizado />
        <Terra />
        <ContainerCards>
          <CardProjetos />
          <CardSobre />
          <CardHabilidades />
          <CardContato />
        </ContainerCards>
        <TextoHome />
      </BackGroundHome>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 3rem auto;
  padding: 0 1.5rem;
  flex-wrap: wrap;
  z-index: 2;
  max-width: 1200px;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin: 2rem auto;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin: 1.5rem auto;
    justify-content: center;
  }
`;
