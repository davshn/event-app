import { Text, View } from 'react-native';
import React, { Component } from 'react';
import {
  InputStyled,
  FormError,
  SmallerText,
  StyledTitle,
  SelectedDate,
  StyledView,
  ViewBackground,
  AgregarFotoButton,
  TextButton,
  ProfilePic,
  TextStyled,
  TermsText,
  TermsModal,
  ViewStyled,
} from "../generiComponents/GenericStyles";
import CartItems from '../components/cartItems';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <StyledTitle>Carrito de compras</StyledTitle>
    </View>
  );
};

const cart_Shopper =() => {

    return (
      <>
        <Header />
       <CartItems/>
      </>
    );
  }



const styles = {
  headerStyle: {
    flex: 0.4,
    // elevation: 2,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
  },
};

export default cart_Shopper;
