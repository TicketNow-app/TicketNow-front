import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: ${RFValue(10)}px ${RFValue(14)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const ContainerInfos = styled.View``;

export const TextType = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  margin-bottom: ${RFValue(6)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerValue = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextValue = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  margin-right: ${RFValue(1)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;

export const TextTax = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_inactive};
`;

export const ContainerCounter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonCounter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const TextCounter = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  width: ${RFValue(40)}px;
  text-align: center;
`;
