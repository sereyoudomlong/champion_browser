import axios from "axios";
import ChampionGrid from "./components/ChampionGrid";
import Header from "./components/Header";
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
  return (
    <div>
      <Header
        mainText={"Champion"}
        upperSubText={"Choose your"}
        lowerSubText={
          "With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all."
        }
      ></Header>
      <ChampionGrid
        championLocations={championPicLocation}
        championNames={champions}
      ></ChampionGrid>
    </div>
  );
}

export default App;
