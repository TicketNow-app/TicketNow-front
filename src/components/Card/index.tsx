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
    <>
    {
      event ?
      (
        <CardSkeleton />
      )
      :
      (
    <Container activeOpacity={0.6} {...rest}>
      <Content>
        <Image source={{ uri: event.images[0].url }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
          locations={[0, 1]}
        />
        <ContainerText>
          <Date>
          {
            event.dateStart
            .split('-')
            .reverse()
            .join('/')
          }</Date>
          <Title>{event.name}</Title>
          <Description>{
            event?.id_place?.address
            .split(',')
            .slice(1)
          }</Description>
        </ContainerText>
      </Content>
    </Container>
      )
    }
    </>
  );
}
