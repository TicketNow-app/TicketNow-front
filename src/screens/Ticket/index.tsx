import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  CalendarIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
} from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import {
  ClientName,
  Container,
  ContainerDetails,
  ContainerFriends,
  ContainerIconInfo,
  ContainerQrCode,
  ContainerQrCodeObservation,
  ContainerTicket,
  ContainerTicketData,
  ContainerTicketImage,
  ContainerTicketInfo,
  ContainerTicketType,
  EventInfo,
  EventTitle,
  LineInfo,
  LineInfoTitle,
  QrCodeObservation,
  QrCodeTag,
  TicketBottomInfos,
  TicketComponent,
  TicketImage,
  TicketTopInfos,
  TicketType,
  TicketValue,
} from './styles';

import { AvatarsFriendsConfirmed } from '../../components/AvatarsFriendsConfirmed';
import { Header } from '../../components/Header';
import { HeaderButton } from '../../components/HeaderButton';
import { ModalShareTicket } from '../../components/ModalShareTicket';
import { readOrder } from '../../services/order';

type TicketRouteProp = RouteProp<{ Ticket: { id: number } }, 'Ticket'>;

export function Ticket() {
  const route = useRoute<TicketRouteProp>();
  const theme = useTheme();
  const { id } = route.params;

  const [order, setOrder]: any = useState(); //TODO: define response type
  const [modalShareTicketVisible, setModalShareTicketVisible] = useState(false);

  useEffect(() => {
    async function loadTicket() {
      const response = await readOrder(id);

      setOrder(response);
    }

    loadTicket();
  }, []);

  if (!order) {
    return null; //TODO: Add skeleton
  }

  return (
    <>
      {modalShareTicketVisible && (
        <ModalShareTicket closeModal={() => setModalShareTicketVisible(false)} />
      )}
      <Container>
        <Header
          buttonBack
          title="Ingresso"
          buttonRight={
            <HeaderButton onPress={() => setModalShareTicketVisible(true)}>
              <EllipsisVerticalIcon size={20} color={theme.colors.text} />
            </HeaderButton>
          }
        />
        <ContainerTicket>
          <TicketComponent />
          <TicketTopInfos>
            <ContainerTicketImage>
              <TicketImage source={{ uri: order.id_ticket.id_event.images[0].url }} />
            </ContainerTicketImage>
            <ContainerTicketInfo>
              <LineInfoTitle>
                <EventTitle>{order.id_ticket.id_event.name}</EventTitle>
                <ContainerFriends>
                  <AvatarsFriendsConfirmed
                    images={[
                      'https://images.unsplash.com/photo-1598539962077-e4185f37104f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
                      'https://images.unsplash.com/photo-1485463598028-44d6c47bf23f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',
                      'https://images.unsplash.com/photo-1631902112544-2271267abb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80',
                    ]}
                    avatarSize={26}
                  />
                </ContainerFriends>
              </LineInfoTitle>
              <LineInfo>
                <ContainerIconInfo>
                  <MapPinIcon size={20} color={theme.colors.text} />
                  <EventInfo>
                    {order.id_ticket.id_event.id_place.address +
                      ' - ' +
                      order.id_ticket.id_event.id_place.district +
                      ', ' +
                      order.id_ticket.id_event.id_place.id_city.name +
                      ' - ' +
                      order.id_ticket.id_event.id_place.id_city.id_state.name}
                  </EventInfo>
                </ContainerIconInfo>
              </LineInfo>
              <LineInfo>
                <ContainerIconInfo>
                  <CalendarIcon size={20} color={theme.colors.text} />
                  <EventInfo>
                    {order.id_ticket.id_event.dateStart.split('-').reverse().join('/')}
                  </EventInfo>
                </ContainerIconInfo>
                <ContainerIconInfo>
                  <ClockIcon size={20} color={theme.colors.text} />
                  <EventInfo>
                    {order.id_ticket.id_event.hourStart.slice(0, 5) +
                      ' - ' +
                      order.id_ticket.id_event.hourFinish.slice(0, 5)}
                  </EventInfo>
                </ContainerIconInfo>
              </LineInfo>
            </ContainerTicketInfo>
          </TicketTopInfos>
          <TicketBottomInfos>
            <ClientName>Laura dos Santos Ribeiro</ClientName>
            <ContainerTicketData>
              <ContainerQrCode>
                <QrCodeTag
                  value={order.code}
                  size={120}
                  backgroundColor="transparent"
                  color={theme.colors.text}
                />
              </ContainerQrCode>
              <ContainerDetails>
                <ContainerTicketType>
                  <TicketType>{order.id_ticket.id_category_ticket?.description}</TicketType>
                  <TicketValue>
                    {order.id_ticket.id_category_ticket.name} - R${' '}
                    {order.id_ticket.price.replace('.', ',')}
                  </TicketValue>
                </ContainerTicketType>
                <ContainerQrCodeObservation>
                  <QrCodeObservation>
                    Apresente este código QR no local do evento.
                  </QrCodeObservation>
                </ContainerQrCodeObservation>
              </ContainerDetails>
            </ContainerTicketData>
          </TicketBottomInfos>
        </ContainerTicket>
      </Container>
    </>
  );
}
