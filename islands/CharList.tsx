import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "axios";
type Character = {
  id: string;
  name: string;
  house: string;
};

const CharList: FunctionalComponent = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchName, setSearchName] = useState<string>("");
  const [filtered, setFiltered] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get<Character[]>(
        "https://hp-api.onrender.com/api/characters",
      );
      const characters = response.data;
      setCharacters(characters);
    };

    getCharacters();
  }, []);

  useEffect(() => {
    const found = characters.filter((ch) =>
      ch.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setFiltered(found);
  }, [searchName]);

  return (
    <div>
      <div>
        <input
          value={searchName}
          placeholder={"Buscar por nombre"}
          onInput={(e) => setSearchName(e.currentTarget.value)}
        >
        </input>
      </div>

      <div>
        {filtered.map((ch) => {
          return (
            <a href={`/character/${ch.id}`}>
              <div>
                <h2>{ch.name}</h2>
                <p>{ch.house}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CharList;
