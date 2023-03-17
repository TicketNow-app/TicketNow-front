import { TextProps, TouchableOpacityProps } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonPromoterProps extends TouchableOpacityProps {
  promoter: boolean;
}

interface TextButtonProps extends TextProps {
  promoter: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px ${RFValue(16)}px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + 26}px 0px ${RFValue(14)}px 0px;
`;

export const ContainerTopInfos = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.View`
  padding: ${RFValue(8)}px;
  border: 4px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
`;

export const UserImage = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  background-color: ${({ theme }) => theme.colors.text_inactive};
  border-radius: 70px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(14)}px;
`;

export const ButtonPromoter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
}) <ButtonPromoterProps>`
  padding: ${RFValue(10)}px ${RFValue(16)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
`;

export const CopyButtonPromoter = styled(ButtonPromoter)`
  background-color: transparent;
  margin-left: 0px;
  margin-right: ${RFValue(8)}px;
`;

export const TextButton = styled.Text<TextButtonProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${RFValue(8)}px;
`;

export const TextCopyButton = styled(TextButton)`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_inactive};
  margin-left: 0px;
  margin-right: ${RFValue(8)}px;
`;


export const ContainerConfigButtons = styled.View`
  width: 100%;
  height: ${RFValue(230)}px;
  justify-content: space-between;
  margin-top: 40px;
`;
