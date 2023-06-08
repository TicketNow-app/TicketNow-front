import React, { useState } from 'react';
import { Platform } from 'react-native';
import {
  Button,
  ButtonText,
  CustomDatePicker,
  DatePickerModal,
  HeaderDatePicker,
  Title,
} from './styles';

interface IDatePickerProps {
  handleConfirm: (date: Date) => void;
}

export function DatePicker({ handleConfirm }: IDatePickerProps) {
  const [date, setDate] = useState(new Date(Date.now()));

  const onChange = (event, value) => {
    setDate(value);
  };

  return (
    <DatePickerModal>
      <HeaderDatePicker>
        <Title>Selecione a data</Title>
        <Button
          onPress={() => {
            handleConfirm(date);
          }}
        >
          <ButtonText>Confirmar</ButtonText>
        </Button>
      </HeaderDatePicker>
      <CustomDatePicker
        value={date}
        mode="date"
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        is24Hour
        onChange={onChange}
      />
    </DatePickerModal>
  );
}
