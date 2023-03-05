import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: ${getStatusBarHeight() + 30}px ${RFValue(24)}px 20px ${RFValue(24)}px;
`;

export const LogoHorizontal = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(30)}px;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  margin-top: 30px;
`;

export const InputBox = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const ButtonBox = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const ContainerForgotPassword = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 12px 24px;
  margin-bottom: 14px;
`;

export const TextForgotPassword = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ContainerAnotherSignUpWays = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextAnotherSignUpWays = styled.Text`
  color: ${({ theme }) => theme.colors.text_inactive};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 20px;
`;

export const ContainerSocialRegister = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonSocialRegisterBox = styled.View`
  width: 80px;
`;

export const ContainerFooterMessage = styled.View`
  padding: 0 24px;
  margin-bottom: 40px;
`;

export const FooterMessage = styled.Text`
  font-size: ${RFValue(10)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_inactive};
`;
