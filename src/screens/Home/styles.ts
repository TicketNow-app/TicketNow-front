import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + RFValue(20),
    paddingBottom: getBottomSpace() + 24,
  }
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerScroll = styled.View`
  width: 100%;
  margin: ${RFValue(22)}px 0;
`;

export const HorizontalScroll = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;
  margin-top: ${RFValue(20)}px;
`;

export const TitleContainer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-left: 24px;
`;
