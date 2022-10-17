import React from "react";
import { Container, Content, Image, ContainerText, Title } from './styles';

interface CompanyTagProps {
  image: string;
  title: string;
}

export function CompanyTag({ image, title }: CompanyTagProps) {
  return (
    <Container activeOpacity={0.6}>
      <Content>
        <Image source={{ uri: image }} />
        <ContainerText>
          <Title>{title}</Title>
        </ContainerText>
      </Content>
    </Container>
  );
}
