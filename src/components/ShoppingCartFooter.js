import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import Pay from '../components/Payments';

const Footer = () => {
    const shopState = useSelector((state)=> state.shopReducer);
    const events = shopState.cartItems;
    const { 
      containerStyle, 
      buttonContainerStyle, 
      closeButtonStyle, 
      checkoutButtonStyle } = styles3;

    return (
			<View style={containerStyle}>
				<TotalComponent />
				<View style={buttonContainerStyle}>
					<View style={closeButtonStyle}>
						<Text style={{ color: "#bbb" }}>Borrar carrito</Text>
					</View>

					{/* <TouchableOpacity style={checkoutButtonStyle}> */}
						<Pay style={checkoutButtonStyle} />
				
					
				</View>
			</View>
		);
  };

const TotalComponent = () => {
    const { containerStyle, goodsStyle, totalStyle } = styles5;
    const shopState = useSelector((state)=> state.shopReducer);
    const events = shopState.cartItems;
    const totalToPay = shopState.totalToPay;
    const itemCount = shopState.itemCount;

    return (
      <View style={containerStyle}>
        <View style={goodsStyle}>
          <Icon name="ios-cart" size={20} style={{ marginRight: 8 }} />
          <Text>{itemCount} items</Text>
        </View>
  
        <View style={totalStyle}>
          <Text>Total - </Text>
          <Text>${totalToPay}</Text>
        </View>
      </View>
    );
  };

  const styles3 = {
    containerStyle: {
      flex: 1,
      paddingRight: 15,
      paddingLeft: 15,
      borderTopWidth: 1,
      borderColor: '#e2e2e2',
    },
    buttonContainerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 15,
    },
    closeButtonStyle: {
      backgroundColor: '#EDEDED',
      padding: 10,
      paddingRight: 30,
      paddingLeft: 30,
      borderRadius: 10,
    }, 
    checkoutButtonStyle: {
      textcolor: '#EDEDED',
      backgroundColor: '#776BC7',
      padding: 10,
      paddingRight: 60,
      paddingLeft: 60,
      borderRadius: 10,
    }
  };

  const styles5 = {
    containerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 15
    },
    goodsStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    totalStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  };

  export default Footer;