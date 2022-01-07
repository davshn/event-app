import { View, Image, Text} from "react-native"

export function LogoTitle() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../public/logo.png')}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>findSpot</Text>
      </View>
    );
  }