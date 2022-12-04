import React from "react";
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Image, Gradient, ContainerText, Date, Title, Description } from './styles';

interface CardProps {
  event: {
    image: string;
    date: string;
    title: string;
    location: string;
  }
}

export function Card({ event }: CardProps) {
  const navigation = useNavigation();

  function OpenEvent() {
    navigation.navigate('Event');
  }

  return (
    <Container activeOpacity={0.6} onPress={OpenEvent}>
      <Content>
        <Image source={{ uri: event.image }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
          locations={[0, 1]}
        />
        <ContainerText>
          <Date>{event.date}</Date>
          <Title>{event.title}</Title>
          <Description>{event.location}</Description>
        </ContainerText>
      </Content>
    </Container>
  );
}
