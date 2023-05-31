import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { BoxCardLargeEvent, BoxCardLargeEventPased, BoxTitle, Container, ContainerEvent, ContentScroll, Title } from './styles';

import { CardLargeEvent } from '../../components/CardLargeEvent';
import { HeaderButton } from '../../components/HeaderButton';
import { Header } from '../../components/Header';

import { readOrders } from '../../helpers/requests/order'

export function TicketsList() {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]); //TODO: define response type

  useEffect(() => {
    async function loadOrders() {
      //load orders from api passing user id
      const response = await readOrders(2); //TODO: Remove mock user id
      setOrders(response);
    }

    loadOrders();
  }, []);

  function handleNavigateToTicket(TicketId: number) {
    navigation.navigate('Ticket', { id: TicketId });
  }

  return (
    <Container>
      <Header buttonBack />
      <ContentScroll>
        <ContainerEvent>
          <BoxTitle>
            <Title>Ingressos atuais</Title>
          </BoxTitle>
          {
            orders.map((item, index) => (
              <BoxCardLargeEvent key={item.id}>
                <CardLargeEvent eventData={item} onPress={() => handleNavigateToTicket(item.id)} />
              </BoxCardLargeEvent>
            ))
          }
        </ContainerEvent>
        <ContainerEvent>
          <BoxTitle>
            <Title>Ingressos anteriores</Title>
          </BoxTitle>
          {/* {
            userEvents.map((item, index) => (
              <BoxCardLargeEventPased key={index}>
                <CardLargeEvent eventData={item} />
              </BoxCardLargeEventPased>
            ))
          } */}
        </ContainerEvent>
      </ContentScroll>
    </Container>
  );
}



