import styled from "styled-components";
import CardHome from "../CardHome";
import CardSobreMim from "../CardSobreMim";
import CardProjetos from "../CardProjetos";
import CardSkills from "../CardSkills";
import CardCadastro from "../CardContato";

const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  
`;

export default function CardsAmostra() {
  return (
    <Container>
      <CardHome />
      <CardSobreMim />
      <CardProjetos/>
      <CardSkills/>
      <CardCadastro/>
    </Container>
  );
}
