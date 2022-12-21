import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: ${RFValue(16)}px;
  box-sizing: border-box;
  `;

export const Avatar = styled.Image`
  width: ${RFValue(34)}px;
  height: ${RFValue(34)}px;
  border-radius: ${RFValue(17)}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-right: -${RFValue(8)}px;
`;

export const AvatarMore = styled.View`
  width: ${RFValue(34)}px;
  height: ${RFValue(34)}px;
  border-radius: ${RFValue(17)}px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;


