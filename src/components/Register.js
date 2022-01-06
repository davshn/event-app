import { useState } from 'react';
import ButtonGen from '../generiComponents/ButtonGen';
import { TextStyled, ViewStyled, InputStyled, FormStyled, FormError } from '../generiComponents/GenericStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Register() {
  var today = new Date();
  const initialState = { //Estado inicial para usuarios
    name: "",
    mail: "",
    password: "",
    date:today,
  };

  const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
  const [errors, setErrors] = useState({});  //Crea el estado que contendrá los errores
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  
  function hadleInputChange(input,e) {               //Cuando se digita lo guarda en el estado
    setInput(prev => ({ ...prev, [input]: e }))
  };
  
  function validate(input) {
    let error={};       //Guarda temporalmente los errores encontrados
    if (!input.name) { error.name = "Requerido" }
    else if(!(/^[a-z ,.'-]+$/i).test(input.name)){error.name="Nombre invalido"};
    if (!input.mail) { error.mail = "Requerido" }
    else if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i).test(input.mail)){error.mail="Correo invalido"};
    if (!input.password) { error.password = "Requerido" }
    else if (!(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i).test(input.password)) { error.password = "Contraseña insegura" };
    if(!validateAge()){ error.date = "Debes ser mayor de edad" }
    return error
  };
  
  function validateAge() {
    var year = today.getFullYear() - input.date.getFullYear();
    var month = today.getMonth() - input.date.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < input.date.getDate())) {
        year--;
    }
    if (year < 18) { return false };
    return true;
  }
    
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || input.date;
    setShow(Platform.OS === 'ios');
    setInput(prev => ({ ...prev, "date": currentDate }))
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <ViewStyled>
      <FormStyled>
        <InputStyled value={input.name} onChangeText={(ev)=>hadleInputChange("name",ev)} placeholder="Nombre completo" placeholderTextColor='gray' />
        {errors.name&&(<FormError>{errors.name}</FormError>)}
      </FormStyled>
      <FormStyled>
        <InputStyled value={input.mail} onChangeText={(ev)=>hadleInputChange("mail",ev)} placeholder="Correo" placeholderTextColor='gray' keyboardType='email-address'/>
        {errors.mail&&(<FormError>{errors.mail}</FormError>)}
      </FormStyled>
      <FormStyled>
        <InputStyled value={input.password} onChangeText={(ev)=>hadleInputChange("password",ev)} placeholder="Contraseña" placeholderTextColor='gray' secureTextEntry/>
        {errors.password&&(<FormError>{errors.password}</FormError>)}
      </FormStyled>
      <FormStyled>
      <TextStyled style={{ color: "gray"}} onPress={showDatepicker}>Año de nacimiento</TextStyled>
        {errors.password&&(<FormError>{errors.date}</FormError>)}
      </FormStyled>
      <TextStyled>Foto perfil</TextStyled>
      <TextStyled>Terminos y condiciones</TextStyled>
      <ButtonGen title="intereses" onPress={validateAge}/>
      <ButtonGen title="Enviar" onPress={() => setErrors(validate(input))} />
            {show && (
        <DateTimePicker
          value={input.date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </ViewStyled>
  );
}