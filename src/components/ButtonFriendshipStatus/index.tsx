import React from 'react';
import { UserPlusIcon, UserMinusIcon, UsersIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import { ButtonFollow, TextButton } from './styles';

interface ButtonFriendshipStatusProps {
  status: string;
  handlePress?: (friendshipId: number) => void;
}

export function ButtonFriendshipStatus({ status, handlePress }: ButtonFriendshipStatusProps) {
  const theme = useTheme();
  console.log(status);
  return (
    <>
      {status === null ? (
        <ButtonFollow onPress={handlePress}>
          <UserMinusIcon size={20} color={theme.colors.text} />
          <TextButton>Pendente</TextButton>
        </ButtonFollow>
      ) : status === 'accepted' ? (
        <ButtonFollow>
          <UsersIcon size={20} color={theme.colors.text} />
          <TextButton>Amigos</TextButton>
        </ButtonFollow>
      ) : (
        <ButtonFollow>
          <UserPlusIcon size={20} color={theme.colors.text} />
          <TextButton>Enviar Solicitação</TextButton>
        </ButtonFollow>
      )}
    </>
  );
}
