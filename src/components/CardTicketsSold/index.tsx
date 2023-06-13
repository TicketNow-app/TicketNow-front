import React from "react";
import { Container, ContainerValue, ContainerText, Date, ContainerImage, Image, Gradient, Title, ContainerDesc, TitleSold, ValueSold } from './styles';


interface CardTicketsSoldProps {
  ticketsSold: {
    image: string;
    title: string;
    date: string;
  }
}

export function CardTicketsSold({ ticketsSold }: CardTicketsSoldProps) {
  return (
    <Container>
      <ContainerImage>
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          locations={[0.1, 0.8]}
        />
        <Image source={{ uri: ticketsSold.image }} />
      </ContainerImage>
      <ContainerValue>
        <ContainerDesc>
          <TitleSold>Ingressos vendidos: </TitleSold>
          <ValueSold>54</ValueSold>
        </ContainerDesc>
        <ContainerDesc>
          <TitleSold>Ganhos: </TitleSold>
          <ValueSold>R$40,00</ValueSold>
        </ContainerDesc>
      </ContainerValue>
      <ContainerText>
        <Date>{ticketsSold.date}</Date>
        <Title>{ticketsSold.title}</Title>
      </ContainerText>
    </Container>
  );
}
