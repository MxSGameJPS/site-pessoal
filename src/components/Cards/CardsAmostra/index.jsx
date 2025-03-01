import styled from "styled-components";
import CardHome from "../CardHome";
import CardSobreMim from "../CardSobreMim";
import CardProjetos from "../CardProjetos";
import CardSkills from "../CardSkills";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export default function CardsAmostra() {
  return (
    <Container>
      <CardHome />
      <CardSobreMim />
      <CardProjetos/>
      <CardSkills/>
    </Container>
  );
}
