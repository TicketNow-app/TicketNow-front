import React from 'react';
import { UsersIcon } from 'react-native-heroicons/outline';
import { useTheme } from 'styled-components';

import { Avatar, AvatarMore, Container } from './styles';

interface AvatarsFriendsConfirmedProps {
  images: string[];
  avatarSize?: number;
}

export function AvatarsFriendsConfirmed({ images, avatarSize }: AvatarsFriendsConfirmedProps) {
  const theme = useTheme();

  return (
    <Container activeOpacity={0.6}>
      {images.map((image, index) => {
        if (index < 3) {
          return <Avatar key={index} source={{ uri: image }} size={avatarSize} />;
        }
        if (index === 3) {
          return (
            <AvatarMore key={index} size={avatarSize}>
              <UsersIcon size={avatarSize - 10} color={theme.colors.text_inactive} />
            </AvatarMore>
          );
        }
        return null;
      })}
    </Container>
  );
}
