import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";
import { XCircleIcon } from "react-native-heroicons/solid";

import { useAuth } from '../../hooks/auth';

import { Container, ContainerNoSolicitations, GhostView, Header, MainTitle, NoSolicitationsSubtitle, NoSolicitationsTitle, ScrollContainer, Section, SectionTitle } from './styles';

import { readFriends } from '../../helpers/requests/friendship';

import { FriendTag } from '../../components/FriendTag';
import { HeaderButton } from '../../components/HeaderButton';
import { BottomModal } from '../../components/BottomModal';

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

export function FriendsList() {
  const [solicitations, setSolicitations] = useState(solicitationsData);
  const [friends, setFriends] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    async function getFriends() {
      //convert user.id to number
      const friends = await readFriends(1)

      setFriends(friends);
    }

    getFriends();
  }, []);

  function removeSolicitation(index: number) {
    setSolicitations(solicitations.filter((_, i) => i !== index));
    setModalVisible(false)
  }

  function addFriend(index: number) {
    setFriends([...friends, solicitations[index]]);
    removeSolicitation(index);
  }

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
          {
            solicitations && solicitations.length > 0 ? (
              solicitations.map((solicitation, index) => (
                <FriendTag
                  key={index}
                  image={solicitation.image}
                  name={solicitation.name}
                  commonFriends={solicitation.commonFriends}
                  close={solicitation.close}
                  removeFriend={() => toggleModal()}
                  addFriend={() => addFriend(index)}
                />
              ))
            ) : (
              <ContainerNoSolicitations>
                <NoSolicitationsTitle>Não há solicitações</NoSolicitationsTitle>
                <NoSolicitationsSubtitle>Sabemos que você é popular, mas não há nenhum pedido de amizade enviado recentemente</NoSolicitationsSubtitle>
              </ContainerNoSolicitations>
            )
          }
        </Section>
          <BottomModal icon={<XCircleIcon size={70} color={useTheme().colors.text_inactive} />} text="Voce tem certeza que deseja excluir esta solicitação de amizade?" leftButtonText="Cancelar" rightButtonText="Excluir" handleFunction={() => removeSolicitation(0)} setModalVisible={() => setModalVisible(false)} isModalVisible={isModalVisible} toggleModal={toggleModal} />
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



