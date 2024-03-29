import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ArrowLeftIcon,
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
  TicketImage,
  TicketTopInfos,
  TicketType,
  TicketValue,
} from './styles';

import { AvatarsFriendsConfirmed } from '../../components/AvatarsFriendsConfirmed';
import { Header } from '../../components/Header';
import { HeaderButton } from '../../components/HeaderButton';
import { readOrder } from '../../services/order';

type TicketRouteProp = RouteProp<{ Ticket: { id: number } }, 'Ticket'>;

export function Ticket() {
  const route = useRoute<TicketRouteProp>();
  const theme = useTheme();
  const { id } = route.params;

  const [order, setOrder]: any = useState(); //TODO: define response type

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
    <Container>
      <Header
        buttonBack
        title="Ingresso"
        buttonRight={
          <HeaderButton>
            <EllipsisVerticalIcon size={20} color={theme.colors.text} />
          </HeaderButton>
        }
      />
      <ContainerTicket>
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
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
                    'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
                    'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80',
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
                <QrCodeObservation>Apresente este código QR no local do evento.</QrCodeObservation>
              </ContainerQrCodeObservation>
            </ContainerDetails>
          </ContainerTicketData>
        </TicketBottomInfos>
      </ContainerTicket>
    </Container>
  );
}
