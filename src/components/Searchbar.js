import { StyledButton, TextButton, SearchbarView,SmallerText, InicioFilterButton, InicioSearchInput, InicioButtonText,UploadPic} from "../generiComponents/GenericStyles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextStyled, ViewStyled, InputStyled} from '../generiComponents/GenericStyles';
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByFilters } from '../stateManagement/actions/getEventsActions';
import { Modal} from "react-native";
import axios from "axios";
import CustomMultiPicker from "react-native-multiple-select-list";

export default function Searchbar() {
  let selected = [];
  const dispatch = useDispatch();
  const initialState = { //Estado inicial para usuarios
    name: "",
    initialPrice:"",
    finalPrice: "",
    initialDate: "",
    finalDate:"",
    rating: null,
    category:[],
  };
  const [filters, setFilters] = useState(initialState);
  const [show, setShow] = useState(false);  //Controla visibilidad del datepicker
  const [show2, setShow2] = useState(false);  //Controla visibilidad del datepicker
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [categories, setCategories] = useState([])
  const modes = useSelector(state => state.darkModeReducer.darkMode);
  
  function getCategories() {
    axios
      .get("https://find-spot.herokuapp.com/categories")
      .then((res) => {
        let formatted = {}
        res.data.map(category => {
          formatted[category.id] = category.name
        })
        setCategories(formatted);
      })
      .catch((res) => console.log(res))
  }

  useEffect(() => getCategories(), []);

  function filterAndSearch(filter) {
    filter.category = selected;
    dispatch(searchByFilters(filter));
    setFiltersVisible(false)
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
    if (currentDate) { setFilters(prev => ({ ...prev, "initialDate": currentDate.toISOString().slice(0, -14) })) };
  };
  
  const onChange2 = (event, selectedDate) => {             //Guarda la fecha seleccionada
  const currentDate = selectedDate ;
    setShow2(Platform.OS === 'ios');
    if (currentDate) { setFilters(prev => ({ ...prev, "finalDate": currentDate.toISOString().slice(0, -14) })) };
  };

  return (
    <SearchbarView>
    <InicioSearchInput value={filters.name} onChangeText={(ev) => hadleInputChange("name", ev)} placeholder="Busca tu evento" placeholderTextColor= {modes? '#EDEDED' : '#292929'}/>
    <InicioFilterButton /*onPress={()=>setFiltersVisible(true)}*/ onPress={()=>filterAndSearch(filters)}>
        <InicioButtonText>Buscar</InicioButtonText>
    </InicioFilterButton>
    <UploadPic onPress={()=>setFiltersVisible(true)}>Busqueda Avanzada</UploadPic>
    <Modal animationType="fade" transparent={true} visible={filtersVisible}>
      <ViewStyled>
      <InputStyled value={filters.name} onChangeText={(ev) => hadleInputChange("name", ev)} placeholder="Busca tu evento" placeholderTextColor='gray'/>
      <InputStyled value={filters.initialPrice} onChangeText={(ev) => hadleInputChange("initialPrice", ev)} placeholder="Precio inicial" placeholderTextColor='gray'/>
      <InputStyled value={filters.finalPrice} onChangeText={(ev) => hadleInputChange("finalPrice", ev)} placeholder="Precio final"  placeholderTextColor='gray'/>
      <InputStyled value={filters.rating} onChangeText={(ev) => hadleInputChange("rating", ev)} placeholder="Calificacion"  placeholderTextColor='gray'/>
      <TextStyled style={{ color: "gray" }} onPress={showDatepicker}>Fecha inicial:{filters.initialDate}</TextStyled>
      <TextStyled style={{ color: "gray" }} onPress={showDatepicker2}>Fecha final:{filters.finalDate}</TextStyled>
      <SmallerText>Categorías:</SmallerText>
      <CustomMultiPicker
        options={categories}
        search={false} 
        multiple={true}
        placeholder={"Search"}
        placeholderTextColor={"#757575"}
        returnValue={"label"}
        callback={(res) => {
          selected = res;
        }}
        rowBackgroundColor={"modes? '#292929' : '#EDEDED'"}
        rowHeight={40}
        rowRadius={5}
        searchIconName="ios-checkmark"
        searchIconColor="red"
        searchIconSize={30}
        iconColor={"#776BC7"}
        textColor={"#776BC7"}
        iconSize={26}
        selectedIconName={"ios-checkmark-circle-outline"}
        unselectedIconName={"ios-radio-button-off-outline"}
        scrollViewHeight={340}
        selected={[]}
        border={"#776BC7"}
      />
      <StyledButton onPress={()=>setFilters(initialState)}>
        <TextButton>Borrar</TextButton>
      </StyledButton>
      <StyledButton onPress={()=>filterAndSearch(filters)}>
        <TextButton>Buscar</TextButton>
      </StyledButton>
      {show && (<DateTimePicker value={new Date()} mode='date' display="default" onChange={onChange} />)}
      {show2 && (<DateTimePicker value={new Date()} mode='date' display="default" onChange={onChange2} /> )}
    </ViewStyled>
    </Modal>
    </SearchbarView>
  );
}
