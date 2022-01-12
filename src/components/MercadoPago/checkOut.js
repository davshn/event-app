import Env from "react-native-config";
import React, { useState } from "react";
import {  View, Text, TouchableOpacity, Alert } from "react-native";

import MercadoPagoCheckout from "@blackbox-vision/react-native-mercadopago-px";

import * as MercadoPagoService from "./mercadopago-service";



export default function checkOut() {
  const [paymentResult, setPaymentResult] = useState(null);

  const startCheckout = async () => {
    try {
      const preferenceId = await MercadoPagoService.getPreferenceId(
        "payer@email.com",
        {
          id: "item-ID-1234",
          title: "Dummy Item Title",
          description: "Dummy Item Description",
          quantity: 1,
          currency_id: "ARS",
          unit_price: 10.0,
        }
      );

      const payment = await MercadoPagoCheckout.createPayment({
        publicKey: Env.MP_PUBLIC_KEY,
        preferenceId,
      });

      setPaymentResult(payment);
    } catch (err) {
      Alert.alert("Something went wrong", err.message);
    }
  };

  return (
    <View style={{margin:"10%"}}>
      <TouchableOpacity onPress={startCheckout}>
        <Text >Start Payment</Text>
      </TouchableOpacity>
      <Text >Payment: {JSON.stringify(paymentResult)}</Text>
    </View>
  );
}
