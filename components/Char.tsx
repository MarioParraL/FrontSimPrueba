import { FunctionalComponent } from "preact";

type Character = {
  name: string;
  house: string;
  image: string;
};

const Char: FunctionalComponent<Character> = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.house}</p>
      <img src={props.image} alt={props.name} width={200}></img>
    </div>
  );
};

export default Char;
