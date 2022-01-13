import React from "react";
import { StyledButton, TextButton } from "../generiComponents/GenericStyles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { InputStyled , TextStyled,ViewStyled} from "../generiComponents/GenericStyles";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { searchByFilters } from '../stateManagement/actions/getEventsActions';

export default function Searchbar() {
  const dispatch = useDispatch();
  const modes = useSelector(state => state.getEventsReducer.events);
  const initialState = { //Estado inicial para usuarios
    name: "",
    initialPrice:"",
    finalPrice: "",
    initialDate: "",
    finalDate:"",
    rating:null,
  };
  const [filters, setFilters] = useState(initialState);
  const [show, setShow] = useState(false);  //Controla visibilidad del datepicker
  const [show2, setShow2] = useState(false);  //Controla visibilidad del datepicker

  function filterAndSearch() {
    dispatch(searchByFilters(filters));
    console.log(modes)
  };
  
  function hadleInputChange(input,e) {               //Cuando se digita lo guarda en el estado
    setFilters(prev => ({ ...prev, [input]: e }))
  };
  
 const showDatepicker = () => {
    setShow(true);
  };
  
  const showDatepicker2 = () => {
    setShow2(true);
  };
  
  const onChange = (event, selectedDate) => {             //Guarda la fecha seleccionada
  const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    setFilters(prev => ({ ...prev, "initialDate": currentDate.toISOString().slice(0, -14) }))
  };
  
  const onChange2 = (event, selectedDate) => {             //Guarda la fecha seleccionada
  const currentDate = selectedDate ;
    setShow2(Platform.OS === 'ios');
    setFilters(prev => ({ ...prev, "finalDate": currentDate.toISOString().slice(0, -14) }))
  };

  
  return (
    <ViewStyled>
      <InputStyled value={filters.name} onChangeText={(ev) => hadleInputChange("name", ev)} placeholder="Busca tu evento" placeholderTextColor='gray'/>
      <InputStyled value={filters.initialPrice} onChangeText={(ev) => hadleInputChange("initialPrice", ev)} placeholder="Precio inicial" placeholderTextColor='gray'/>
      <InputStyled value={filters.finalPrice} onChangeText={(ev) => hadleInputChange("finalPrice", ev)} placeholder="Precio final"  placeholderTextColor='gray'/>
      <InputStyled value={filters.rating} onChangeText={(ev) => hadleInputChange("rating", ev)} placeholder="Calificacion"  placeholderTextColor='gray'/>
      <TextStyled style={{ color: "gray" }} onPress={showDatepicker}>Fecha inicial:{filters.initialDate}</TextStyled>
      <TextStyled style={{ color: "gray" }} onPress={showDatepicker2}>Fecha final:{filters.finalDate}</TextStyled>
      <StyledButton onPress={filterAndSearch}>
        <TextButton>Filtrar</TextButton>
      </StyledButton>
      {show && (<DateTimePicker value={new Date()} mode='date' display="default" onChange={onChange} />)}
      {show2 && (<DateTimePicker value={new Date()} mode='date' display="default" onChange={onChange2} /> )}
    </ViewStyled>
  );
}