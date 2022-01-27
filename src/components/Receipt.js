import { View } from "react-native"
import ZigzagView from "react-native-zigzag-view"
import { useSelector } from "react-redux";
import { StyledText } from "../generiComponents/GenericStyles";
import QRCode from 'react-native-qrcode-svg';

export const Receipt = ({navigation : { goBack }, route}) => {
  const modes = useSelector((state) => state.darkModeReducer.darkMode);
  const ticket = route.params.item;
  
  return (
    <ZigzagView
        backgroundColor={modes ? "#292929" : "#EDEDED"}
        surfaceColor={modes ? "#3D3D3D" : "#ffff"}
        height="100%"
        bottom="false"
        padding="7%"
    >
        <View style={{height:"90%", padding: "15%", paddingHorizontal: "10%"}}>
          <StyledText style={{fontSize: 28, alignSelf: "center"}}>findSpot®</StyledText>
          <StyledText style={{alignSelf: "center", marginTop: 7, fontSize: 16}}>{ticket.place}</StyledText>
          <StyledText style={{marginTop: 10}}>{ticket.date}</StyledText>
          <StyledText style={{marginTop: 8}}>{ticket.time}</StyledText>
          <StyledText style={{fontSize: 20, alignSelf: "center", marginTop: 16}}>RECIBO</StyledText>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
          <StyledText>{ticket.quantity} Entrada para {ticket.eventName}</StyledText>
          <StyledText>${ticket.price}</StyledText>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10, alignItems:"center"}}>
          <StyledText style={{fontSize: 20}}>Total</StyledText>
          <StyledText>${ticket.price}</StyledText>
          </View>
          <View style={{alignItems: "center", top: "10%"}}>
            <QRCode value= {ticket.idTicket} size={140}/>
            <StyledText style={{fontSize: 10, marginTop: 5}}>{ticket.idTicket}</StyledText>
          </View>
          
        </View>
    </ZigzagView>
  )
}

/* 
"idTicket": "8a364a5f-2d7b-4b79-acd0-a51e0b0a29ce",
"eventName": "Pollockk",
"place": "San Miguel de tucuman ",
"date": "2022-01-26",
"time": "00:00:00",
"quantity": 1,
"price": 400,
"createdAt": "2022-01-26T20:09:07.757Z",
"updatedAt": "2022-01-26T20:09:07.757Z",
"userId": "3a18a81c-efc0-4b5c-a37f-8966e2e4ec3d",
"eventId": "7828dbc5-2a20-456c-84a0-5c9d7134e21b" */