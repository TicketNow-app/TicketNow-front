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
  },
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

export const Section = styled.View`
  margin-bottom: 26px;
  margin-top: 26px;
  padding: 0px ${RFValue(6)}px 0px ${RFValue(6)}px;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px 0px;
  border-radius: 8px;
`;

export const ContainerValues = styled.View`
  width: 100%;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(8)}px;
`;

export const ContainerTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(4)}px;
`;

export const TextTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;

export const TextValue = styled(TextTitle)``;

export const TextTitleTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TextValueTotal = styled(TextTitleTotal)``;
