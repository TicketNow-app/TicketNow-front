import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${RFValue(321)}px;
  height: ${RFValue(86)}px;
  border-radius: 10px;
`;

export const ContainerImage = styled.View`
  width: ${RFValue(150)}px;
  height: 100%;
  align-items: center;
  justify-content: center;
  `;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const ContainerValue = styled.View`
  z-index: 1;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 14px 16px;
`;

export const ContainerText = styled.View`
  position: absolute;
  bottom: 0;
  padding: 14px;
  `;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerDesc = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const TitleSold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ValueSold = styled(TitleSold)`
  font-family: ${({ theme }) => theme.fonts.regular};
`;
