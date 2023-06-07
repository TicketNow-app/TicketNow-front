import React, { useState, useEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";
import { UserPlusIcon } from "react-native-heroicons/solid";

import { Container, ScrollContainer, ButtonFollow, TextButton, ContainerImage, ContainerInfos, UserImage, UserName, BoxCardLargeEvent, BoxCardLargeEventPased, BoxTitle, ContainerEvent, ContentScroll, Title } from './styles';

import { Header } from '../../components/Header';
import { HeaderButton } from '../../components/HeaderButton';
import { CardLargeEvent } from '../../components/CardLargeEvent';

import { getUser } from '../../services/user';

type FriendViewRouteProp = RouteProp<{ FriendView: { id: number } }, 'FriendView'>;

export function FriendView() {
  const route = useRoute<FriendViewRouteProp>();
  const { id } = route.params;

  const [friend, setFriend] = useState(null);

  useEffect(() => {
    async function loadFriend() {
      const response = await getUser(id.toString(), '123'); //TODO pass the token
      setFriend(response);
      console.log(response);
    }

    loadFriend();
  }, []);

  return (
    <Container>
      <Header
        buttonBack
      />
      <ScrollContainer>
        <ContainerInfos>
        <ContainerImage>
          <UserImage source={{ uri: friend?.image }} />
        </ContainerImage>
        <UserName>{friend?.name}</UserName>
            <ButtonFollow>
              <UserPlusIcon size={20} color={useTheme().colors.text} />
              <TextButton>
                Seguir
              </TextButton>
            </ButtonFollow>
      </ContainerInfos>
      <ContentScroll>
        <ContainerEvent>
          <BoxTitle>
            <Title>Eventos em comum</Title>
          </BoxTitle>
          {/* {
            userEvents.map((item, index) => (
              <BoxCardLargeEvent key={index}>
                <CardLargeEvent eventsRecent={item} eventData={item} />
              </BoxCardLargeEvent>
            ))
          } */}
        </ContainerEvent>
        <ContainerEvent>
          <BoxTitle>
            <Title>Eventos anteriores</Title>
          </BoxTitle>
          {/* {
            userEvents.map((item, index) => (
              <BoxCardLargeEventPased key={index}>
                <CardLargeEvent eventsRecent={item} />
              </BoxCardLargeEventPased>
            ))
          } */}
        </ContainerEvent>
      </ContentScroll>
      </ScrollContainer>
    </Container>
  );
}



