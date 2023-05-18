import React from "react";

import { Container, Content, Image, ContainerText, Title } from './styles';

import { CompanyTagSkeleton } from "./skeleton";

interface CompanyTagProps {
  company: {
    image: string;
    title: string;
  }
}

export function CompanyTag({ company }: CompanyTagProps) {
  return (
    <>
      {
        company ? (
          <CompanyTagSkeleton />
        ) : (
          <Container activeOpacity={0.6}>
            <Content>
              <Image source={{ uri: company.image }} />
              <ContainerText>
                <Title>{company.title}</Title>
              </ContainerText>
            </Content>
          </Container>
        )
      }
    </>
  );
}
