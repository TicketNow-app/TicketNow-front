import React from "react";
import { Container, Content, Image, Gradient, ContainerText, Title, Description } from './styles';

export function CardLarge() {
  return (
    <Container activeOpacity={0.6}>
      <Content>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3' }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          locations={[0.4, 1]}
        />
        <ContainerText>
          <Title>Festival Eletronica</Title>
          <Description>21 Eventos próximos</Description>
        </ContainerText>
      </Content>
    </Container>
  );
}
