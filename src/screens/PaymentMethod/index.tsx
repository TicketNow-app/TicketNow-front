import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";
import { SavedCards } from '../../components/Payment/SavedCards';
import { PaymentMethods } from '../../components/Payment/PaymentMethods';
import { Button } from '../../components/Form/Button'

import {Container, Header, MainTitle, ScrollContainer, Section, Title, ContainerBottom, ContainerTitle, ContainerTotal, ContainerValues, TextTitle, TextValue, TextTitleTotal, TextValueTotal } from './styles';

import { HeaderButton } from '../../components/HeaderButton';
export function PaymentMethod() {
  const navigation = useNavigation();

  function GoBack() {
    navigation.goBack();
  }



  const [checked, setChecked] = React.useState('first');

  return (
    <Container>
        <Header>
          <HeaderButton onPress={GoBack}>
            <ArrowLeftIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>
          <MainTitle>Forma de Pagamento</MainTitle>      
        </Header>
      <ScrollContainer>     
        <Section>
          <Title>Cartões Salvos</Title>
        </Section>
        <SavedCards type={"Crédito"} lastDigits={1234} />
        <SavedCards type={"Crédito"} lastDigits={1234} />
        <SavedCards type={"Crédito"} lastDigits={1234} />
        <Section>
          <Title>Método de Pagamento</Title>
        </Section>
        <PaymentMethods type={"Cartão de Crédito"} />
        <PaymentMethods type={"Cartão de Débito"} />  
        <ContainerBottom>
        <ContainerValues>
          <ContainerTitle>
            <TextTitle>Código Promocional</TextTitle>
            <TextValue>#AILAYANE</TextValue>
          </ContainerTitle>
          <ContainerTotal>
            <TextTitleTotal>Total</TextTitleTotal>
            <TextValueTotal>R$ 165,00</TextValueTotal>
          </ContainerTotal>
        </ContainerValues>
        
      </ContainerBottom>
      <Button title="Continuar" />
      </ScrollContainer>
      
    </Container>
  );
}



