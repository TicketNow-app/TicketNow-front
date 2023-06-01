import React from 'react';
import { XMarkIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from 'react-native';

import { ButtonAdd, ButtonAddText, ButtonRemove, Container, ContainerFriendActions, ContainerFriendInfo, ContainerFriendText, FriendImage, FriendName, FriendsCommon } from './styles';


interface FriendTagProps extends TouchableOpacityProps {
  image: string;
  name: string;
  commonFriends: number;
  close?: boolean;
  addFriend?: () => void;
  removeFriend?: () => void;
}

export function FriendTag({ image, name, commonFriends, close, addFriend, removeFriend, ...rest }: FriendTagProps) {
  return (
    <Container {...rest}>
      <ContainerFriendInfo>
        <FriendImage source={{ uri: image }} />
        <ContainerFriendText>
          <FriendName>{name}</FriendName>
          <FriendsCommon>{commonFriends} amigos em comum</FriendsCommon>
        </ContainerFriendText>
      </ContainerFriendInfo>
      {
        close && close === true ? (
          <ContainerFriendActions>
            <ButtonAdd onPress={addFriend}>
              <ButtonAddText>Adicionar</ButtonAddText>
            </ButtonAdd>
            <ButtonRemove onPress={removeFriend}>
              <XMarkIcon width={20} height={20} color={useTheme().colors.text_inactive} />
            </ButtonRemove>
          </ContainerFriendActions>
        ) : null
      }
    </Container>
  );
}



