import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { BoxCardTicket, Container, ContainerTicket, ContentScroll, Header, MainTitle, SubTitle } from './styles';

import { CardTicketsSold } from '../../components/CardTicketsSold';
import { HeaderButton } from '../../components/HeaderButton';

import { userEvents } from '../../mock';

export function TicketsSold() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <HeaderButton onPress={handleGoBack}>
          <ArrowLeftIcon size={20} color={useTheme().colors.text} />
        </HeaderButton>
        <MainTitle>Ingressos vendidos</MainTitle>
      </Header>
        <SubTitle>54 ingressos</SubTitle>
        <MainTitle>R$ 256,00</MainTitle>
      <ContentScroll>
        <ContainerTicket>
          {
            userEvents.map((item, index) => (
              <BoxCardTicket key={index}>
                <CardTicketsSold ticketsSold={item} />
              </BoxCardTicket>
            ))
          }
        </ContainerTicket>
      </ContentScroll>
    </Container>
  );
}



