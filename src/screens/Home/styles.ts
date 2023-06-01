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

export const GhostView = styled.View`
  width: 40px;
  height: 40px;
`;

export const ContainerCircle = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ImageAvatar = styled.Image`
  flex: 1;
  border-radius: 22px;
`;

export const ContainerScroll = styled.View`
  width: 100%;
  margin: ${RFValue(22)}px 0;
`;

export const HorizontalScroll = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 16 },
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
