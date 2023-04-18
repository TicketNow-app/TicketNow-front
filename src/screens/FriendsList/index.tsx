import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";
import Modal from "react-native-modal";
import { StyleSheet, View } from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";

import { Container, ContainerNoSolicitations, GhostView, Header, MainTitle, NoSolicitationsSubtitle, NoSolicitationsTitle, DeleteSolicitationTitle, ScrollContainer, Section, SectionTitle, Button, ButtonContainer, ButtonText } from './styles';

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
        <View style={style.flexView}>
              <Modal
                onBackdropPress={() => setModalVisible(false)}
                onBackButtonPress={() => setModalVisible(false)}
                isVisible={isModalVisible}
                swipeDirection="down"
                onSwipeComplete={toggleModal}
                animationIn="bounceInUp"
                animationOut="bounceOutDown"
                animationInTiming={900}
                animationOutTiming={500}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={500}
                style={style.modal}
              >
                <View style={style.modalContent}>
                  <View style={style.center}>
                    <XCircleIcon size={70} color={useTheme().colors.text_inactive} />
                    <DeleteSolicitationTitle>Voce tem certeza que deseja excluir esta solicitação de amizade? </DeleteSolicitationTitle>
                    <ButtonContainer>
                      <Button onPress={() => setModalVisible(false)}>
                        <ButtonText>Cancelar</ButtonText>
                      </Button>
                      <Button onPress={() => removeSolicitation(1)}>
                        <ButtonText>Excluir</ButtonText>
                      </Button>
                    </ButtonContainer>
                  </View>
                </View>
              </Modal>
            </View>
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

const style = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#161616",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 300,
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  text: {
    color: "#bbb",
    fontSize: 24,
    marginTop: 100,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
});



