import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};

  width: ${RFValue(140)}px;
  height: ${RFValue(140)}px;
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
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
