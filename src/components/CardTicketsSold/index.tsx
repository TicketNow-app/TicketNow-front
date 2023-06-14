import React from 'react';
import {
  Container,
  ContainerValue,
  ContainerText,
  Date,
  ContainerImage,
  Image,
  Gradient,
  Title,
  ContainerDesc,
  TitleSold,
  ValueSold,
} from './styles';

interface CardTicketsSoldProps {
  image: string;
  title: string;
  date: string;
  quantity: number;
  sold: string;
}

export function CardTicketsSold({ image, title, date, quantity, sold }: CardTicketsSoldProps) {
  return (
    <Container>
      <ContainerImage>
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']} locations={[0.1, 0.8]} />
        <Image source={{ uri: image }} />
        <ContainerText>
          <Date>{date}</Date>
          <Title>{title}</Title>
        </ContainerText>
      </ContainerImage>
      <ContainerValue>
        <ContainerDesc>
          <TitleSold>Ingressos vendidos: </TitleSold>
          <ValueSold>{quantity}</ValueSold>
        </ContainerDesc>
        <ContainerDesc>
          <TitleSold>Ganhos: </TitleSold>
          <ValueSold>{sold}</ValueSold>
        </ContainerDesc>
      </ContainerValue>
    </Container>
  );
}
