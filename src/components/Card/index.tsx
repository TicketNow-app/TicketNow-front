import React from "react";
import { Container, Content, Image, Gradient, ContainerText, Date, Title, Description } from './styles';

interface CardProps {
  image: string;
  date: string;
  title: string;
  location: string;
}

export function Card({ image, date, title, location }: CardProps) {
  return (
    <Container activeOpacity={0.6}>
      <Content>
        <Image source={{ uri: image }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
          locations={[0, 1]}
        />
        <ContainerText>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Description>{location}</Description>
        </ContainerText>
      </Content>
    </Container>
  );
}
