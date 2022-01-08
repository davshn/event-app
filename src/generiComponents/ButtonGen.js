import styled from 'styled-components/native';

const ButtonStyled = styled.TouchableOpacity`
  background-color:purple;
  width: 84px;
  height: 34px;
  border-radius: 9px;
  elevation: 2;
  margin:5%;
`;

const TextStyled = styled.Text`
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
