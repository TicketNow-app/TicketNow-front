import React from 'react';

import { Container, ContainerScroll, HorizontalScroll, TitleContainer } from './styles';

import { CardLarge } from '../../components/CardLarge';
import { Card } from '../../components/Card';
import { CompanyTag } from '../../components/CompanyTag';

import { data, event, company } from '../../mock';

export function Home() {

  return (
    <Container>
      <ContainerScroll>
        <TitleContainer>Categorias</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <CardLarge data={item} />}
        />
      </ContainerScroll>
      <ContainerScroll>
        <TitleContainer>Recomendados</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={event}
          renderItem={({ item }) => <Card event={item} />}
        />
      </ContainerScroll>
      <ContainerScroll>
        <TitleContainer>Produtoras recentes</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={company}
          renderItem={({ item }) => <CompanyTag company={item} />}
        />
      </ContainerScroll>
    </Container>
  );
}



