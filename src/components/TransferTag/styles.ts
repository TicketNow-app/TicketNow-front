import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${RFValue(10)}px ${RFValue(12)}px;
  border-radius: 8px;
  margin-bottom: ${RFValue(14)}px;
`;

export const ContainerTransferInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FriendImage = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  border-radius: 40px;
  margin-right: ${RFValue(10)}px;
`;

export const ContainerFriendText = styled.View`
  flex: 1;
`;

export const FriendName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const FriendsCommon = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;

export const ContainerFriendActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonAdd = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-right: ${RFValue(8)}px;
  padding: ${RFValue(10)}px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ButtonAddText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;
