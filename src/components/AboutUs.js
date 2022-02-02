import { SectionStyled,TextStyled,ViewStyled,InputStyled,FormError,TitleStyled, StyledText, OptionsView} from '../generiComponents/GenericStyles';
import { Image } from "react-native";



export default function aboutUs(){
    return (
        <ViewStyled style={{}}>
            <TitleStyled style={{bottom: 20}}>findSpot</TitleStyled>
            <StyledText>
                Desarrolladores de findSpot
            </StyledText>
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/85400266?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Camila Sosa
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
                    Sebastián Carvajal
                </StyledText>
            </OptionsView>
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/59322098?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Hernan Figueroa
                </StyledText>
            </OptionsView>
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/4015034?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Luis Miranda
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
            <OptionsView style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image 
                source= {{uri: "https://avatars.githubusercontent.com/u/77353533?v=4"}}
                style={{width: 60, height: 60, borderRadius: 99}}>
                </Image>
                <StyledText style={{textAlignVertical: "center", textAlign: "center", fontSize: 20}}>
                    Mauro E. N. Fernandez
                </StyledText>
            </OptionsView>
        </ViewStyled>


        )
    }