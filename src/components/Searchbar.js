import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Input, Container, FilterButton } from "../generiComponents/GenericStyles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { InputStyled , TextStyled,ViewStyled} from "../generiComponents/GenericStyles";
import { useState } from "react";
import axios from 'axios';

export default function Searchbar() {
  const today = new Date();
  const initialState = { //Estado inicial para usuarios
    name: "",
    initialPrice:"",
    finalPrice: "",
    inicialDate:today,
    rating:null,
  };
  const [filters, setFilters] = useState(initialState);
  const [show, setShow] = useState(false);  //Controla visibilidad del datepicker
  const [info,setInfo]= useState([]);
  
  async function filterAndSearch(body) {
    body.inicialDate = body.inicialDate.toISOString().slice(0, -14);    //Convierte la fecha en el formato del back
      await axios.post('https://find-spot.herokuapp.com/events/filters',body)
        .then((res) => {
          setInfo(res.data);
          console.log(info)
        })
        .catch((res)=>console.log(res));  
  };
  
  function hadleInputChange(input,e) {               //Cuando se digita lo guarda en el estado
    setFilters(prev => ({ ...prev, [input]: e }))
  };
  
 const showDatepicker = () => {
    setShow(true);
  };
  const onChange = (event, selectedDate) => {             //Guarda la fecha seleccionada
  const currentDate = selectedDate || filters.inicialDate;
    setShow(Platform.OS === 'ios');
    setFilters(prev => ({ ...prev, "inicialDate": currentDate }))
  };

  
  return (
    <ViewStyled>
      <InputStyled value={filters.name} onChangeText={(ev) => hadleInputChange("name", ev)} placeholder="Busca tu evento" />
      <InputStyled value={filters.initialPrice} onChangeText={(ev) => hadleInputChange("initialPrice", ev)} placeholder="Precio inicial" />
      <InputStyled value={filters.finalPrice} onChangeText={(ev) => hadleInputChange("finalPrice", ev)} placeholder="Precio final" />
      <InputStyled value={filters.rating} onChangeText={(ev) => hadleInputChange("rating", ev)} placeholder="Calificacion" />
       <TextStyled style={{ color: "gray" }} onPress={showDatepicker}>Fecha inicial:{filters.inicialDate.toISOString().slice(0, -14)}</TextStyled>
      <FilterButton onPress={()=>filterAndSearch(filters)}>
        <Text>Filtrar</Text>
      </FilterButton>
      {show && (<DateTimePicker value={filters.inicialDate} mode='date' display="default" onChange={onChange} /> )}
    </ViewStyled>
  );
}