import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import {
  Container,
  ContainerInfos,
  ContainerValue,
  TextTax,
  TextType,
  TextValue,
  ButtonCounter,
  ContainerCounter,
  TextCounter,
} from './styles';

import { formatMoney } from '../../utils/utils';

type CounterTicketProps = {
  type: string;
  price: number;
  valueIncrement: (value: number) => void;
  valueDecrement: (value: number) => void;
};

export function CounterTicket({ type, price, valueIncrement, valueDecrement }: CounterTicketProps) {
  const [counter, setCounter] = useState(0);
  const theme = useTheme();

  function handleIncrement() {
    setCounter(counter + 1);
  }

  function handleDecrement() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <Container>
      <ContainerInfos>
        <TextType>{type}</TextType>
        <ContainerValue>
          <TextValue>{formatMoney(price)}</TextValue>
          <TextTax> + taxa</TextTax>
        </ContainerValue>
      </ContainerInfos>
      <ContainerCounter>
        <ButtonCounter
          onPress={() => {
            handleDecrement();
            valueDecrement(price);
          }}
        >
          <MinusIcon size={20} color={theme.colors.text} />
        </ButtonCounter>
        <TextCounter>{counter}</TextCounter>
        <ButtonCounter
          onPress={() => {
            handleIncrement();
            valueIncrement(price);
          }}
        >
          <PlusIcon size={20} color={theme.colors.text} />
        </ButtonCounter>
      </ContainerCounter>
    </Container>
  );
}
