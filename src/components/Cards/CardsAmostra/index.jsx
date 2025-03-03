import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CardHome from "../CardHome";
import CardSobreMim from "../CardSobreMim";
import CardProjetos from "../CardProjetos";
import CardSkills from "../CardSkills";
import CardContato from "../CardContato";
import SpaceBackground from "../../Background/TelaAbertura";

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translateY(-50%);
  animation: flyThrough 5s linear forwards;
  opacity: 0;

  &.active {
    opacity: 0;
  }

  @keyframes flyThrough {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }
`;

const Flash = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  opacity: 0;
  animation: solarFlash 1s linear forwards;
  pointer-events: none;

  @keyframes solarFlash {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default function CardAmostra() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showFlash, setShowFlash] = useState(false);
  const navigate = useNavigate();
  const cards = [
    <CardHome />,
    <CardSobreMim />,
    <CardProjetos />,
    <CardSkills />,
    <CardContato />,
  ];

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCard((prev) => {
        if (prev < cards.length - 1) {
          return prev + 1;
        } else {
          clearInterval(cardInterval);
          setTimeout(() => {
            setShowFlash(true);
            setTimeout(() => {
              navigate("/home");
            }, 1000);
          }, 2000);
          return prev;
        }
      });
    }, 2000);
    return () => clearInterval(cardInterval);
  }, [cards.length, navigate]);

  return (
    <SpaceBackground>
      <Container>
        {cards.map((card, index) => (
          <CardWrapper
            key={index}
            className={index <= currentCard ? "active" : ""}
            style={{ animationDelay: `${index * 5}s` }}
          >
            {card}
          </CardWrapper>
        ))}
        {showFlash && <Flash />}
      </Container>
    </SpaceBackground>
  );
}
