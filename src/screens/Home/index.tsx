import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { BellIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { Container, ContainerScroll, Header, HorizontalScroll, LogoHorizontal, TitleContainer } from './styles';

import { AvatarMini } from '../../components/AvatarMini';
import { Card } from '../../components/Card';
import { CardLarge } from '../../components/CardLarge';
import { CardLargeEvent } from '../../components/CardLargeEvent';
import { CompanyTag } from '../../components/CompanyTag';
import { HeaderButton } from '../../components/HeaderButton';

import { readCategories } from '../../helpers/requests/categories';
import { readRecommendedEvents } from '../../helpers/requests/events';

import { company, eventsRecent } from '../../mock';

export function Home() {
  const navigation = useNavigation();
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadRecommendedEvents() {
      const response = await readRecommendedEvents();
      setRecommendedEvents(response);
    }

    async function loadCategories() {
      const response = await readCategories();
      setCategories(response);
    }

    loadRecommendedEvents();
    //loadCategories();
  }, []);

  function handleNavigateToEvent(eventId: number) {
    navigation.navigate('Event', { id: eventId });
  }

  return (
    <Container>
      <Header>
        <HeaderButton>
          <BellIcon size={20} color={useTheme().colors.text} />
        </HeaderButton>
        <LogoHorizontal source={require('../../../assets/logo-horizontal.png')} />
        <AvatarMini />
      </Header>
      <ContainerScroll>
        <TitleContainer>Categorias</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => <CardLarge category={item} />}
        />
      </ContainerScroll>
      <ContainerScroll>
        <TitleContainer>Recomendados</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recommendedEvents}
          renderItem={({ item }) => <Card event={item} onPress={() => handleNavigateToEvent(item.id)} />}
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



