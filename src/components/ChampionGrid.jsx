import ChampionCard from "./ChampionCard";
import styled from "styled-components";

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

const ContainerDiv = styled.div`
  padding: 70px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
`;
