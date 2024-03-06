import ChampionCard from "./ChampionCard";
import styled, { keyframes } from "styled-components";

/**
 * a component that display all champion cards by using gridlayout
 * @param {string[]} championLocations
 * @param {string[]} championName
 */
const ChampionGrid = ({ championLocations, championNames }) => {
  //   /**
  //    * Display a champion card
  //    * @param {string} championLocations
  //    * @param {string} championName
  //    * @returns
  //    */
  //   const displayChampionCard = (championLocation, championName) => {
  //     return (
  //       <ChampionCard
  //         name={championName}
  //         pictureSrc={championLocation}
  //         onClick={() => console.log("hello")}
  //       ></ChampionCard>
  //     );
  //   };

  return (
    <ContainerDiv>
      {championLocations.map((i, index) => (
        <ChampionCard
          name={championNames[index]}
          pictureSrc={i}
          onClick={() => console.log("hello")}
          key={index}
        ></ChampionCard>
      ))}
    </ContainerDiv>
  );
};

export default ChampionGrid;

const slideInFromLeft = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ContainerDiv = styled.div`
  animation: 1s ease-out 0s 1 ${slideInFromLeft};
  padding: 70px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
`;
