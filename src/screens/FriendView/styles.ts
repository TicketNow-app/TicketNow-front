import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 24,
    paddingHorizontal: 16,
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

export const ContainerInfos = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.View`
  padding: ${RFValue(8)}px;
  border: 4px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
`;

export const UserImage = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  background-color: ${({ theme }) => theme.colors.text_inactive};
  border-radius: 70px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(4)}px;
`;

export const ButtonFollow = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: ${RFValue(10)}px ${RFValue(16)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
  margin-bottom: ${RFValue(18)}px;
  margin-top: ${RFValue(10)}px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${RFValue(8)}px;
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

