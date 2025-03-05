import styled from "styled-components";
import BackGroundSobreMim from "../components/Background/TelaSobreMim";
import Terra from "../components/TelaHome/Cards";
import TituloSobreMim from "../components/TelaSobreMim/TextoEstilizado";

export default function SobreMim() {
  return (
      <BackGroundSobreMim>
        <TituloSobreMim />
        <Terra $size="700px" $top="10%" $left="5%"/>
      <ContainerSobreMim>        
        <p>
          Prepare-se para uma jornada estelar! Eu sou Saulo Pavanello, um
          artesão digital que transformou pincéis de design em linhas de código,
          navegando por um universo de criatividade e tecnologia. Minha órbita
          pessoal é iluminada por minha esposa Maristella, minha estrela-guia, e
          nossos pequenos cometas: Lucca, de 4 anos, com sua energia cósmica, e
          Jasmin, de 6 anos, que já desafia o espaço com sua imaginação. É essa
          constelação familiar que me inspira a buscar o extraordinário. Minha
          expertise decola no mundo do design, onde dominei o Figma como uma
          ferramenta de precisão cirúrgica, criando interfaces de UI que
          capturam olhares e encantam usuários. Mas, num giro inesperado pelo
          cosmos profissional, decidi trocar a paleta de cores pelo teclado,
          abraçando a programação Front-End com a mesma paixão. Essa transição
          foi um salto audacioso, movido pela vontade de construir experiências
          completas — do pixel ao código — e entregar soluções que orbitam o
          sucesso. Meu próximo destino? Portugal, um sonho que pulsa como um
          pulsar estelar! Planejo levar minha família e minha expertise pra
          conquistar um lugar nesse mercado dinâmico, onde pretendo brilhar como
          desenvolvedor Front-End e designer inovador. Estou em busca de um
          espaço no cenário global, pronto para colaborar, aprender e elevar
          projetos a novas galáxias. Se você busca um parceiro com visão,
          versatilidade e um toque de ousadia, vamos juntos explorar o infinito
          digital. Entre em contato e prepare-se para decolar!
        </p>
      </ContainerSobreMim>
    </BackGroundSobreMim>
  );
}

const ContainerSobreMim = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: #fff;
  position: relative;
  border-radius: 10px;

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
    left: 0;
  }

  p {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 35px 0;
    max-width: 1000px;
    font-size: 20px;
    line-height: 1.5;
    padding: 20px;
    margin:  auto;
    position: absolute;
    bottom: 15em;
    left: 50;
    
  }

  @media (max-width: 1024px) {
  p {
    position: relative;
    top: 0px;
    left: 0;
    font-size: 18px;
    margin: 10px 15px;
    padding: 15px;
    /* bottom: 10em; */
    max-width: 800px;
    left: 5%;
    transform: translateX(-5%);
  }
}
`;


