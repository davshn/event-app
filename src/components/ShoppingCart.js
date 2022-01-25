import React from 'react';
import { HeaderStyle, StyledTitle, ViewBackground } from "../generiComponents/GenericStyles";
import ShoppingList from './shoppingCartList'
import Footer from './ShoppingCartFooter'

const Header = () => {
  return (
    <HeaderStyle>
      <StyledTitle>Carrito de compras</StyledTitle>
    </HeaderStyle>
  );
};

const cart_Shopper =() => {
    return (
      <ViewBackground style={{width: "100%", height:"100%"}}>
        <Header />
        <ShoppingList/>
        <Footer/>
      </ViewBackground>
    );
  }

export default cart_Shopper;
