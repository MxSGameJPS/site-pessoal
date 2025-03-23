import styled from "styled-components";
import BackGroundProjetos from "../components/Background/TelaProjetos";
import TelaProjetos from "../components/TelaProjetos";

export default function Projetos() {
  return (
    <BackGroundProjetos>
      <PageContainer>
        <TextProjetos>
          <h1 className="title">Meus Projetos</h1>
          <p className="subtitle">
            Conheça alguns dos trabalhos que desenvolvi recentemente
          </p>
        </TextProjetos>
        <TelaProjetos />
      </PageContainer>
    </BackGroundProjetos>
  );
}

const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2rem 1rem;
  position: relative;
  z-index: 1;
`;

const TextProjetos = styled.div`
  text-align: center;
  color: #fff;
  margin-bottom: 2.5rem;

  .title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(
      to right,
      var(--tertiary-color),
      #ffffff,
      var(--tertiary-color)
    );
    background-size: 200% auto;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradientMove 6s linear infinite;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--tertiary-color);
      border-radius: 2px;
    }
  }

  .subtitle {
    font-size: 1.1rem;
    color: #e6e6ff;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    .title {
      font-size: 2.2rem;

      &:after {
        width: 60px;
        height: 3px;
        bottom: -8px;
      }
    }

    .subtitle {
      font-size: 1rem;
      margin-top: 1.2rem;
    }
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% center;
    }
    50% {
      background-position: 100% center;
    }
    100% {
      background-position: 0% center;
    }
  }
`;
