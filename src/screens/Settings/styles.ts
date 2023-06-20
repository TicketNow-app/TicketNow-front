import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 28,
  },
})``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const GhostView = styled.View`
  width: 40px;
  height: 40px;
`;

export const ContainerProfileOptions = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px ${RFValue(16)}px;
`;

export const Section = styled.View`
  margin-bottom: 26px;
  margin-top: 26px;
  padding: 0px ${RFValue(16)}px 0px ${RFValue(16)}px;
`;
