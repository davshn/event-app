import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import Pay from '../components/Payments';
import { CartText, FooterStyled, RowViews, BorrarCarrito } from '../generiComponents/GenericStyles';

const Footer = () => {
    const shopState = useSelector((state)=> state.shopReducer);
    const events = shopState.cartItems;

    return (
			<FooterStyled>
				<TotalComponent />
				<RowViews style={{paddingTop: "4%"}}>
					<BorrarCarrito>
						<Text style={{ color: "#817c99ff" }}>Borrar carrito</Text>
					</BorrarCarrito>

					{/* <TouchableOpacity style={checkoutButtonStyle}> */}
						<Pay/>

					
				</RowViews>
			</FooterStyled>
		);
  };


const TotalComponent = () => {
    const modes = useSelector(state => state.darkModeReducer.darkMode); // (para los estilos)
    const shopState = useSelector((state)=> state.shopReducer);
    const events = shopState.cartItems;
    const totalToPay = shopState.totalToPay;
    const itemCount = shopState.itemCount;

    return (
      <RowViews style={{paddingTop: "4%"}}>
        <RowViews >
          <Icon name="ios-cart" size={20} style={{ marginRight: "2.5%", color: modes? '#EDEDED' : '#292929' }} />
          <CartText>{itemCount} items</CartText>
        </RowViews>
  
        <RowViews>
          <CartText>Total - </CartText>
          <CartText>${totalToPay}</CartText>
        </RowViews>
      </RowViews>
    );
  };


  export default Footer;