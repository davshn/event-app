import { useState } from "react"
import { View, TextInput, Text } from "react-native"
import ButtonGen from "./ButtonGen"

export function CrearEvento(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")

    return(
        <View>
            <View>
                <Text>Nombre del evento:</Text>
                <TextInput value={title} onChangeText={setTitle}/>
                <Text>Descripción del evento:</Text>
                <TextInput value={description} onChangeText={setDescription}/>
                <Text>Precio de la entrada:</Text>
                <TextInput value={price} onChangeText={setPrice}/>
                <Text>Ubicación del evento:</Text>
                <TextInput value={location} onChangeText={setLocation}/> 
                <ButtonGen title="Crear"/> 
            </View>
        </View>
    )
}

//falta subir imagen