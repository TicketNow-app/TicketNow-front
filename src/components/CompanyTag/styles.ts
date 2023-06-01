import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: 45px;
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
