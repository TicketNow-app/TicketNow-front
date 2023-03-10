import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: 8px 0;
`;
