import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
import { useSelector, useDispatch ,connect} from "react-redux";
import {addToCart} from '../stateManagement/actions/cartActions';





const image1 = require("../images/orange.jpg");
const image2 = require("../images/tomato.jpg");

const Item = ({ item, index, onPress }) => (
  <View
    // style={
    //   index + 1 === events.length
    //     ? styles4.lastItemStyle
    //     : styles4.containerStyle
    // }
  >
    {/* <Image source={{ uri: item.eventPic }} style={imageStyle} /> */}

    <View style={styles4.textStyle}>
      <Text style={{ color: "#2e2f30" }}>{item.name}</Text>
      <View style={styles4.priceStyle}>
        <Text style={{ color: "#2e2f30", fontSize: 12 }}>${item.price}</Text>
      </View>
    </View>

    <View style={styles4.counterStyle}>
      <Icon.Button
        name="ios-remove"
        size={25}
        color="#fff"
        backgroundColor="#fff"
        style={{
          borderRadius: 15,
          backgroundColor: "#bbb",
          height: 30,
          width: 30,
          alignItems: "center",
        }}
        iconStyle={{ marginRight: 0 }}
      />

      <Text>{item.amountTaken}</Text>

      <Icon.Button
        name="ios-add"
        size={25}
        color="#fff"
        backgroundColor="#fff"
        style={{
          borderRadius: 15,
          backgroundColor: "#bbb",
          height: 30,
          width: 30,
        }}
        iconStyle={{ marginRight: 0 }}
      />
    </View>
  </View>
);

const CartItems = () => {
  const events = useSelector((state) => state.getEventsReducer.events);

  //agregar el evento que quiere comprar 

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Footer />
    </>
  );
};

const Footer = () => {
  const {
    containerStyle1,
    buttonContainerStyle,
    closeButtonStyle,
    checkoutButtonStyle,
  } = styles3;
  const { containerStyle, goodsStyle, totalStyle } = styles5;

  return (
    <View style={containerStyle1}>
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

      <View style={buttonContainerStyle}>
        <View style={closeButtonStyle}>
          <Text style={{ color: "#fff" }}>Close</Text>
        </View>

        <View style={checkoutButtonStyle}>
          <Text style={{ color: "#fff" }}>Go to checkout</Text>
        </View>
      </View>
    </View>
  );
};

const styles5 = {
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  goodsStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

const styles4 = {
  containerStyle: {
    flexDirection: "row",
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
    padding: 10,
    paddingLeft: 15,
    backgroundColor: "#fff",
  },
  lastItemStyle: {
    flexDirection: "row",
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: "#fff",
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  textStyle: {
    flex: 2,
    justifyContent: "center",
  },
  priceStyle: {
    backgroundColor: "#ddd",
    width: 40,
    alignItems: "center",
    marginTop: 3,
    borderRadius: 10,
  },
  counterStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
};
const styles3 = {
  containerStyle1: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: "#e2e2e2",
  },
  buttonContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  closeButtonStyle: {
    backgroundColor: "#EDEDED",
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 10,
  },
  checkoutButtonStyle: {
    textcolor: "#EDEDED",
    backgroundColor: "#776BC7",
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,
    borderRadius: 10,
  },
};

export default CartItems;
