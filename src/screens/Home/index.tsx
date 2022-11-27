import React from 'react';
import { useTheme } from "styled-components";
import { BellIcon } from "react-native-heroicons/solid";

import { Container, ContainerScroll, Header, HorizontalScroll, TitleContainer } from './styles';

import { HeaderButton } from '../../components/HeaderButton';
import { AvatarMini } from '../../components/AvatarMini';
import { CardLarge } from '../../components/CardLarge';
import { Card } from '../../components/Card';
import { CompanyTag } from '../../components/CompanyTag';
import { CardLargeEvent } from '../../components/CardLargeEvent';

import { data, event, company, eventsRecent } from '../../mock';

export function Home() {

  return (
    <Container>
      <Header>
        <HeaderButton>
          <BellIcon size={24} color={useTheme().colors.text_inactive} />
        </HeaderButton>
        <AvatarMini />
      </Header>
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
        <TitleContainer>Eventos recentes</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={eventsRecent}
          renderItem={({ item }) => <CardLargeEvent eventsRecent={item} />}
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



