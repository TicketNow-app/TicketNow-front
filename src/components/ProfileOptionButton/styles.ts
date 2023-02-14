import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ContainerOption = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 14px;
  padding: 14px ${RFValue(18)}px;
  margin-bottom: 24px;
`;

export const GroupIconTexts = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerTexts = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const TitleProfileOption = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

export const DescProfileOption = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;
