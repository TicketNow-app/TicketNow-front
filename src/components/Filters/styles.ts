import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const ContainerInputButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${RFValue(24)}px;
`;

export const TitleContainer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 15px;
  margin-left: 5px;
  margin-top: 15px;
`;

export const TitleDates = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 15px;
  margin-left: 5px;
  margin-top: 100px;
`;

export const SelectDates = styled.View`
  width: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const InputText = styled(BottomSheetTextInput)`

  height: 45px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFValue(24)}px;
`;


export const ContainerScrollPills = styled.View`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;


