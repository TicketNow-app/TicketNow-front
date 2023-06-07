import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { UserPlusIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import {
  Container,
  ScrollContainer,
  ContainerImage,
  ContainerInfos,
  UserImage,
  UserName,
  BoxCardLargeEvent,
  BoxCardLargeEventPased,
  BoxTitle,
  ContainerEvent,
  ContentScroll,
  Title,
} from './styles';

import { ButtonFriendshipStatus } from '../../components/ButtonFriendshipStatus';
import { CardLargeEvent } from '../../components/CardLargeEvent';
import { Header } from '../../components/Header';
import { HeaderButton } from '../../components/HeaderButton';
import { useAuth } from '../../hooks/auth';

import { readFriendshipStatus } from '../../services/friendship';
import { getUser } from '../../services/user';

type FriendViewRouteProp = RouteProp<{ FriendView: { id: number } }, 'FriendView'>;

export function FriendView() {
  const route = useRoute<FriendViewRouteProp>();
  const { id } = route.params;
  const { user } = useAuth();

  const [friend, setFriend] = useState(null);
  const [friendshipStatus, setFriendshipStatus] = useState(null);

  useEffect(() => {
    async function loadFriend() {
      const response = await getUser(id.toString(), '123'); //TODO pass the token
      setFriend(response);
    }

    async function loadFriendshipStatus() {
      const response = await readFriendshipStatus(user.id, id);
      setFriendshipStatus(response);
      console.log(typeof response);
    }

    Promise.all([loadFriend(), loadFriendshipStatus()]);
  }, []);

  return (
    <Container>
      <Header buttonBack />
      <ScrollContainer>
        <ContainerInfos>
          <ContainerImage>
            <UserImage source={{ uri: friend?.image }} />
          </ContainerImage>
          <UserName>{friend?.name}</UserName>
          <ButtonFriendshipStatus status={friendshipStatus} />
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
