import SearchInput from "./Searchbar";
import { EventCards } from "./EventCards.js";
import { searchByFilters } from '../stateManagement/actions/getEventsActions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function StartScreen() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(searchByFilters()), []);
  return (
    <>
      <SearchInput />
      <EventCards />
    </>
  );
}

