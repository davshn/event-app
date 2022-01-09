import styled from 'styled-components/native';

const ButtonStyled = styled.TouchableOpacity`
  background-color: #5C4EBC;
  width: 250px;
  height: 38px;
  border-radius: 10px;
  elevation: 2;
  margin:5%;
  margin-bottom: 30px;
`;

const TextStyled = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  padding:10%;
`;

export default function ButtonGen({ title,onPress }) {
  return (
      <ButtonStyled onPress={onPress}>
          <TextStyled>{title}</TextStyled>
      </ButtonStyled>
  );
}
