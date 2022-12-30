import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};

  margin-right: 20px;

  width: ${RFValue(300)}px;
  height: ${RFValue(150)}px;
  border-radius: 10px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const ContainerFriends = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  flex-direction: row;
  align-items: center;
  top: 0;
  right: 0;
  padding: 14px 14px 0 0;
`;

export const FriendImage = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  margin-left: -${RFValue(10)}px;
`;

export const ContainerText = styled.View`
  position: absolute;
  bottom: 0;
  padding: 14px;
  `;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
