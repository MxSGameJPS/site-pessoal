import styled from "styled-components";
import BackGroundSobreMim from "../components/Background/TelaSobreMim";
import TituloSobreMim from "../components/TelaSobreMim/TextoEstilizado";

export default function SobreMim() {
  return (
    <BackGroundSobreMim>
      <PageContainer>
        <TituloSobreMim />

        <ContentContainer>
          <ImageSection>
            <SectionTitle>Desenvolvedor & Designer</SectionTitle>
            <PlanetContainer>
              <PlanetImage src="/eu.jpeg" alt="Saulo Pavanello" />
            </PlanetContainer>
            <Caption>Saulo Pavanello</Caption>
          </ImageSection>

          <TextContainer>
            <p>
              Prepare-se para uma jornada estelar! Eu sou Saulo Pavanello, um
              artesão digital que transformou pincéis de design em linhas de
              código, navegando por um universo de criatividade e tecnologia.
              Minha órbita pessoal é iluminada por minha esposa Maristella,
              minha estrela-guia, e nossos pequenos cometas: Lucca, de 4 anos,
              com sua energia cósmica, e Jasmin, de 6 anos, que já desafia o
              espaço com sua imaginação. É essa constelação familiar que me
              inspira a buscar o extraordinário.
            </p>
            <p>
              Minha expertise decola no mundo do design, onde dominei o Figma
              como uma ferramenta de precisão cirúrgica, criando interfaces de
              UI que capturam olhares e encantam usuários. Mas, num giro
              inesperado pelo cosmos profissional, decidi trocar a paleta de
              cores pelo teclado, abraçando a programação Front-End com a mesma
              paixão.
            </p>
            <p>
              Essa transição foi um salto audacioso, movido pela vontade de
              construir experiências completas — do pixel ao código — e entregar
              soluções que orbitam o sucesso. Meu próximo destino? Portugal, um
              sonho que pulsa como um pulsar estelar! Planejo levar minha
              família e minha expertise pra conquistar um lugar nesse mercado
              dinâmico, onde pretendo brilhar como desenvolvedor Front-End e
              designer inovador.
            </p>
            <p>
              Estou em busca de um espaço no cenário global, pronto para
              colaborar, aprender e elevar projetos a novas galáxias. Se você
              busca um parceiro com visão, versatilidade e um toque de ousadia,
              vamos juntos explorar o infinito digital. Entre em contato e
              prepare-se para decolar!
            </p>
          </TextContainer>
        </ContentContainer>
      </PageContainer>
    </BackGroundSobreMim>
  );
}

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const ImageSection = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  max-width: 400px;
  padding: 1.5rem;
  background: rgba(8, 27, 56, 0.4);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
  }
`;

const SectionTitle = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, var(--tertiary-color, #4a7bbd), #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

const Caption = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const PlanetContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 350px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    border: 2px solid var(--tertiary-color, #4a7bbd);
    border-radius: 15px;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: -7px;
    left: -7px;
    width: 50px;
    height: 50px;
    background-color: var(--primary-color, #081b38);
    border-radius: 50%;
    z-index: 1;
    box-shadow: calc(100% - 36px) 0 0 var(--primary-color, #081b38),
      0 calc(100% - 36px) 0 var(--primary-color, #081b38),
      calc(100% - 36px) calc(100% - 36px) 0 var(--primary-color, #081b38);
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 320px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }
`;

const PlanetImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 0;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    max-height: 350px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  background: rgba(5, 22, 53, 0.85);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--tertiary-color, #4a7bbd),
      transparent
    );
  }

  p {
    color: #ffffff;
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    text-align: justify;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    p {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;
