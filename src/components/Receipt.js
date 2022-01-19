import { Text, View } from "react-native"
import ZigzagView from "react-native-zigzag-view"

export const Receipt = () => {
/* AQUI SE HACE EL GETALL QUE DEVUELVE todos LOS TICKETS POR PERSONA  */




  return (
    <ZigzagView
        backgroundColor="violet"
        surfaceColor="#FFF"
        height="100%"
        bottom="false"
        padding="7%"
    >
        <View style={{height:"90%", justifyContent:"center"}}>
          {/* a partir de aca meten la data */}
          <Text style={{alignSelf: "center"}}>HOLa</Text>  
        </View>
    
    </ZigzagView>
  )
}