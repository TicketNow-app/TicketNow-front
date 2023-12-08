import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { BellIcon } from 'react-native-heroicons/solid';
import { useQuery } from 'react-query';
import { useTheme } from 'styled-components';

import {
  Container,
  ContainerScroll,
  GhostView,
  HorizontalScroll,
  TitleContainer,
  ContainerCircle,
  ImageAvatar,
} from './styles';

import { Card, CardSkeleton } from '../../components/Card';
import { CardLarge, CardLargeSkeleton } from '../../components/CardLarge';
import { CardLargeEvent } from '../../components/CardLargeEvent';
import { CompanyTag, CompanyTagSkeleton } from '../../components/CompanyTag';
import { FlatListDivisor } from '../../components/FlatListDivisor';
import { Header } from '../../components/Header';

import { useAuth } from '../../hooks/auth';

import { useReadCategories } from '../../services/categories';
import { readCompanies } from '../../services/companies';
import { readEvents } from '../../services/events';

export function Home() {
  const navigation = useNavigation();
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [companies, setCompanies] = useState([]);

  const {
    isLoading: categoriesLoading,
    error: categoriesError,
    data: categories,
  } = useReadCategories();

  const { user } = useAuth();

  useEffect(() => {
    async function loadRecommendedEvents() {
      const response = await readEvents();
      setRecommendedEvents(response);
    }

    async function loadCompanies() {
      const response = await readCompanies();
      setCompanies(response);
    }

    Promise.all([loadRecommendedEvents(), loadCompanies()]);
  }, []);

  function handleNavigateToEvent(eventId: number) {
    navigation.navigate('Event', { id: eventId });
  }

  return (
    <Container>
      <Header
        buttonLeft={<GhostView />}
        logo
        buttonRight={
          <ContainerCircle onPress={() => navigation.navigate('Profile')}>
            <ImageAvatar
              source={{
                uri: user.image,
              }}
            />
          </ContainerCircle>
        }
      />
      <ContainerScroll>
        <TitleContainer>Categorias</TitleContainer>
        {!categoriesLoading ? (
          <HorizontalScroll
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
            renderItem={({ item }) => <CardLarge category={item} />}
          />
        ) : (
          <HorizontalScroll
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Array.from(Array(5).keys())}
            ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
            renderItem={() => <CardLargeSkeleton />}
          />
        )}
      </ContainerScroll>

      <ContainerScroll>
        <TitleContainer>Recomendados</TitleContainer>
        {recommendedEvents.length > 0 ? (
          <HorizontalScroll
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recommendedEvents}
            ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
            renderItem={({ item }) => (
              <Card event={item} onPress={() => handleNavigateToEvent(item.id)} />
            )}
          />
        ) : (
          <HorizontalScroll
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Array.from(Array(5).keys())}
            ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
            renderItem={() => <CardSkeleton />}
          />
        )}
      </ContainerScroll>

      <ContainerScroll>
        <TitleContainer>Eventos recentes</TitleContainer>
        {/* <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={eventsRecent}
          ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
          renderItem={({ item }) => <CardLargeEvent eventData={item} onPress={() => handleNavigateToEvent(item.id)} />}
        /> */}
      </ContainerScroll>

      <ContainerScroll>
        <TitleContainer>Produtoras recentes</TitleContainer>
        {companies.length > 0 ? (
          <HorizontalScroll
            horizontal
            showsHorizontalScrollIndicator={false}
            data={companies}
            ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
            renderItem={({ item }) => <CompanyTag company={item} />}
          />
        ) : (
          <HorizontalScroll
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Array.from(Array(5).keys())}
            ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={10} />}
            renderItem={() => <CompanyTagSkeleton />}
          />
        )}
      </ContainerScroll>
    </Container>
  );
}
