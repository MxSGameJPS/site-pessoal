import ButtonLinhedin from "../components/TelaContato/TagsSociais/Linkedin/Index";
import ContactForm from "../components/TelaContato";
import styled from "styled-components";
import ButtonGitHub from "../components/TelaContato/TagsSociais/GitHub";
import ButtonInstagram from "../components/TelaContato/TagsSociais/Instagram";
import ButtonWhatsApp from "../components/TelaContato/TagsSociais/WhatsApp/Index";
import React from "react";

export default function Contato() {
  return (
    <ContatoSection>
      <BackgroundOverlay />
      <PageContainer>
        <HeaderSection>
          <h1 className="title">Vamos criar algo incrível!</h1>
          <p className="subtitle">
            Entre em contato e transforme suas ideias em realidade
          </p>
        </HeaderSection>

        <ContentContainer>
          <ContactInfo>
            <h2>Informações de Contato</h2>
            <p>
              Estou disponível para novos projetos, consultoria ou apenas para
              trocar ideias sobre desenvolvimento front-end e design.
            </p>

            <AboutMe>
              <h3>Sobre Mim</h3>
              <p>
                Desenvolvedor front-end apaixonado por criar interfaces
                interativas e experiências de usuário memoráveis. Especializado
                em React e tecnologias modernas de desenvolvimento web.
              </p>
            </AboutMe>

            <SocialContainer>
              <h3>Conecte-se comigo</h3>
              <SocialButtons>
                <ButtonLinhedin />
                <ButtonGitHub />
                <ButtonInstagram />
              </SocialButtons>
              <WhatsAppContainer>
                <ButtonWhatsApp />
              </WhatsAppContainer>
            </SocialContainer>
          </ContactInfo>

          <FormContainer>
            <ContactForm />
          </FormContainer>
        </ContentContainer>
      </PageContainer>
    </ContatoSection>
  );
}

const ContatoSection = styled.section`
  min-height: 100vh;
  background-image: url("/fundocontato.png");
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 2rem 0 4rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem 0 3rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0 2rem;
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    160deg,
    rgba(4, 19, 40, 0.9),
    rgba(30, 71, 140, 0.8)
  );
  background-blend-mode: overlay;
  z-index: 1;
`;

const PageContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: 4rem;

  .title {
    font-size: 3rem;
    color: var(--tertiary-color);
    margin: 0 0 1rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
  }

  .subtitle {
    font-size: 1.3rem;
    color: #ffffff;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 0 0.5rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  align-items: stretch;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1.8rem;
  }
`;

const ContactInfo = styled.div`
  width: 100%;
  flex: 1;
  background: rgba(5, 22, 53, 0.9);
  border-radius: 16px;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;

  h2 {
    font-size: 1.8rem;
    color: var(--tertiary-color);
    margin: 0 0 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #ffffff;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 12px;

    h2 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.95rem;
      margin-bottom: 1.2rem;
    }
  }
`;

const AboutMe = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1.5rem;

  h3 {
    font-size: 1.3rem;
    color: var(--tertiary-color);
    margin: 0 0 1rem;
    text-align: left;
  }

  p {
    margin-bottom: 0;
  }

  @media (max-width: 992px) {
    h3 {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1.2rem;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.7rem;
    }
  }
`;

const SocialContainer = styled.div`
  h3 {
    font-size: 1.3rem;
    color: var(--tertiary-color);
    margin: 0 0 1.5rem;
    text-align: left;
  }

  @media (max-width: 992px) {
    h3 {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.1rem;
      margin: 0 0 1rem;
    }
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
`;

const WhatsAppContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  width: 100%;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    margin-top: 0.2rem;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  flex: 1;
`;
