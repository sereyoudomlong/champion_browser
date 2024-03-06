import styled, { keyframes } from "styled-components";

const Header = ({ mainText, upperSubText, lowerSubText }) => {
  return (
    <Container>
      <UpperSubText>{upperSubText}</UpperSubText>
      <MainText>{mainText}</MainText>

      <LowerSubText>{lowerSubText}</LowerSubText>
    </Container>
  );
};

const fadeInLeftToRight = keyframes`
    0% {
        clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
    }
    100% {
    clip-path: polygon(0% 0%, 200% 0%, 0% 200%) 
    }
`;

const fadeInRightToLeft = keyframes`
    0% {
        clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
    }
    100% {
        clip-path: polygon(100% 100%, -200% 100%, 100% -200%);
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  margin: 50px;
  background-position: center;
  background-size: cover;
  object-fit: cover;
`;

const MainText = styled.div`
  font-family: "Cinzel", serif;
  font-weight: 900;
  font-size: calc(61.82px + 3.03vw);
  font-style: italic;
  z-index: 1;
  line-height: 0.85;
  animation: ${fadeInLeftToRight} ease;
  animation-delay: 200ms;
  animation-duration: 2000ms;
`;

const LowerSubText = styled.div`
  font-family: Arial, sans-serif;
  max-width: 40%;
  line-height: 20px;
  letter-spacing: 0.5px;
`;

const UpperSubText = styled.div`
  width: auto;
  font-family: "Cinzel", serif;
  font-weight: bolder;
  font-size: 1.5rem;
  font-style: italic;
  animation: ${fadeInRightToLeft} ease;
  animation-delay: 200ms;
  animation-duration: 2000ms;
`;

export default Header;
