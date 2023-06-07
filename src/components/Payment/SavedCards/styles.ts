import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: ${RFValue(10)}px ${RFValue(14)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const ContainerInfos = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextType = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
