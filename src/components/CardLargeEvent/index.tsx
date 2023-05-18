import React from "react";

import { Container, ContainerFriends, ContainerText, Content, Date, Description, FriendImage, Gradient, Image, Title } from './styles';

import { CardLargeEventSkeleton } from "../CardLargeEvent/skeleton";

interface FriendsProps {
  image: string;
  name: string;
}

interface UserProps {
  id_user: number;
  im_user: string;
  nm_user: string;
  cd_cpf: string;
  dt_birth: string;
  ds_category_user: string;
  cd_coupon: string;
  dt_created_at: string;
  dt_deleted_at: string;
}

interface CardLargeEventProps {
  eventData: {
    imageEvent: string;
    nm_event: string;
    ds_address: string;
    dt_start_event: string;
    friendship: any; //TODO: create friendship interface
  },
  onPress: () => void;
}

export function CardLargeEvent({ eventData, onPress }: CardLargeEventProps) {
  return (
    <>
      {
        eventsRecent ?
        (
          <CardLargeEventSkeleton />
        )
        :
        (
          <Container activeOpacity={0.6} onPress={onPress}>
            <Content>
              <Image source={{ uri: eventData ? eventData.imageEvent[0] : '' }} />
              <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
                locations={[0.4, 1]}
              />
              <ContainerFriends activeOpacity={0.6}>
                {
                  //render only 3 friends
                  eventData?.friendship?.map((friend) => (
                    <FriendImage key={friend.friendInfo.id_user} source={{ uri: friend.friendInfo.im_user }} />
                  ))
                }
              </ContainerFriends>
              <ContainerText>
                <Date>{eventData ? eventData.dt_start_event : ''}</Date>
                <Title>{eventData ? eventData.nm_event : ''}</Title>
                <Description>{eventData ? eventData.ds_address : ''}</Description>
              </ContainerText>
            </Content>
          </Container>
        )
      }
    </>
  );
}
