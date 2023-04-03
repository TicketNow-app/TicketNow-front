import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px 20px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
`;

export const ContainerButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  height: 100%;
  align-items: center;
  justify-content: center;
  right: 0;
  padding: 0 20px;
`;
