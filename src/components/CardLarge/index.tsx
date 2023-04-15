import React from "react";
import { Container, ContainerText, Content, Description, Gradient, Image, Title } from './styles';

interface CardLargeProps {
  category: {
    im_category_event: string;
    nm_category_event: string;
  }
}

export function CardLarge({ category }: CardLargeProps) {
  return (
    <Container activeOpacity={0.6}>
      <Content>
        <Image source={{ uri: category.im_category_event }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          locations={[0.4, 1]}
        />
        <ContainerText>
          <Title>{category.nm_category_event}</Title>
          <Description>10 eventos próximos</Description>
        </ContainerText>
      </Content>
    </Container>
  );
}
