import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, EllipsisVerticalIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import { ClientName, Container, ContainerDetails, ContainerFriends, ContainerIconInfo, ContainerQrCode, ContainerQrCodeObservation, ContainerTicket, ContainerTicketData, ContainerTicketImage, ContainerTicketInfo, ContainerTicketType, EventInfo, EventTitle, Header, LineInfo, LineInfoTitle, QrCodeObservation, QrCodeTag, TicketBottomInfos, TicketImage, TicketTopInfos, TicketType, TicketValue, TitleHeader } from './styles';

import { AvatarsFriendsConfirmed } from '../../components/AvatarsFriendsConfirmed';
import { HeaderButton } from '../../components/HeaderButton';

export function Ticket() {
  const navigation = useNavigation();

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
            <TicketImage source={{ uri: 'https://images.unsplash.com/photo-1542732351-fa2c82b0c746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80%201032w' }} />
          </ContainerTicketImage>
          <ContainerTicketInfo>
            <LineInfoTitle>
              <EventTitle>Solid | Halloween</EventTitle>
              <ContainerFriends>
                <AvatarsFriendsConfirmed images={['https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80', 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80', 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80', 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80']} avatarSize={26} />
              </ContainerFriends>
            </LineInfoTitle>
            <LineInfo>
              <ContainerIconInfo>
                <MapPinIcon size={20} color={useTheme().colors.text} />
                <EventInfo>Rua Tuyuti - Centro, Santos - SP, Brasil</EventInfo>
              </ContainerIconInfo>
            </LineInfo>
            <LineInfo>
              <ContainerIconInfo>
                <CalendarIcon size={20} color={useTheme().colors.text} />
                <EventInfo>Sex 22 de Out</EventInfo>
              </ContainerIconInfo>
              <ContainerIconInfo>
                <ClockIcon size={20} color={useTheme().colors.text} />
                <EventInfo>21:30 - 05:30</EventInfo>
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
                <TicketValue>1º Lote - R$ 100,00</TicketValue>
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
