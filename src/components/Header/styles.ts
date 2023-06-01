import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: ${getStatusBarHeight() + 30}px ${RFValue(16)}px 20px ${RFValue(16)}px;
`;

export const LogoHorizontal = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(30)}px;
`;

export const ContainerCircle = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ImageAvatar = styled.Image`
  flex: 1;
  border-radius: 22px;
`;

export const MainTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin: auto;
`;
