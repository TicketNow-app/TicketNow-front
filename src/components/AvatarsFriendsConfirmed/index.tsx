import React from "react";
import { UsersIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";

import { Avatar, AvatarMore, Container } from './styles';

interface AvatarsFriendsConfirmedProps {
  images: string[];
  avatarSize?: number;
}

export function AvatarsFriendsConfirmed({ images, avatarSize }: AvatarsFriendsConfirmedProps) {
  return (
    <Container activeOpacity={0.6}>
      {
        [
          images.map((image, index) => index < 3 && (
            <Avatar key={index} source={{ uri: image }} size={avatarSize} />
          )),
          images.length > 3 && (
            <AvatarMore size={avatarSize}>
              <UsersIcon size={avatarSize - 10} color={useTheme().colors.text_inactive} />
            </AvatarMore>
          )
        ]
      }
    </Container>
  );
}
