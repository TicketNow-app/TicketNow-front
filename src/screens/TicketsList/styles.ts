import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + 26}px ${RFValue(16)}px ${RFValue(14)}px ${RFValue(16)}px;
`;

export const ContentScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 24,
  }
})`
  width: 100%;
`;

export const ContainerEvent = styled.View`
  width: 100%;
  margin: ${RFValue(22)}px 0;
  display: grid;
  align-items: center;
`;

export const BoxTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 24px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

export const BoxCardLargeEvent = styled.View`
  margin-bottom: 30px;
`;

export const BoxCardLargeEventPased = styled(BoxCardLargeEvent)`
  opacity: 0.5;
`;
