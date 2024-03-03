import ChampionCard from "../../components/ChampionCard";
export default {
  component: ChampionCard,
  title: "ChampionCard",
  tags: ["Card"],
};

export const Default = {
  args: {
    name: "Aatrox",
    pictureSrc: "src/assets/champion/centered/Aatrox_0.jpg",
    onClick: () => {
      console.log("hello");
    },
  },
};
