import DateTimePicker from '@react-native-community/datetimepicker';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const DatePickerModal = styled.View`
  width: 100%;
  height: ${RFValue(260)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: absolute;
  bottom: 0;
`;

export const HeaderDatePicker = styled.View`
  width: 100%;
  height: ${RFValue(55)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(24)}px;
  border-bottom-width: 1px;
  border-bottom-color: #ffffff10;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CustomDatePicker = styled(DateTimePicker)`
  width: 100%;
  height: 300px;
`;
