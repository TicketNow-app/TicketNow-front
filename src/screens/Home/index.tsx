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

import { readEventResponse } from '../../interfaces/event';

import { useReadCategories } from '../../services/categories';
import { readCompanies } from '../../services/companies';
import { useReadEvents } from '../../services/events';

export function Home() {
  const navigation = useNavigation();
  const [companies, setCompanies] = useState([]);

  const { user } = useAuth();

  const {
    isLoading: categoriesLoading,
    error: categoriesError,
    data: categories,
  } = useReadCategories();

  const { isLoading: eventsLoading, error: eventsError, data: events } = useReadEvents();

  function handleNavigateToEvent(eventId: string) {
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
                uri: user?.User.image,
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
        <TitleContainer>Todos os eventos</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={eventsLoading || eventsError || !events ? Array.from(Array(5).keys()) : events}
          ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
          renderItem={({ item }) =>
            eventsLoading || eventsError || !events ? (
              <CardSkeleton />
            ) : (
              <Card
                image={item.Images[0]}
                date={item.Event.start}
                name={item.Event.name}
                number={item.Address.number}
                address={item.Address.street}
                onPress={() => handleNavigateToEvent(item.Event.id)}
              />
            )
          }
        />
      </ContainerScroll>

      {/* <ContainerScroll>
        <TitleContainer>Eventos recentes</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={eventsRecent}
          ItemSeparatorComponent={() => <FlatListDivisor orientation="horizontal" size={20} />}
          renderItem={({ item }) => (
            <CardLargeEvent eventData={item} onPress={() => handleNavigateToEvent(item.id)} />
          )}
        />
      </ContainerScroll> */}

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
