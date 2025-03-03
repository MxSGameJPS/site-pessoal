import TextoEstilizado from "../components/TelaHome/TextoEstilizado";
// import styled from "styled-components";
import BackGroundHome from "../components/Background/TelaHome";
import Terra from "../components/TelaHome/Cards";
import CardProjetos from "../components/TelaHome/Cards/Cardprojetos";
import styled from "styled-components";

export default function Home() {
  return (
    <BackGroundHome>
      <TextoEstilizado />
      <Terra />
      <ContainerCards>
        <CardProjetos />
      </ContainerCards>
    </BackGroundHome>
  );
}

const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 2rem;
  flex-wrap: wrap;
  z-index: 2;
`;
