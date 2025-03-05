import ButtonLinhedin from "../components/TelaContato/TagsSociais/Linkedin/Index";
import ContactForm from "../components/TelaContato";
import styled from "styled-components";
import ButtonGitHub from "../components/TelaContato/TagsSociais/GitHub";
import ButtonInstagram from "../components/TelaContato/TagsSociais/Instagram";
import ButtonWhatsApp from "../components/TelaContato/TagsSociais/WhatsApp/Index";

export default function Contato() {
  return (
    <ContatoSection>
      <h1>Contato</h1>
      <ContactForm/>
    <ContainerSociais>
      <ButtonLinhedin/>
      <ButtonGitHub/>    
      <ButtonInstagram/>    
    </ContainerSociais>  
      <ButtonWhatsApp/>    
    </ContatoSection>
  );
}

const ContatoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  /* justify-content: center; */
  width: 100%;
  height: 100vh;
  background: #000000;
  overflow: hidden;
  color: #fff;  
`;

const ContainerSociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;