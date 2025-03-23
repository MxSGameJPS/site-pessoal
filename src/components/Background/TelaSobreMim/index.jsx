import styled from "styled-components";

export default function BackGroundSobreMim({ children }) {
  return (
    <BackGround>
      <BackgroundStars />
      {children}
    </BackGround>
  );
}

const BackGround = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(45deg, var(--primary-color), #031c43, #1a4380);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const BackgroundStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      2px 2px at 20px 30px,
      #ffffff,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 200px 30px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 240px 180px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 280px 50px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 320px 100px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 360px 130px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 400px 70px, #ffffff, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 400px 400px;
  opacity: 0.4;
  z-index: 0;
`;
