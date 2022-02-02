import { SectionStyled,TextStyled,ViewStyled,TitleStyled, StyledText, OptionsView, Title} from '../generiComponents/GenericStyles';
import { Image } from "react-native";



export default function aboutUs(){
    return (
        <ViewStyled style={{}}>
            <StyledText style={{paddingLeft: "5%" , paddingRight: "5%" , textAlign: "justify"}}>
            Nuestro proyecto surge de la necesidad de encontrar una plataforma móvil que permita conectar a personas de gustos similares, con experiencias únicas.
            </StyledText>
            <StyledText style={{paddingLeft: "5%", paddingTop: "3%", paddingBottom: "3%", fontWeight: "bold", textDecorationLine: "underline" }}>
            Los desarrolladores de findSpot son:
            </StyledText>
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/85400266?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Camila L. Sosa
                </StyledText>
            </OptionsView>
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/89650193?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Daniela Roldan
                </StyledText>
            </OptionsView>
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/85398460?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Juan S. Carvajal
                </StyledText>
            </OptionsView>
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/59322098?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Hernán Figueroa
                </StyledText>
            </OptionsView>
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/4015034?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Luis M. Miranda
                </StyledText>
            </OptionsView>
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/74471562?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Fernando Villares
                </StyledText>
            </OptionsView>
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" , marginBottom: "10%"}}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/77353533?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Mauro Fernandez
                </StyledText>
            </OptionsView>
        </ViewStyled>


        )
    }