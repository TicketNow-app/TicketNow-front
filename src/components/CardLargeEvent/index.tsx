import React from "react";
import { Container, Content, Image, Gradient, ContainerFriends, FriendImage, ContainerText, Date, Title, Description } from './styles';

interface FriendsProps {
  image: string;
  name: string;
}

interface CardLargeEventProps {
  eventsRecent: {
    image: string;
    title: string;
    location: string;
    date: string;
    friendsConfirmed: FriendsProps[];
  }
}

export function CardLargeEvent({ eventsRecent }: CardLargeEventProps) {
  return (
    <Container activeOpacity={0.6}>
      <Content>
        <Image source={{ uri: eventsRecent.image }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          locations={[0.4, 1]}
        />
        <ContainerFriends activeOpacity={0.6}>
          {
            //render only 3 friends
            eventsRecent.friendsConfirmed.slice(0, 3).map((friend, index) => (
              <FriendImage key={index} source={{ uri: friend.image }} />
            ))
          }
        </ContainerFriends>
        <ContainerText>
          <Date>{eventsRecent.date}</Date>
          <Title>{eventsRecent.title}</Title>
          <Description>{eventsRecent.location}</Description>
        </ContainerText>
      </Content>
    </Container>
  );
}
