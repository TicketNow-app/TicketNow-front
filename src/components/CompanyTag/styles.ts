import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.TouchableOpacity`
  margin-right: 16px;
  width: ${RFValue(130)}px;
  height: ${RFValue(130)}px;
  border-radius: 10px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.Image`
  width: 65%;
  height: 65%;
  border-radius: 75px;
  margin-bottom: 12px;
`;

export const ContainerText = styled.View`
  width: 100%;
  align-items: center;
  `;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;
