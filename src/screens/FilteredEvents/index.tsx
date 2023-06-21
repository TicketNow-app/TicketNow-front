import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

import { Container, GhostView, Content, TitleContent } from './styles';

import { CardLargeEvent } from '../../components/CardLargeEvent';
import { FlatListDivisor } from '../../components/FlatListDivisor';
import { Header } from '../../components/Header';

import { readAllEventsByCategory } from '../../services/categories';

type FilteredEventsRouteProp = RouteProp<
  { FilteredEvents: { categoryId: number } },
  'FilteredEvents'
>;

export function FilteredEvents() {
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  const route = useRoute<FilteredEventsRouteProp>();
  const { categoryId } = route.params;

  useEffect(() => {
    async function loadEvents() {
      const response = await readAllEventsByCategory(categoryId);
      setEvents(response);
    }

    loadEvents();
  }, []);

  function goToEvent(eventId: number) {
    navigation.navigate('Event', { id: eventId });
  }

  return (
    <Container>
      <Header buttonBack logo buttonRight={<GhostView />} />
      <TitleContent>Filtro: {events[0]?.id_category?.name}</TitleContent>
      <Content
        data={events}
        ItemSeparatorComponent={() => <FlatListDivisor orientation="vertical" size={20} />}
        renderItem={({ item }) => (
          <CardLargeEvent
            key={item.id_event.id}
            image={item.id_event.images[0].url}
            address={item.id_event.id_place.address}
            date={item.id_event.dateStart.split('-').reverse().join('/')}
            title={item.id_event.name}
            onPress={() => goToEvent(item.id_event.id)}
          />
        )}
      />
    </Container>
  );
}
