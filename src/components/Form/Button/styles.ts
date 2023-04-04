import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 18px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 12px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;
