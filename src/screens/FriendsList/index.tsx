import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import {
  Container,
  ContainerNoSolicitations,
  ContainerSearch,
  ContainerUsers,
  GhostView,
  NoSolicitationsSubtitle,
  NoSolicitationsTitle,
  ScrollContainer,
  Section,
  SectionTitle,
} from './styles';

import { BottomModal } from '../../components/BottomModal';
import { InputForm } from '../../components/Form/InputForm';
import { FriendTag } from '../../components/FriendTag';
import { Header } from '../../components/Header';

import { useAuth } from '../../hooks/auth';

import {
  readFriends,
  readPendingFriendSolicitations,
  excludeFriend,
} from '../../services/friendship';
import { getAllUsers } from '../../services/user';

export function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [pendingSolicitations, setPendingSolicitations] = useState([]);
  const [excludeFriendId, setExcludeFriendId] = useState(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [findedUsers, setFindedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const theme = useTheme();
  const { user } = useAuth();

  const { control, setValue } = useForm();

  useEffect(() => {
    async function pendingFriendSolicitations() {
      const pendingFriendSolicitations = await readPendingFriendSolicitations(user.id);
      setPendingSolicitations(pendingFriendSolicitations);
    }

    async function loadFriends() {
      const friends = await readFriends(user.id);
      setFriends(friends);
    }

    Promise.all([pendingFriendSolicitations(), loadFriends()]);
  }, []);

  // useEffect(() => {
  //   filterUsers({ search: '' }); // Chama a função filterUsers inicialmente com uma string vazia
  // }, [users]);

  function removeSolicitation() {
    excludeFriend(excludeFriendId);
    setModalVisible(false);
    setExcludeFriendId(null);
  }

  function excludeFriendConfirmation(id: number) {
    setExcludeFriendId(id);
    setModalVisible(true);
  }

  async function loadUsers() {
    setSearchVisible(true);
    const users = await getAllUsers();
    setUsers(users);
  }

  function filterUsers(data: any) {
    if (data.search === '') {
      setFindedUsers([]);
      return;
    }

    const filteredUsers = users.filter(user => user.name.includes(data.search));
    setFindedUsers(filteredUsers);
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();

  function handleGoToFriend(id: number) {
    navigation.navigate('FriendView', { id });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <ScrollContainer>
          <Header buttonBack title="Amigos" buttonRight={<GhostView />} />
          <ContainerSearch>
            <InputForm
              name="search"
              placeholder="Pesquisar"
              control={control}
              onFocus={loadUsers}
              onChangeText={text => {
                setValue('search', text); // Atualiza o valor do campo de busca
                filterUsers({ search: text }); // Chama a função de filtro imediatamente
              }}
            />
            {searchVisible && (
              <ContainerUsers>
                {findedUsers && findedUsers.length > 0
                  ? findedUsers.map((user, index) => (
                      <FriendTag
                        key={index}
                        image={user.image}
                        name={user.name}
                        close={user.close}
                        onPress={() => handleGoToFriend(user.id)}
                      />
                    ))
                  : users.map((user, index) => (
                      <FriendTag
                        key={index}
                        image={user.image}
                        name={user.name}
                        close={user.close}
                        onPress={() => handleGoToFriend(user.id)}
                      />
                    ))}
              </ContainerUsers>
            )}
          </ContainerSearch>
          <Section>
            <SectionTitle>Solicitações</SectionTitle>
            {pendingSolicitations && pendingSolicitations.length > 0 ? (
              pendingSolicitations.map(solicitation => (
                <FriendTag
                  key={solicitation.id}
                  image={solicitation.guest?.image ? solicitation.guest.image : null}
                  name={solicitation.guest?.name ? solicitation.guest.name : null}
                  commonFriends={2}
                  close
                  removeFriend={() => excludeFriendConfirmation(solicitation.id)}
                  onPress={() => handleGoToFriend(solicitation.guest.id)}
                  // addFriend={() => addFriend(index)}
                />
              ))
            ) : (
              <ContainerNoSolicitations>
                <NoSolicitationsTitle>Não há solicitações</NoSolicitationsTitle>
                <NoSolicitationsSubtitle>
                  Sabemos que você é popular, mas não há nenhum pedido de amizade enviado
                  recentemente
                </NoSolicitationsSubtitle>
              </ContainerNoSolicitations>
            )}
          </Section>
          <BottomModal
            icon={<XCircleIcon size={70} color={theme.colors.text_inactive} />}
            text="Voce tem certeza que deseja excluir esta solicitação de amizade?"
            leftButtonText="Cancelar"
            rightButtonText="Excluir"
            handleFunction={() => removeSolicitation()}
            setModalVisible={() => setModalVisible(false)}
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
          />
          <Section>
            <SectionTitle>Meus amigos</SectionTitle>
            {friends.map((friend, index) => (
              <FriendTag
                key={index}
                image={friend.image}
                name={friend.name}
                commonFriends={friend.commonFriends}
                close={friend.close}
                onPress={() => handleGoToFriend(friend.id)}
              />
            ))}
          </Section>
        </ScrollContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
