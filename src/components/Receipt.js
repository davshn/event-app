import { View } from "react-native"
import ZigzagView from "react-native-zigzag-view"
import { useSelector } from "react-redux";
import { StyledText } from "../generiComponents/GenericStyles";

export const Receipt = (route) => {
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
        <View style={{height:"90%", justifyContent:"center"}}>
          <StyledText style={{alignSelf: "center"}}>HOLa</StyledText>  
        </View>
    
    </ZigzagView>
  )
}