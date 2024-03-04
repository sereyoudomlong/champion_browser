import styled from "styled-components";

const ChampionCard = ({ name, pictureSrc, onClick }) => {
  return (
    <Card onClick={onClick}>
      <ImageContainer>
        <Image src={pictureSrc} alt={name + "'s splash art"}></Image>
      </ImageContainer>
      <NameBar>{name}</NameBar>
    </Card>
  );
};

export default ChampionCard;
const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`;

const NameBar = styled.div`
  background-color: black;
  transition: all 0.3s ease;
  width: 100%;
  padding: 25px 0px;
  padding-left: 20px;

  color: white;
  font-family: "Anta", sans-serif;
  font-size: x-large;
  font-style: italic;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 350px;
  transition: 0.3s;
  clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%);

  &:hover {
    transition: 0.3s;
    /* clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%); */
    clip-path: polygon(0 0, 100% 0, 100% 0, 100% 100%, 0 100%);
    cursor: pointer;
    ${NameBar} {
      background-color: #006680;
      padding-left: 30px;
    }
    ${Image} {
      transform: scale(1.05);
    }
  }
`;
