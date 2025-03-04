import styled from "styled-components";
import BackGroundProjetos from "../components/Background/TelaProjetos";
import TelaProjetos from "../components/TelaProjetos";

export default function Projetos() {
  return (
    <BackGroundProjetos>
      <TextProjetos>
        <h1>Projetos</h1>
      </TextProjetos>
      <TelaProjetos />
    </BackGroundProjetos>
  );
}

const TextProjetos = styled.div`
  text-align: center;
  color: #fff;
  font-size: 30px;
`;
