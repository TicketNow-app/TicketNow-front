import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";

import { Container, GhostView, Header, MainTitle, ScrollContainer, Section, SectionTitle } from './styles';

import { FriendTag } from '../../components/FriendTag';
import { HeaderButton } from '../../components/HeaderButton';

const solicitationsData = [
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: true
  },
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: true
  },
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: true
  },
];

const friendsData = [
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: false
  },
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: false
  },
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: false
  },
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: false
  },
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: false
  },
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: false
  },
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: false
  },
  {
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Nome do amigo",
    commonFriends: 6,
    close: false
  },
];

export function FriendsList() {
  const [solicitations, setSolicitations] = useState(solicitationsData);
  const [friends, setFriends] = useState(friendsData);

  function removeSolicitation(index: number) {
    setSolicitations(solicitations.filter((_, i) => i !== index));
  }

  const navigation = useNavigation();

  function GoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <ScrollContainer>
        <Header>
          <HeaderButton onPress={GoBack}>
            <ArrowLeftIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>
          <MainTitle>Amigos</MainTitle>
          <GhostView />
        </Header>
        <Section>
          <SectionTitle>Solicitações</SectionTitle>
          {solicitations.map((solicitation, index) => (
            <FriendTag
              key={index}
              image={solicitation.image}
              name={solicitation.name}
              commonFriends={solicitation.commonFriends}
              close={solicitation.close}
              removeFriend={() => removeSolicitation(index)}
            />
          ))}
        </Section>
        <Section>
          <SectionTitle>Meus amigos</SectionTitle>
          {friends.map((friend, index) => (
            <FriendTag
              key={index}
              image={friend.image}
              name={friend.name}
              commonFriends={friend.commonFriends}
              close={friend.close}
            />
          ))}
        </Section>
      </ScrollContainer>
    </Container>
  );
}



