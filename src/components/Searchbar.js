import {
  StyledButton,
  TextButton,
  SearchbarView,
  SmallerText,
  InicioFilterButton,
  InicioSearchInput,
  InicioButtonText,
  UploadPic,
  SelectedDate,
  GoBackButton2,
  ViewStyled,
  InputStyled,
} from "../generiComponents/GenericStyles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByFilters } from "../stateManagement/actions/getEventsActions";
import { getCategories } from "../stateManagement/actions/getCategoriesActions";
import { Modal, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomMultiPicker from "react-native-multiple-select-list";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

export default function Searchbar() {
  let selected = [];
  const dispatch = useDispatch();
  const initialState = {
    //Estado inicial para usuarios
    name: "",
    initialPrice: "",
    finalPrice: "",
    initialDate: "",
    finalDate: "",
    type: "",
    sortType: "",
  };
  useEffect(() => dispatch(getCategories()), []);
  const [filters, setFilters] = useState(initialState);
  const [show, setShow] = useState(false); //Controla visibilidad del datepicker
  const [show2, setShow2] = useState(false); //Controla visibilidad del datepicker
  const [filtersVisible, setFiltersVisible] = useState(false);
  const modes = useSelector((state) => state.darkModeReducer.darkMode);
  const categories = useSelector(
    (state) => state.getCategoriesReducer.categories
  );

  function handleTypeSelect(value) {
    setFilters({
      ...filters,
      type: value,
    });
  }
  function handleSortTypeSelect(value) {
    setFilters({
      ...filters,
      sortType: value,
    });
  }
  function filterAndSearch(filter) {
    if (selected.length > 0) {
      filter.category = selected;
    }
    dispatch(searchByFilters(filter));
    setFilters(initialState);
    setFiltersVisible(false);
  }

  function hadleInputChange(input, e) {
    //Cuando se digita lo guarda en el estado
    setFilters((prev) => ({ ...prev, [input]: e }));
  }

  const showDatepicker = () => {
    setShow(true);
  };

  const showDatepicker2 = () => {
    setShow2(true);
  };

  const onChange = (event, selectedDate) => {
    //Guarda la fecha seleccionada
    setByTimezone(selectedDate);
    const currentDate = selectedDate;
    setShow(Platform.OS === "ios");
    if (currentDate) {
      setFilters((prev) => ({
        ...prev,
        initialDate: currentDate.toISOString().slice(0, -14),
      }));
    }
  };

  const onChange2 = (event, selectedDate) => {
    //Guarda la fecha seleccionada
    setByTimezone(selectedDate);
    const currentDate = selectedDate;
    setShow2(Platform.OS === "ios");
    if (currentDate) {
      setFilters((prev) => ({
        ...prev,
        finalDate: currentDate.toISOString().slice(0, -14),
      }));
    }
  };

    const setByTimezone = (time) => {
    const date = new Date()
    const difference = -date.getTimezoneOffset() / 60
    time.setHours(time.getHours() + difference)
  }
  
  return (
    <SearchbarView>
      <InicioSearchInput
        value={filters.name}
        onChangeText={(ev) => hadleInputChange("name", ev)}
        placeholder="Busca tu evento"
        placeholderTextColor={modes ? "#EDEDED" : "#292929"}
        onSubmitEditing={() => filterAndSearch(filters)}
      />
      <InicioFilterButton onPress={() => setFiltersVisible(true)}>
        <MaterialCommunityIcons
          name="options-outline"
          color={"#776BC7"}
          size={23}
        />
        <InicioButtonText> Filtrar</InicioButtonText>
      </InicioFilterButton>
      <Modal animationType="slide" transparent={true} visible={filtersVisible}>
        <ViewStyled>
          <View>
            <SmallerText
              style={{ marginBottom: "5%", fontSize: 20, bottom: "0.5%" }}
            >
              Busca tu evento
            </SmallerText>
            <GoBackButton2>
              <MaterialCommunityIcons
                name="chevron-down-outline"
                color={modes ? "#EDEDED" : "#292929"}
                size={25}
                onPress={() => setFiltersVisible(false)}
              />
            </GoBackButton2>
          </View>
          <InputStyled
            value={filters.initialPrice}
            onChangeText={(ev) => hadleInputChange("initialPrice", ev)}
            placeholder="Precio inicial"
            placeholderTextColor="gray"
          />
          <InputStyled
            value={filters.finalPrice}
            onChangeText={(ev) => hadleInputChange("finalPrice", ev)}
            placeholder="Precio final"
            placeholderTextColor="gray"
          />
          <SelectedDate
            style={{ width: "90%", alignSelf: "center" }}
            onPress={showDatepicker}
          >
            Fecha inicial: {filters.initialDate}
          </SelectedDate>
          <SelectedDate
            style={{ width: "90%", alignSelf: "center" }}
            onPress={showDatepicker2}
          >
            Fecha final: {filters.finalDate}
          </SelectedDate>
         
          <SmallerText
            style={{ marginTop: "6%", marginBottom: "6%", fontSize: 16 }}
          >
            Seleccione las categorías de su interés:
          </SmallerText>
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
          <SmallerText
            style={{ marginTop: "3%", marginBottom: "3%", fontSize: 16 }}
          >
            Seleccione el tipo de ordenamiento:
          </SmallerText>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <Picker
              selectedValue={filters.sortType}
              style={{ height: 50, width: 150, color: modes? '#EDEDED' : '#292929' }}
              onValueChange={(itemValue) => handleSortTypeSelect(itemValue)}
            >
              <Picker.Item label="Ascendente" value="ascending" />
              <Picker.Item label="Descendente" value="descending" />
            </Picker>
            <Picker
              selectedValue={filters.type}
              style={{ height: 50, width: 150, color: modes? '#EDEDED' : '#292929' }}
              onValueChange={(itemValue) => handleTypeSelect(itemValue)}
            >
              <Picker.Item label="Nombre" value="name" />
              <Picker.Item label="Fecha" value="date" />
              <Picker.Item label="Precio" value="price" />
            </Picker>
          </View>
          <UploadPic onPress={() => setFilters(initialState)}>
            Resetear búsqueda
          </UploadPic>
          <StyledButton
            style={{ marginBottom: "15%", marginTop: "3%" }}
            onPress={() => filterAndSearch(filters)}
          >
            <TextButton>Buscar</TextButton>
          </StyledButton> 
          {show && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
          {show2 && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="default"
              onChange={onChange2}
            />
          )}
        </ViewStyled>
      </Modal>
    </SearchbarView>
  );
}
