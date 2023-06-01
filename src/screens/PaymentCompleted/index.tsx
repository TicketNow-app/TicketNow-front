import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {  XMarkIcon, CheckCircleIcon, InformationCircleIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";

import {Container, Header, ScrollContainer, Title, Main, SubTitle, Bottom } from './styles';

import { HeaderButton } from '../../components/HeaderButton';

export function PaymentCompleted() {
  const navigation = useNavigation();

  function GoBack() {
    navigation.goBack();
  }
  

  return (
    <Container>
        <Header>
          <HeaderButton onPress={GoBack}>
            <XMarkIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>  
        </Header>
      <ScrollContainer>     
        <Main>
            <CheckCircleIcon size={128} color={useTheme().colors.text_inactive} />
            <Title>Pagamento concluído</Title>
            <SubTitle>Obrigado por sua compra!</SubTitle>
            <SubTitle>Seu pedido foi recebido e está sendo processado.</SubTitle>
        </Main>
        <Bottom>
          <InformationCircleIcon size={20} color={useTheme().colors.text} />
          <SubTitle>Após confirmarmos o pagamento, o ingresso será adicionado a sua conta. </SubTitle>
        </Bottom>       
      </ScrollContainer >     
    </Container>
  );
}



