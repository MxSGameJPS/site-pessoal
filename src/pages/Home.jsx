import TextoEstilizado from "../components/TelaHome/TextoEstilizado";
// import styled from "styled-components";
import BackGroundHome from "../components/Background/TelaHome";
import Terra from "../components/TelaHome/Cards";
import CardProjetos from "../components/TelaHome/Cards/Cardprojetos";
import styled from "styled-components";
import CardSobre from "../components/TelaHome/Cards/CardSobre";
import CardHabilidades from "../components/TelaHome/Cards/CardSkills";
import CardContato from "../components/TelaHome/Cards/CardContatos";

export default function Home() {
  return (
    <BackGroundHome>
      <TextoEstilizado />
      <Terra />
      <ContainerCards>
        <CardProjetos />
        <CardSobre/>
        <CardHabilidades/>
        <CardContato/>
      </ContainerCards>
    </BackGroundHome>
  );
}

const ContainerCards = styled.div`
  position: absolute;
  top: 20%;
  left: 28%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  /* padding: 0 1rem; */
  flex-wrap: wrap;
  z-index: 2;

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
    left: 0;
    
  }

`;
