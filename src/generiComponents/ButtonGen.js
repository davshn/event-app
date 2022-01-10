import styled from 'styled-components/native';
import { StyledButton, TextButton } from './GenericStyles'

export default function ButtonGen({ title,onPress }) {
  return (
      <StyledButton onPress={onPress}>
          <TextButton>{title}</TextButton>
      </StyledButton>
  );
}