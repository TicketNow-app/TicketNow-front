import React from 'react';
import { UserPlusIcon } from 'react-native-heroicons/outline';
import { useTheme } from 'styled-components';

import { ButtonFollow, TextButton } from './styles';

export function ButtonFriendshipStatus(status: string) {
  const theme = useTheme();

  return (
    <ButtonFollow>
      <UserPlusIcon size={20} color={theme.colors.text} />
      <TextButton>{status}</TextButton>
    </ButtonFollow>
  );
}
