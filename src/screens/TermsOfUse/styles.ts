import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const GhostView = styled.View`
  width: 40px;
  height: 40px;
`;

export const TermsIntroduction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_inactive};
  margin: ${RFValue(8)}px 0px;
`;

export const ContainerTopic = styled.View`
  width: 100%;
  margin-top: ${RFValue(18)}px;
`;

export const TopicTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TopicText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${RFValue(8)}px;
  opacity: 0.8;
`;

export const FooterDescription = styled(TopicText)`
  opacity: 1;
  margin-top: ${RFValue(24)}px;
  margin-bottom: ${RFValue(24)}px;
`
