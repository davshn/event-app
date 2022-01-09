import { View, Image, Text} from "react-native";
import { Logo } from "../generiComponents/GenericStyles"


export function LogoTitle() {
    return (
      <Logo>
        <Image
          style={{ width: 30, height: 30, borderRadius: 10 }}
          source={require('../public/logo.png')}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>findSpot</Text>
      </Logo>
    );
  }