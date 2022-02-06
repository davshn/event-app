// import React from "react";
// import { ActivityIndicator, StyleSheet, Text, View , Image } from "react-native";

// export default function Loading() {
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         justifyContent: "center"
//       },
//       horizontal: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//         padding: 10
//       }
//     });

//     return (
//         <View style={[styles.container, styles.horizontal]}>
//             <ActivityIndicator size="large" color="#5641abff" />
//             <Image
//                 style={{ width: 100, height: 100, borderRadius: 100, alignSelf:"center"}}
//                 source={require("../public/logo.png")}
//             />
//             <Text>Loading</Text>
//         </View>
        
        
// )}

import React, {useState, useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';
import { SectionStyled,TextStyled,ViewStyled,TitleStyled, StyledText, OptionsView, Title, Container} from '../generiComponents/GenericStyles';

const Loading = () => {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  return (
    
        <ViewStyled style={{}}>
            <Animated.Image
                style={{height: 100, width: 100, borderRadius: 99, marginTop: "50%" , marginLeft: "35%", justifyContent: 'center', alignItems: 'center', transform: [{rotate: spin}]}}
                source={require("../public/logo.png")}
            />
            <TitleStyled style={{}}>Cargando...</TitleStyled>
      </ViewStyled>
  );
};

export default Loading;

