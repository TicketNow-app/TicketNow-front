import React, { useState } from 'react';
import { useTheme } from "styled-components";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";

import { Container, ContainerInfos, ContainerValue, TextTax, TextType, TextValue, ButtonCounter, ContainerCounter, TextCounter } from './styles';

type CounterTicketProps = {
  type: string;
  price: number;
}

export function CounterTicket({ type, price }: CounterTicketProps) {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }

  function handleDecrement() {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <Container>
      <ContainerInfos>
        <TextType>{type}</TextType>
        <ContainerValue>
          <TextValue>R$ {price}</TextValue>
          <TextTax> + taxa</TextTax>
        </ContainerValue>
      </ContainerInfos>
      <ContainerCounter>
        <ButtonCounter onPress={() => handleDecrement()}>
          <MinusIcon size={20} color={useTheme().colors.text} />
        </ButtonCounter>
        <TextCounter>{counter}</TextCounter>
        <ButtonCounter onPress={() => handleIncrement()}>
          <PlusIcon size={20} color={useTheme().colors.text} />
        </ButtonCounter>
      </ContainerCounter>
    </Container>
  );
}


