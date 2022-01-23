import { View } from 'react-native';
import React from 'react';
import {
  StyledTitle,
} from "../generiComponents/GenericStyles";
import ShoppingList from './shoppingCartList'
import Footer from './ShoppingCartFooter'

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
        <ShoppingList/>
        <Footer/>
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
