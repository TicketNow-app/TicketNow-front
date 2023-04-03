import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 28,
  },
})``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
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

export const ContainerProfileOptions = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px ${RFValue(24)}px 0px ${RFValue(24)}px;
`;

export const Section = styled.View`
  margin-bottom: 26px;
  margin-top: 26px;
  padding: 0px ${RFValue(16)}px 0px ${RFValue(16)}px;
`;
