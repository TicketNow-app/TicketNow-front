import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { LinearGradient } from 'expo-linear-gradient';
import MapView from "react-native-maps";
import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + 18}px ${RFValue(16)}px ${RFValue(19)}px ${RFValue(16)}px;
`;

export const ContainerImageEvent = styled.View`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: ${RFValue(60)}%;
`;

export const ImageEvent = styled.Image`
  flex: 1;
`;

export const ContainerDraggable = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`;

export const DragCard = styled.View`
  min-height: ${RFValue(70)}%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${RFValue(12)}px ${RFValue(16)}px;
  border-top-left-radius: ${RFValue(30)}px;
  border-top-right-radius: ${RFValue(30)}px;
`;

export const ContainerDragComponent = styled.View`
  width: 100%;
  height: ${RFValue(20)}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(14)}px;
`;

export const DragComponent = styled.View`
  width: ${RFValue(52)}px;
  height: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.text_inactive};
  border-radius: ${RFValue(5)}px;
`;

export const ContainerScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 100,
  },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const ContainerTopInfos = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
`;

export const ContainerTitleIcons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(18)}px;
`;

export const TitleEvent = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${RFValue(60)}px;
`;

export const IconTouchBox = styled.TouchableOpacity`

`;

export const ContainerDateTime = styled.View`
  flex-direction: row;
`;

export const ContainerIconDateTime = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${RFValue(16)}px;
`;

export const DateTime = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${RFValue(4)}px;
`;

export const ContainerAbout = styled.View`
  width: 100%;
`;

export const TitleAbout = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFValue(8)}px;
`;

export const About = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_inactive};
  line-height: ${RFValue(18)}px;
`;

export const ReadMore = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerBuy = styled(LinearGradient).attrs({
  //use theme colors
  colors: [theme.colors.background, 'transparent'],
  start: { x: 0, y: 0.3 },
  end: { x: 0, y: 0 },
})`
  position: absolute;
  width: 100%;
  justify-content: center;
  align-items: center;
  bottom: 0;
  padding-top: ${RFValue(24)}px;
  padding-bottom: ${RFValue(24)}px;
  box-sizing: border-box;
`;
export const BuyButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: ${RFValue(80)}%;
  height: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(10)}px;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerMap = styled.View`
  width: 100%;
  height: ${RFValue(200)}px;
  border-radius: ${RFValue(10)}px;
  margin-top: ${RFValue(26)}px;
  overflow: hidden;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: ${RFValue(200)}px;
  border-radius: ${RFValue(10)}px;
`;

export const ContainerLineUp = styled.View`
  width: 100%;
  margin-top: ${RFValue(26)}px;
`;

export const TitleLineUp = styled(TitleAbout)`

`;

export const ContainerLineUpArtists = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  margin-top: ${RFValue(16)}px;
`;

export const LineUpArtist = styled.View`
  width: ${RFValue(80)}px;
  align-items: center;
  margin: 0 ${RFValue(20)}px;

`;

export const ImageArtist = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(40)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const NameArtist = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
