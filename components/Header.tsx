import { FunctionalComponent } from "preact";

const Header: FunctionalComponent = () => {
  return (
    <div class="Header">
      <h2>Esto es un simulacro..</h2>
      <a href={"/characters"}>Buscar personajes</a>
      <a href={"/house"}>Filtar por casa</a>
      <a href={"/logout"}>Log-out</a>
      <a href={"/"}>Home</a>
    </div>
  );
};

export default Header;
