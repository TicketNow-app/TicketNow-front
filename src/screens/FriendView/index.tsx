import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { XCircleIcon } from 'react-native-heroicons/solid';
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

import { BottomModal } from '../../components/BottomModal';
import { ButtonFriendshipStatus } from '../../components/ButtonFriendshipStatus';
import { CardLargeEvent } from '../../components/CardLargeEvent';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/auth';

import { readFriendshipStatus, excludeFriend } from '../../services/friendship';
import { getUser } from '../../services/user';

type FriendViewRouteProp = RouteProp<{ FriendView: { id: number } }, 'FriendView'>;

export function FriendView() {
  const route = useRoute<FriendViewRouteProp>();
  const theme = useTheme();
  const { id } = route.params;
  const { user } = useAuth();

  const [friend, setFriend] = useState(null);
  const [friendshipStatus, setFriendshipStatus] = useState('');
  const [excludeFriendId, setExcludeFriendId] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function loadFriend() {
      const response = await getUser(id.toString(), '123'); //TODO: pass the token
      setFriend(response);
    }

    async function loadFriendshipStatus() {
      const response = await readFriendshipStatus(user.id, id);
      setFriendshipStatus(response);
    }

    Promise.all([loadFriend(), loadFriendshipStatus()]);
  }, []);

  function removeSolicitation() {
    excludeFriend(excludeFriendId);
    setModalVisible(false);
    setExcludeFriendId(null);
  }

  function excludeFriendConfirmation(id: number) {
    setExcludeFriendId(id);
    setModalVisible(true);
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Container>
      <Header buttonBack />
      <ScrollContainer>
        <ContainerInfos>
          <ContainerImage>
            <UserImage source={{ uri: friend?.image }} />
          </ContainerImage>
          <UserName>{friend?.name}</UserName>
          <ButtonFriendshipStatus
            status={friendshipStatus.accepted}
            handlePress={() => excludeFriendConfirmation(friendshipStatus.id)}
          />
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
      <BottomModal
        icon={<XCircleIcon size={70} color={theme.colors.text_inactive} />}
        text="Voce tem certeza que deseja cancelar esta solicitação de amizade?"
        leftButtonText="Cancelar"
        rightButtonText="Excluir"
        handleFunction={() => removeSolicitation()}
        setModalVisible={() => setModalVisible(false)}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </Container>
  );
}
