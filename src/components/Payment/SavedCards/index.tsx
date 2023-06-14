import React from 'react';
import { RadioButton } from 'react-native-paper';
import { PaymentIcon } from 'react-native-payment-icons';
import { Container, ContainerInfos, TextType } from './styles';

type SavedCardProps = {
  lastDigits: number;
  type: string;
};

export function SavedCards({ lastDigits, type }: SavedCardProps) {
  return (
    <Container>
      <ContainerInfos>
        <RadioButton.Android value="first" status="checked" color="#FFFFFF" />
        <TextType>
          ****{lastDigits} ({type})
        </TextType>
      </ContainerInfos>
      <PaymentIcon type="master" width={40} />
    </Container>
  );
}
