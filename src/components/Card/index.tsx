import React from "react";

import { Container, ContainerText, Content, Date, Description, Gradient, Image, Title } from './styles';

// interface CardProps {
//   event: {
//     image: string;
//     date: string;
//     title: string;
//     location: string;
//   }
// }

export function Card({ event, ...rest}) {
  return (
    <Container activeOpacity={0.6} {...rest}>
      <Content>
        <Image source={{ uri: event.im_event }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
          locations={[0, 1]}
        />
        <ContainerText>
          <Date>
          {
            event.dt_start_event
            .split('-')
            .reverse()
            .join('/')
          }</Date>
          <Title>{event.nm_event}</Title>
          <Description>{
            event.ds_address
            .split(',')
            .slice(1)
          }</Description>
        </ContainerText>
      </Content>
    </Container>
  );
}
