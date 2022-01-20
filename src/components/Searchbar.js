import { StyledButton, TextButton, SearchbarView,SmallerText, InicioFilterButton, InicioSearchInput, InicioButtonText,UploadPic} from "../generiComponents/GenericStyles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextStyled, ViewStyled, InputStyled} from '../generiComponents/GenericStyles';
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByFilters } from '../stateManagement/actions/getEventsActions';
import { getCategories } from '../stateManagement/actions/getCategoriesActions';
import { Modal} from "react-native";
import {Picker} from "@react-native-picker/picker";
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
    type:"",
    sortType:"",
  };
  useEffect(() => dispatch(getCategories()), []);
  const [filters, setFilters] = useState(initialState);
  const [show, setShow] = useState(false);  //Controla visibilidad del datepicker
  const [show2, setShow2] = useState(false);  //Controla visibilidad del datepicker
  const [filtersVisible, setFiltersVisible] = useState(false);
  const modes = useSelector(state => state.darkModeReducer.darkMode);
  const categories = useSelector((state) => state.getCategoriesReducer.categories);
  const [selectedValue, setSelectedValue] = useState("");
  
  function handleTypeSelect(value){
    setFilters({
      ...filters,
      type:value
    })
  }
  function handleSortTypeSelect (value){
    setFilters({
      ...filters,
      sortType:value
    })
  }
  function filterAndSearch(filter) {
    if (selected.length > 0) { filter.category = selected};
    dispatch(searchByFilters(filter));
    setFilters(initialState);
    setFiltersVisible(false);
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
    <Picker
        selectedValue={filters.sortType}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => handleSortTypeSelect(itemValue)}
      >
        <Picker.Item label="ascendente" value="ascending" />
        <Picker.Item label="descendente" value="descending" />
      </Picker>
      <Picker
        selectedValue={filters.type}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => handleTypeSelect(itemValue)}
      >
        <Picker.Item label="Nombre" value="name" />
        <Picker.Item label="Fecha" value="date" />
        <Picker.Item label="Precio" value="price" />
      </Picker>
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
