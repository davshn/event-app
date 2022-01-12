// import { Text } from "react-native"
// import {backgroundColor} from "../services/theme.js"
// import styled from "styled-components/native"

// const StyledView = styled.ScrollView`
//     background-color: ${backgroundColor};
// `

// function ParaTiScreen(){
//     return(
//         <StyledView>
//             <Text>
//                 PARA TI
//             </Text>
//         </StyledView>
//     )
// }



// export default ParaTiScreen


import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function ParaTiScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View >
      <Text >{text}</Text>
    </View>
  );
}
