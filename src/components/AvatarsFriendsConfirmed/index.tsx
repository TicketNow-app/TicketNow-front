import React from "react";
import { UsersIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";

import { Avatar, AvatarMore, Container } from './styles';

interface AvatarsFriendsConfirmedProps {
  images: string[];
}

export function AvatarsFriendsConfirmed({ images }: AvatarsFriendsConfirmedProps) {
  return (
    <Container activeOpacity={0.6}>
      {
        [
          images.map((image, index) => index < 3 && (
            <Avatar key={index} source={{ uri: image }} />
          )),
          images.length > 3 && (
            <AvatarMore>
              <UsersIcon size={24} color={useTheme().colors.text_inactive} />
            </AvatarMore>
          )
        ]
      }
    </Container>
  );
}
