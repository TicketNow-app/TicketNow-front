import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { BellIcon } from 'react-native-heroicons/solid';
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

import { readCategories } from '../../services/categories';
import { readCompanies } from '../../services/companies';
import { readEvents } from '../../services/events';

export function Home() {
  const navigation = useNavigation();
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    async function loadCategories() {
      const response = await readCategories();
      setCategories(response);
    }

    async function loadRecommendedEvents() {
      const response = await readEvents();
      setRecommendedEvents(response);
    }

    async function loadCompanies() {
      const response = await readCompanies();
      setCompanies(response);
    }

    Promise.all([loadRecommendedEvents(), loadCategories(), loadCompanies()]);
  }, []);

  function handleNavigateToEvent(eventId: number) {
    navigation.navigate('Event', { id: eventId });
  }

  function goToFilteredEvents(categoryId: number) {
    navigation.navigate('FilteredEvents', { categoryId });
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
        {categories.length > 0 ? (
          <HorizontalScroll
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
            renderItem={({ item }) => (
              <CardLarge
                name={item.name}
                image={item.image}
                onPress={() => goToFilteredEvents(item.id)}
              />
            )}
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
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recommendedEvents}
          ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
          renderItem={({ item }) => (
            <CardLargeEvent
              image={item.images[0].url}
              title={item.name}
              date={item.dateStart.split('-').reverse().join('/')}
              address={item.id_place.address}
              onPress={() => handleNavigateToEvent(item.id)}
            />
          )}
        />
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
