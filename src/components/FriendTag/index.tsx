import React from 'react';
import { XMarkIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";

import { Button, Container, ContainerFriendInfo, ContainerFriendText, FriendImage, FriendName, FriendsCommon } from './styles';

interface FriendTagProps {
  image: string;
  name: string;
  commonFriends: number;
  close?: boolean;
  removeFriend?: () => void;
}

export function FriendTag({ image, name, commonFriends, close, removeFriend }: FriendTagProps) {
  return (
    <Container>
      <ContainerFriendInfo>
        <FriendImage source={{ uri: image }} />
        <ContainerFriendText>
          <FriendName>{name}</FriendName>
          <FriendsCommon>{commonFriends} amigos em comum</FriendsCommon>
        </ContainerFriendText>
      </ContainerFriendInfo>
      {
        close && close === true ? (
          <Button onPress={removeFriend}>
            <XMarkIcon width={20} height={20} color={useTheme().colors.text_inactive} />
          </Button>
        ) : null
      }
    </Container>
  );
}



