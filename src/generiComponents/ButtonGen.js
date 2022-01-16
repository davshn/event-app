import styled from 'styled-components/native';
import { StyledButton, TextButton } from './GenericStyles'

export default function ButtonGen({ title, onPress, textcolor }) {
  return (
      <StyledButton onPress={onPress}>
          <TextButton style={{color: textcolor}}>{title}</TextButton>
      </StyledButton>
  );
}