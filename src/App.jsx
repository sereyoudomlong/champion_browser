import ChampionCard from "./components/ChampionCard";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [championPicLocation, setChampionPicLocation] = useState([]);
  const [champions, setChampions] = useState([]);
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3001/api");
    setChampionPicLocation(
      res.data.message.map((i) => "/src/assets/champion/centered/" + i)
    );

    setChampions(res.data.message.map((i) => i.slice(0, -6)));
  };
  useEffect(() => {
    fetchdata();
  }, []);

  console.log(championPicLocation);
  return (
    <div>
      {championPicLocation.map((i, index) => (
        <ChampionCard
          name={champions[index]}
          pictureSrc={i}
          onClick={() => console.log("hello")}
          key={index}
        ></ChampionCard>
      ))}
    </div>
  );
}

export default App;
