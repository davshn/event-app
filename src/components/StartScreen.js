import SearchInput from "./Searchbar";
import { EventCards } from "./EventCards.js";
import { searchByFilters } from '../stateManagement/actions/getEventsActions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

  const initialState = { //Estado inicial para usuarios
    name: "",
    initialPrice:"",
    finalPrice: "",
    initialDate: "",
    finalDate:"",
    type:"",
    sortType:"",
};

export default function StartScreen() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(searchByFilters(initialState)), []);
  return (
    <>
      <SearchInput />
      <Button title="send message" onPress={() => sendMessage(expoPushToken)} />
      {/* NOTIFICACIONES  */}
      <EventCards />
    </>
  );
}
