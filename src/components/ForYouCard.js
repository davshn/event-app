import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import { backgroundColor } from "../services/theme";

const StyledView = styled.View`
    border-radius: 10px;
    border : 1.5px solid #776BC7;
    background-color: pink;
`

export const MyComponent = ({name, pic, date, time}) => (
  <StyledView>
    
  </StyledView>
);

export default MyComponent;

// <Image source={{ uri: pic }} />
//     <Card.Content>
//       <Title>{name}</Title>
//       <Paragraph>Card content</Paragraph>
//     </Card.Content>