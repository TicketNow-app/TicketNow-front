import React from "react";
import { Container, Content, Image, ContainerText, Title } from './styles';

interface CompanyTagProps {
  company: {
    image: string;
    title: string;
  }
}

export function CompanyTag({ company }: CompanyTagProps) {
  return (
    <Container activeOpacity={0.6}>
      <Content>
        <Image source={{ uri: company.image }} />
        <ContainerText>
          <Title>{company.title}</Title>
        </ContainerText>
      </Content>
    </Container>
  );
}
