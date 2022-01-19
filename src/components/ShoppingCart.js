import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View, FlatList, Image } from 'react-native';
import { InputStyled, FormError,SmallerText, StyledTitle, SelectedDate, StyledView, ViewBackground, AgregarFotoButton, TextButton, ProfilePic, TextStyled, TermsText, TermsModal, ViewStyled } from '../generiComponents/GenericStyles';
import { useSelector,useDispatch } from "react-redux";

export default class ShoppingCart extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ItemsContainer />
        <Footer />
      </View>
      
    );
  }
}

//--------------------------------------------------------------------------------------------------------
const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <StyledTitle>Carrito de compras</StyledTitle>
    </View>
  );
};

const styles = {
  headerStyle: {
    flex: 0.4,
    // elevation: 2,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  }
};
//--------------------------------------------------------------------------------------------------------
class ItemsContainer extends Component {
  render() {
    return (
      <View style={styles1.containterStyle}>
        <Item />
      </View>
    );
  }
}

const styles1 = {
  containterStyle: {
    flex: 5,
    // backgroundColor: '#DCDCDC'
  }
};

//--------------------------------------------------------------------------------------------------------
const Footer = () => {
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
          <Text style={{ color: '#fff' }}>Close</Text>
        </View>

        <View style={checkoutButtonStyle}>
            
          <Text style={{ color: '#fff' }}>Go to checkout</Text>
        </View>
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
//--------------------------------------------------------------------------------------------------------
const image1 = require('../images/orange.jpg');
const image2 = require('../images/tomato.jpg');
const image3 = require('../images/salmon.jpg');
const image4 = require('../images/greens.jpg');
const image5 = require('../images/rye-bread.jpg');

const _data = [
{
  id: 1,
  eventPic: image1,
  name: 'Orange',
  price: 10,
  amountTaken: 3,
  date:"2022-02-21",
  time:"12:00",
}, {
  id: 2,
  image: image2,
  name: 'Tomato',
  price: 5,
  amountTaken: 4,
  fecha:"2022-02-22",
  hora:"13:00",
}
];

class Item extends Component {

    _data(){
        const data = useSelector(state => state.getEventsReducer.cartEvents);
        console.log(data);
        return data;
    }

  _renderItem({ item, index }) {
    const data = useSelector(state => state.getEventsReducer.cartEvents);
    const { 
      containerStyle, 
      lastItemStyle,
      imageStyle, 
      textStyle, 
      counterStyle,
      priceStyle } = styles4;

    return (
    <View style={(index + 1 === data.length) ? lastItemStyle : containerStyle}>
      <Image source={{uri:item.eventPic}} style={imageStyle} />
      
      <View style={textStyle}>
        <Text style={{ color: '#2e2f30' }}>{item.name}</Text>
        <View style={priceStyle}>
          <Text style={{ color: '#2e2f30', fontSize: 12 }}>${item.price}</Text>
        </View>
      </View>

      <View style={counterStyle}>
        <Icon.Button 
          name="ios-remove" 
          size={25} 
          color='#fff' 
          backgroundColor='#fff' 
          style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }} 
          iconStyle={{ marginRight: 0 }}
        />

        <Text>{item.amountTaken}</Text>

        <Icon.Button 
          name="ios-add" 
          size={25} 
          color='#fff' 
          backgroundColor='#fff' 
          style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }} 
          iconStyle={{ marginRight: 0 }}
        />

      </View>
    </View>);
  }


  render() {
    return (
      <FlatList
        data={this._data}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles4 = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width: 50, 
    height: 50, 
    marginRight: 20
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    backgroundColor: '#ddd',
    width: 40,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 10
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

//--------------------------------------------------------------------------------------------------------
const TotalComponent = () => {
  const { containerStyle, goodsStyle, totalStyle } = styles5;
  return (
    <View style={containerStyle}>
      <View style={goodsStyle}>
        <Icon name="ios-cart" size={20} style={{ marginRight: 8 }} />
        <Text>8 items</Text>
      </View>

      <View style={totalStyle}>
        <Text>Total - </Text>
        <Text>$300</Text>
      </View>
    </View>
  );
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