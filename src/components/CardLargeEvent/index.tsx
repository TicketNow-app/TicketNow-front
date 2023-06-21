import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ContainerFriends,
  ContainerText,
  Content,
  Date,
  Description,
  FriendImage,
  Gradient,
  Image,
  Title,
} from './styles';

interface CardLargeEventProps extends TouchableOpacityProps {
  image: string;
  friends?: string[];
  title: string;
  address: string;
  date: string;
}

const eventData = {
  friendship: [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1598539962077-e4185f37104f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1485463598028-44d6c47bf23f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1631902112544-2271267abb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
  ],
};

export function CardLargeEvent({
  image,
  friends,
  title,
  address,
  date,
  ...rest
}: CardLargeEventProps) {
  return (
    <Container activeOpacity={0.6} {...rest}>
      <Content>
        <Image source={{ uri: image }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']} locations={[0.4, 1]} />
        <ContainerFriends activeOpacity={0.6}>
          {eventData.friendship.map(friend => (
            <FriendImage key={friend.id} source={{ uri: friend.image }} />
          ))}
        </ContainerFriends>
        <ContainerText>
          <Date>{date.split('-').reverse().join('/')}</Date>
          <Title>{title}</Title>
          <Description>{address}</Description>
        </ContainerText>
      </Content>
    </Container>
  );
}
