import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import {
  BoxCardLargeEvent,
  BoxCardLargeEventPased,
  BoxTitle,
  Container,
  ContainerEvent,
  ContentScroll,
  Title,
} from './styles';

import { CardLargeEvent } from '../../components/CardLargeEvent';
import { Header } from '../../components/Header';

import { getFinishedOrders, getOrders } from '../../helpers/ordersHelper';
import { useAuth } from '../../hooks/auth';
import { readOrders } from '../../services/order';

export function TicketsList() {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]); //TODO: define response type
  const [finishedOrders, setFinishedOrders] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    async function loadOrders() {
      const response = await readOrders(user.id);
      const finishedOrders = getFinishedOrders(response);
      const incomingOrders = getOrders(response);

      setOrders(incomingOrders);
      setFinishedOrders(finishedOrders);
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
          {orders.map(order => (
            <BoxCardLargeEvent key={order.id}>
              <CardLargeEvent
                image={order.id_ticket.id_event.images[0].url}
                title={order.id_ticket.id_event.name}
                address={order.id_ticket.id_event.id_place.address}
                date={order.id_ticket.id_event.dateStart}
                onPress={() => handleNavigateToTicket(order.id)}
              />
            </BoxCardLargeEvent>
          ))}
        </ContainerEvent>
        <ContainerEvent>
          <BoxTitle>
            <Title>Ingressos anteriores</Title>
          </BoxTitle>
          {finishedOrders.map(order => (
            <BoxCardLargeEventPased key={order.id}>
              <CardLargeEvent
                image={order.id_ticket.id_event.images[0].url}
                title={order.id_ticket.id_event.name}
                address={order.id_ticket.id_event.id_place.address}
                date={order.id_ticket.id_event.dateStart}
                onPress={() => handleNavigateToTicket(order.id)}
              />
            </BoxCardLargeEventPased>
          ))}
        </ContainerEvent>
      </ContentScroll>
    </Container>
  );
}
