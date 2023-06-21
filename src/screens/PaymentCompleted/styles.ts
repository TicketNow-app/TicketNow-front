import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  width: 100%;
  padding: 0px 16px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + 26}px 0px ${RFValue(14)}px 0px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Main = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  gap: 10px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;

export const Bottom = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 260px;
  gap: 8px;
`;
