import { View, TextInput, Text } from "react-native"

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