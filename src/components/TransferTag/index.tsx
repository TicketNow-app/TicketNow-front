import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ArrowsRightLeftIcon } from 'react-native-heroicons/outline';
import { useTheme } from 'styled-components';

import {
  ButtonAdd,
  ButtonAddText,
  Container,
  ContainerFriendActions,
  ContainerTransferInfo,
  ContainerFriendText,
  FriendImage,
  FriendName,
  FriendsCommon,
} from './styles';

interface TransferTagProps extends TouchableOpacityProps {
  image: string;
  name: string;
  textButton?: string;
  commonFriends: number;
  close?: boolean;
  transferTicket?: () => void;
}

export function TransferTag({
  image,
  name,
  textButton,
  commonFriends,
  close,
  transferTicket,
  ...rest
}: TransferTagProps) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <ContainerTransferInfo>
        <FriendImage source={{ uri: image }} />
        <ContainerFriendText>
          <FriendName>{name}</FriendName>
          <FriendsCommon>{commonFriends} amigos em comum</FriendsCommon>
        </ContainerFriendText>
      </ContainerTransferInfo>
      {textButton ? (
        <ContainerFriendActions>
          <ButtonAdd onPress={transferTicket}>
            <ArrowsRightLeftIcon size={20} color={theme.colors.base} />
            <ButtonAddText>Transferir</ButtonAddText>
          </ButtonAdd>
        </ContainerFriendActions>
      ) : null}
    </Container>
  );
}
