import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px ${RFValue(16)}px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 24,
  }
})`
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + 26}px 0px ${RFValue(14)}px 0px;
`;

export const MainTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin: auto;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;

export const Section = styled.View`
  margin-bottom: 26px;
  margin-top: 26px;
  padding: 0px ${RFValue(6)}px 0px ${RFValue(6)}px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: ${RFValue(16)}px;
  justify-content: center;
  align-items: center;
`;


export const ContainerDate = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px ${RFValue(20)}px 0px;
  `;

export const InputDate = styled.View`
  width: 50%;
`;

export const InputCvv= styled.View`
  width: 40%;
`;

export const InputBox = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const ButtonBox = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const ContainerCheckBox = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const ContainerCheckBoxText = styled.View`
  flex: 1;
  margin-left: 8px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 12px;
`;

export const TextCheckbox = styled.Text`
  color: ${({ theme }) => theme.colors.text_inactive};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;


export const ContainerSelect = styled.View`
  width: 100%;
  padding: 16px 20px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  margin-bottom: 24px;
`;