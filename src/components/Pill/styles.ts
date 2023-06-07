import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface PillProps {
  selected: boolean;
}

export const ButtonPill = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})<PillProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${RFValue(36)}px;
  padding: ${RFValue(10)}px ${RFValue(16)}px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.background_secondary : theme.colors.secondary};
  border-radius: 20px;
  margin-right: ${RFValue(8)}px;
`;

export const TextPill = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;
