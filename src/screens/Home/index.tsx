import React from 'react';

import { Container, ContainerCardLarge, ScrollView, TitleContainer } from './styles';

import { CardLarge } from '../../components/CardLarge';

export function Home() {
  return (
    <Container>
      <ContainerCardLarge>
        <TitleContainer>Categorias</TitleContainer>
        <ScrollView>
          <CardLarge />
          <CardLarge />
          <CardLarge />
        </ScrollView>
      </ContainerCardLarge>
    </Container>
  );
}



