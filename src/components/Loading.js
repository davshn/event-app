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

