import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { BellIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { Container, ContainerScroll, Header, HorizontalScroll, LogoHorizontal, TitleContainer } from './styles';

import { AvatarMini } from '../../components/AvatarMini';
import { Card, CardSkeleton } from '../../components/Card';
import { CardLarge, CardLargeSkeleton } from '../../components/CardLarge';
import { CardLargeEvent } from '../../components/CardLargeEvent';
import { CompanyTag } from '../../components/CompanyTag';
import { HeaderButton } from '../../components/HeaderButton';
import {FlatListDivisor} from '../../components/FlatListDivisor';

import { readCategories } from '../../helpers/requests/categories';
import { readRecommendedEvents } from '../../helpers/requests/events';

import { company, eventsRecent } from '../../mock';

export function Home() {
  const navigation = useNavigation();
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await readCategories();
      setCategories(response);
    }

    async function loadRecommendedEvents() {
      const response = await readRecommendedEvents();
      setRecommendedEvents(response);
    }

    Promise.all([loadRecommendedEvents(), loadCategories()]);
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
        {
          categories.length > 0 ?
            <HorizontalScroll
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
              renderItem={({ item }) => <CardLarge category={item} />}
            />
            :
            <HorizontalScroll
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Array.from(Array(5).keys())}
              ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
              renderItem={() => <CardLargeSkeleton />}
            />
        }
      </ContainerScroll>

      <ContainerScroll>
        <TitleContainer>Recomendados</TitleContainer>
        {
          recommendedEvents.length > 0 ?
            <HorizontalScroll
              horizontal
              showsHorizontalScrollIndicator={false}
              data={recommendedEvents}
              ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
              renderItem={({ item }) => <Card event={item} onPress={() => handleNavigateToEvent(item.id)} isLoading={recommendedEvents.length === 0} />}
            />
            :
            <HorizontalScroll
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Array.from(Array(5).keys())}
              ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
              renderItem={() => <CardSkeleton />}
            />
        }
      </ContainerScroll>

      <ContainerScroll>
        <TitleContainer>Eventos recentes</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={eventsRecent}
          ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
          renderItem={({ item }) => <CardLargeEvent eventData={item} onPress={() => handleNavigateToEvent(item.id)} />}
        />
      </ContainerScroll>

      <ContainerScroll>
        <TitleContainer>Produtoras recentes</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={company}
          ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
          renderItem={({ item }) => <CompanyTag company={item} />}
        />
      </ContainerScroll>
    </Container>
  );
}
