<<<<<<< HEAD
import { ScrollView } from "react-native";
=======
import { View, TextInput, Text } from "react-native"
>>>>>>> 168cf48f855a03f966a27a765ee40c94348b21fb

export function EventCard({title, price, location}) {
    return(
        <View>
            {/* imagen */}
            <Text>{title}</Text>
            <Text>{location}</Text>
            <Text>{price}</Text>
        </View>
    )
}