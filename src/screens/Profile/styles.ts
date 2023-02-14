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
  height: ${RFValue(113)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + 10}px ${RFValue(24)}px 0px ${RFValue(24)}px;
`;

export const ContainerTop = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export const CircleImage = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 75px;
  border-width: 4px;
  border-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 12px;
`;

export const UserImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 70px;
`;

export const TextName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 18px;
`;

export const ButtonPromoter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 14px 16px;
  border-radius: 26px;
`;

export const TextPromoter = styled.Text`
  margin-left: 8px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerProfileOptions = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px ${RFValue(24)}px 0px ${RFValue(24)}px;
`;
