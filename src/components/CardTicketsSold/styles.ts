import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${RFValue(321)}px;
  height: ${RFValue(86)}px;
  border-radius: 10px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
`;

export const Image = styled.Image`
  width: 40%;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;


export const ContainerValue = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  flex-direction: column;
  margin-top: 5px;
  gap: 10px;
  top: 0;
  right: 0;
  padding: 14px 14px 0 0;
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

export const TitleQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
