import { Image } from "react-native";
import { Logo, StyledText } from "../generiComponents/GenericStyles"

export function LogoTitle() {
    return (
      <Logo>
        <Image
          style={{ width: 30, height: 30, borderRadius: 10 }}
          source={require('../public/logo.png')}
        />
        <StyledText style={{fontSize: 20, fontWeight: 'bold'}}>findSpot</StyledText>
      </Logo>
    );
  }