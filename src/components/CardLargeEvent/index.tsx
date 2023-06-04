import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, ContainerFriends, ContainerText, Content, Date, Description, FriendImage, Gradient, Image, Title } from './styles';

interface CardLargeEventProps extends TouchableOpacityProps {
  image: string;
  friends?: string[];
  title: string;
  address: string;
  date: string;
}

export function CardLargeEvent({ image, friends, title, address, date, ...rest }: CardLargeEventProps) {
  return (
    <Container activeOpacity={0.6} {...rest}>
      <Content>
        <Image source={{ uri: image }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          locations={[0.4, 1]}
        />
        <ContainerFriends activeOpacity={0.6}>
          {/* {
            //render only 3 friends
            eventData?.friendship?.map((friend) => (
              <FriendImage key={friend.friendInfo.id_user} source={{ uri: friend.friendInfo.im_user }} />
            ))
          } */}
        </ContainerFriends>
        <ContainerText>
          <Date>
            {date.split('-')
            .reverse()
            .join('/')}
          </Date>
          <Title>{title}</Title>
          <Description>{address}</Description>
        </ContainerText>
      </Content>
    </Container>
  );
}
