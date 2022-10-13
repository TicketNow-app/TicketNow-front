import React from "react";
import { Container, Content, Image, Gradient, ContainerText, Title, Description } from './styles';

interface CardLargeProps {
  image: string;
  title: string;
  description: string;
}

export function CardLarge({ image, title, description }: CardLargeProps) {
  return (
    <Container activeOpacity={0.6}>
      <Content>
        <Image source={{ uri: image }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          locations={[0.4, 1]}
        />
        <ContainerText>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </ContainerText>
      </Content>
    </Container>
  );
}
