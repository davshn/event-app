import SearchInput from "../components/Searchbar";
import { EventCards } from "./EventCards.js";

// aqui es el timeline
function InicioScreen() {
  return (
    <>
      <SearchInput />
      <EventCards />
    </>
  );
}

export default InicioScreen;
