import React from "react";
import { Container, ContainerValue, ContainerText, Content, Date, Image, Title, TitleQuantity } from './styles';


interface CardTicketsSoldProps {
  ticketsSold: {
    image: string;
    title: string;
    date: string;
  }
}

export function CardTicketsSold({ ticketsSold }: CardTicketsSoldProps) {
  return (
    <Container activeOpacity={0.6}>
      <Content>
        <Image source={{ uri: ticketsSold.image }} />     
        <ContainerValue activeOpacity={0.6}>
         <TitleQuantity>Ingressos vendidos: 54</TitleQuantity>
         <TitleQuantity>Ganhos: R$40,00</TitleQuantity>
        </ContainerValue>    
        <ContainerText>
          <Date>{ticketsSold.date}</Date>
          <Title>{ticketsSold.title}</Title>
        </ContainerText>
      </Content>
    </Container>
  );
}
