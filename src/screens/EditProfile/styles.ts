import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin: auto;
`;

export const GhostView = styled.View`
  width: 40px;
  height: 40px;
`;


export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  flex-direction: row;
  align-items: center;
  padding: ${getStatusBarHeight() + 10}px ${RFValue(24)}px 0px ${RFValue(24)}px;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  margin-top: 30px;
`;

export const ContainerImage = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: ${RFValue(8)}px;
  border: 4px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
  margin-bottom: 30px;
`;

export const UserImage = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  background-color: ${({ theme }) => theme.colors.text_inactive};
  border-radius: 70px;
`;

export const InputBox = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const GroupInputs = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBoxLeft = styled.View`
  width: 37%;
  margin-bottom: 20px;
`;
export const InputBoxRight = styled.View`
  width: 59%;
  margin-bottom: 20px;
`;

export const ButtonBox = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const ContainerLater = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: ${RFValue(12)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const TextLater = styled.Text`
  color: ${({ theme }) => theme.colors.text_inactive};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-decoration-line: underline;
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
