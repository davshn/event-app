import React from "react";
import { StyledButton, TextButton } from "../generiComponents/GenericStyles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextStyled, ViewStyled, InputStyled, ChipStyled} from '../generiComponents/GenericStyles';
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchByFilters } from '../stateManagement/actions/getEventsActions';
import { Text } from "react-native";
import { Chip } from 'react-native-paper';
import axios from "axios";
import {
  ModalContStyled,
  ModalText,
  ButtonText,
  ModalButtonStyled,
} from "../generiComponents/ModalGen";
import { Modal } from 'react-native';


export default function Searchbar() {
  const dispatch = useDispatch();
  const initialState = { //Estado inicial para usuarios
    name: "",
    initialPrice:"",
    finalPrice: "",
    initialDate: "",
    finalDate:"",
    rating: null,
    categories:[],
  };
  const [filters, setFilters] = useState(initialState);
  const [show, setShow] = useState(false);  //Controla visibilidad del datepicker
  const [show2, setShow2] = useState(false);  //Controla visibilidad del datepicker

  function filterAndSearch(filter) {
    filter.category = filter.categories.map(cat => cat.name);               //Convierte las categorias en el formato del back
    dispatch(searchByFilters(filter));
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

  function getCategories() {
    axios.get('https://find-spot.herokuapp.com/categories',) //Trae las categorias del endpoint
    .then((res) => setFilters(prev => ({ ...prev, categories: res.data })))
    .catch((res) => console.log(res));
  };
  useEffect(() => getCategories(), []);
  
  return (
    <ViewStyled>
      <InputStyled value={filters.name} onChangeText={(ev) => hadleInputChange("name", ev)} placeholder="Busca tu evento" placeholderTextColor='gray'/>




      <InputStyled value={filters.initialPrice} onChangeText={(ev) => hadleInputChange("initialPrice", ev)} placeholder="Precio inicial" placeholderTextColor='gray'/>
      <InputStyled value={filters.finalPrice} onChangeText={(ev) => hadleInputChange("finalPrice", ev)} placeholder="Precio final"  placeholderTextColor='gray'/>
      <InputStyled value={filters.rating} onChangeText={(ev) => hadleInputChange("rating", ev)} placeholder="Calificacion"  placeholderTextColor='gray'/>
      <TextStyled style={{ color: "gray" }} onPress={showDatepicker}>Fecha inicial:{filters.initialDate}</TextStyled>
      <TextStyled style={{ color: "gray" }} onPress={showDatepicker2}>Fecha final:{filters.finalDate}</TextStyled>
      <TextStyled style={{ color: "black" }}>Elimina las categorias que no sean de tu interés </TextStyled>
      <ChipStyled>
        {filters.categories.map((cat)=><Chip key={cat.id} style={{ height: 50,width: 110 }} onClose={() => setFilters(prev => ({ ...prev, categories: prev.categories.filter((e)=>e.name!==cat.name) }))}>{cat.name}</Chip>)}        
      </ChipStyled>
      <StyledButton onPress={()=>filterAndSearch(filters)}>
        <TextButton>Filtrar</TextButton>
      </StyledButton>
      <InputStyled value={filters.rating} onChangeText={(ev) => hadleInputChange("rating", ev)} placeholder="Calificacion" />
      {show && (<DateTimePicker value={new Date()} mode='date' display="default" onChange={onChange} />)}
      {show2 && (<DateTimePicker value={new Date()} mode='date' display="default" onChange={onChange2} /> )}
    </ViewStyled>
  );
}