import React from 'react';
import { CreditCardIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';
import { Container, ContainerInfos, TextType } from './styles';

type PaymentMethods = {
  type: string;
};

export function PaymentMethods({ type }: PaymentMethods) {
  const [checked, setChecked] = React.useState('first');
  const theme = useTheme();

  return (
    <Container>
      <ContainerInfos>
        <CreditCardIcon size={24} color={theme.colors.text} />
        <TextType>{type}</TextType>
      </ContainerInfos>
    </Container>
  );
}
