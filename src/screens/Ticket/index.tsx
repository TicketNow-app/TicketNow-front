import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { BoxCardLargeEvent, BoxCardLargeEventPased, BoxTitle, Container, ContainerEvent, ContentScroll, Header, Title } from './styles';

import { CardLargeEvent } from '../../components/CardLargeEvent';
import { HeaderButton } from '../../components/HeaderButton';

import { userEvents } from '../../mock';

export function Ticket() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={20} color={useTheme().colors.text} />
        </HeaderButton>
      </Header>
      <ContentScroll>
        <ContainerEvent>
          <BoxTitle>
            <Title>Ingressos atuais</Title>
          </BoxTitle>
          {
            userEvents.map((item, index) => (
              <BoxCardLargeEvent key={index}>
                <CardLargeEvent eventsRecent={item} />
              </BoxCardLargeEvent>
            ))
          }
        </ContainerEvent>
        <ContainerEvent>
          <BoxTitle>
            <Title>Ingressos anteriores</Title>
          </BoxTitle>
          {
            userEvents.map((item, index) => (
              <BoxCardLargeEventPased key={index}>
                <CardLargeEvent eventsRecent={item} />
              </BoxCardLargeEventPased>
            ))
          }
        </ContainerEvent>
      </ContentScroll>
    </Container>
  );
}



