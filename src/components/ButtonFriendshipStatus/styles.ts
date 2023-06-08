import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ButtonFollow = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: ${RFValue(10)}px ${RFValue(16)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
  margin-bottom: ${RFValue(18)}px;
  margin-top: ${RFValue(10)}px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${RFValue(8)}px;
`;
