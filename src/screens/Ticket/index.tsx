import React, { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, EllipsisVerticalIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import { ClientName, Container, ContainerDetails, ContainerFriends, ContainerIconInfo, ContainerQrCode, ContainerQrCodeObservation, ContainerTicket, ContainerTicketData, ContainerTicketImage, ContainerTicketInfo, ContainerTicketType, EventInfo, EventTitle, Header, LineInfo, LineInfoTitle, QrCodeObservation, QrCodeTag, TicketBottomInfos, TicketImage, TicketTopInfos, TicketType, TicketValue, TitleHeader } from './styles';

import { readTicket } from '../../helpers/requests/ticket';

import { AvatarsFriendsConfirmed } from '../../components/AvatarsFriendsConfirmed';
import { HeaderButton } from '../../components/HeaderButton';

type TicketRouteProp = RouteProp<{ Ticket: { id: number } }, 'Ticket'>;

export function Ticket() {
  const navigation = useNavigation();
  const route = useRoute<TicketRouteProp>();
  const { id } = route.params;

  const [ticket, setTicket]: any = useState(); //TODO: define response type

  useEffect(() => {
    async function loadTicket() {
      const response = await readTicket(id);

      setTicket(response);
    }

    loadTicket();
  }, []);


  function GoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <HeaderButton onPress={GoBack}>
          <ArrowLeftIcon size={20} color={useTheme().colors.text} />
        </HeaderButton>
        <TitleHeader>Ingresso</TitleHeader>
        <HeaderButton>
          <EllipsisVerticalIcon size={20} color={useTheme().colors.text} />
        </HeaderButton>
      </Header>
      <ContainerTicket>
        <TicketTopInfos>
          <ContainerTicketImage>
            <TicketImage source={{ uri: ticket?.id_event?.images[0].url }} />
          </ContainerTicketImage>
          <ContainerTicketInfo>
            <LineInfoTitle>
              <EventTitle>{ticket?.id_event?.name}</EventTitle>
              <ContainerFriends>
                <AvatarsFriendsConfirmed images={['https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80', 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80', 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80', 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80']} avatarSize={26} />
              </ContainerFriends>
            </LineInfoTitle>
            <LineInfo>
              <ContainerIconInfo>
                <MapPinIcon size={20} color={useTheme().colors.text} />
                <EventInfo>{ticket?.id_event?.id_place.address}</EventInfo>
              </ContainerIconInfo>
            </LineInfo>
            <LineInfo>
              <ContainerIconInfo>
                <CalendarIcon size={20} color={useTheme().colors.text} />
                <EventInfo>{
                ticket?.id_event?.dateStart
                  .split('-')
                  .reverse()
                  .join('/')
                }</EventInfo>
              </ContainerIconInfo>
              <ContainerIconInfo>
                <ClockIcon size={20} color={useTheme().colors.text} />
                <EventInfo>{ticket?.id_event?.hourStart.slice(0, 5) + ' - ' + ticket?.id_event?.hourFinish.slice(0, 5)}</EventInfo>
              </ContainerIconInfo>
            </LineInfo>
          </ContainerTicketInfo>
        </TicketTopInfos>
        <TicketBottomInfos>
          <ClientName>Laura dos Santos Ribeiro</ClientName>
          <ContainerTicketData>
            <ContainerQrCode>
              <QrCodeTag value='https://www.google.com.br/' size={120} backgroundColor='transparent' color={useTheme().colors.text} />
            </ContainerQrCode>
            <ContainerDetails>
              <ContainerTicketType>
                <TicketType>Area VIP</TicketType>
                <TicketValue>
                  1º Lote -
                  R$ {ticket?.price.replace('.', ',')}
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
