import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
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

export const ContainerTerms = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const ContainerTextTerms = styled.View`
  flex: 1;
  margin-left: 8px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 12px;
`;

export const TextTerms = styled.Text`
  color: ${({ theme }) => theme.colors.text_inactive};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TextTermsBold = styled(TextTerms)`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ButtonBox = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const ContainerAlreadyAccount = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const TextAlreadyAccount = styled.Text`
  color: ${({ theme }) => theme.colors.text_inactive};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TouchableAlreadyAccount = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;

export const TextAlreadyAccountBold = styled(TextAlreadyAccount)`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
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
