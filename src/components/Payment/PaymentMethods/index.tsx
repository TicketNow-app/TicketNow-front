import React from 'react';
import { useTheme } from "styled-components";
import { CreditCardIcon } from "react-native-heroicons/solid";
import { Container, ContainerInfos, TextType} from './styles';

type PaymentMethods = {
  type: string;
}

export function PaymentMethods({ type }: PaymentMethods) {

  const [checked, setChecked] = React.useState('first');

  return (
    <Container>
      <ContainerInfos>
        <CreditCardIcon size={24} color={useTheme().colors.text} />
        <TextType>{type}</TextType>    
      </ContainerInfos>
      
    </Container>
  );
}