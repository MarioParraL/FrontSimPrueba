import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "axios";

type Character = {
  id: string;
  name: string;
  species: string;
  gender: string;
};

const HouseFilter: FunctionalComponent = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<string>("");
  //const houses = ["gryffindor", "slytherin", "ravenclaw", "hufflepuff"]; //esto si hago el select

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get<Character[]>(
        `https://hp-api.onrender.com/api/characters/house/${selectedHouse}`,
      );
      const characters = response.data;
      setCharacters(characters);
    };

    getCharacters();
  }, [selectedHouse]);

  return (
    <div>
      <div>
        <button
          type="submit"
          value={"gryffindor"}
          onClick={(e) => {
            const house = e.currentTarget.value;
            setSelectedHouse(house);
            document.cookie = `house=${house}; path=/`;
          }}
        >
          Gryffindor
        </button>

        <button
          type="submit"
          value={"slytherin"}
          onClick={(e) => {
            const house = e.currentTarget.value;
            setSelectedHouse(house);
            document.cookie = `house=${house}; path=/`;
          }}
        >
          Slytherin
        </button>

        <button
          type="submit"
          value={"ravenclaw"}
          onClick={(e) => {
            const house = e.currentTarget.value;
            setSelectedHouse(house);
            document.cookie = `house=${house}; path=/`;
          }}
        >
          Ravenclaw
        </button>

        <button
          type="submit"
          value={"hufflepuff"}
          onClick={(e) => {
            const house = e.currentTarget.value;
            setSelectedHouse(house);
            document.cookie = `house=${house}; path=/`;
          }}
        >
          Hufflepuff
        </button>
      </div>

      <div>
        {characters.map((ch) => {
          return (
            <a href={`/character/${ch.id}`}>
              <div>
                <h2>{ch.name}</h2>
                <p>{ch.gender}</p>
                <p>{ch.species}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HouseFilter;
