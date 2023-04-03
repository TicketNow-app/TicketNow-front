import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 24,
  }
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: ${getStatusBarHeight() + 30}px ${RFValue(24)}px 20px ${RFValue(24)}px;
`;

export const LogoHorizontal = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(30)}px;
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
