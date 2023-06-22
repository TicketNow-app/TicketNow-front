import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';

import { View } from 'react-native';
import { useTheme } from 'styled-components';
import {
  ButtonUserLocation,
  ContainerInputButton,
  ContainerScrollCards,
  ContainerScrollPills,
  IconUserLocation,
  InputMap,
  MapContent,
  ScrollCards,
  ScrollPills,
} from './styles';

import { CardLargeEvent } from '../../components/CardLargeEvent';
import { EventMarker } from '../../components/EventMarker';
import { Pill } from '../../components/Pill';

import { readCategories } from '../../services/categories';
import { readEvents } from '../../services/events';
import mapStyle from '../../utils/mapStyle.json';

export function Map() {
  const [location, setLocation] = useState(null);
  const [bottomSheet, setBottomSheet] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  const theme = useTheme();
  const fletListRef = useRef(null);
  const mapRef = useRef(null);
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['13%', '45%'];

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({ accuracy: 6 });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  useEffect(() => {
    async function loadEvents() {
      const response = await readEvents();

      setEvents(response);
    }

    async function loadCategories() {
      const categoryResponse = await readCategories();
      const responseFormated = [{ id_category: 0, name: 'Todos', Image: '' }, ...categoryResponse];
      setCategories(responseFormated);
    }

    Promise.all([loadEvents(), loadCategories()]);
  }, []);

  //change bottomSheet state
  useEffect(() => {
    if (bottomSheet === true) {
      return sheetRef.current?.expand();
    }
    if (bottomSheet === false) {
      return sheetRef.current?.collapse();
    }
  }, [bottomSheet]);

  // useEffect(() => {
  //   async function loadEventsDetailed() {
  //     const response = await readEventsDetailed(2);
  //     setEvents(response);
  //   }

  //   loadEventsDetailed();
  // }, []);

  const animateToLocation = (latitude: number, longitude: number) => {
    mapRef.current.animateToRegion(
      {
        latitude: latitude - 0.0018,
        longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      2000
    );
  };

  function handleMarker(eventIndex: number) {
    navigation.navigate('Event', { id: eventIndex });
  }

  function handleCard(latitude, longitude) {
    animateToLocation(latitude, longitude);
  }

  return (
    <>
      <MapContent
        customMapStyle={mapStyle}
        ref={mapRef}
        showsUserLocation
        initialRegion={location}
        zoomEnabled
        mapPadding={{ top: 0, right: 0, bottom: -40, left: 0 }}
        region={location}
      >
        {events?.map(event => (
          <EventMarker
            key={event.id}
            image={event.images[0].url}
            latitude={event.id_place.latitude}
            longitude={event.id_place.longitude}
            onPress={() => handleMarker(event.id)}
          />
        ))}
      </MapContent>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: theme.colors.background }}
        handleStyle={{ height: 40 }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.text_inactive }}
        enableOverDrag={false}
        enableContentPanningGesture={false}
        enablePanDownToClose={false}
        keyboardBlurBehavior="restore"
        style={{ paddingHorizontal: 16 }}
      >
        <ContainerInputButton>
          <InputMap placeholder="Buscar eventos" />
          <ButtonUserLocation
            onPress={() => animateToLocation(location.latitude, location.longitude)}
          >
            <IconUserLocation name="my-location" color={theme.colors.text} size={24} />
          </ButtonUserLocation>
        </ContainerInputButton>
        <ContainerScrollPills>
          <ScrollPills data={categories} renderItem={({ item }) => <Pill title={item.name} />} />
        </ContainerScrollPills>
        <ContainerScrollCards>
          {events && events.length > 0 ? (
            <ScrollCards
              data={events}
              renderItem={({ item }) => (
                <CardLargeEvent
                  title={item.name}
                  image={item.images[0].url}
                  date={item.dateStart}
                  address={item.id_place.address}
                  onPress={() => handleCard(item.id_place.latitude, item.id_place.longitude)}
                />
              )}
              ref={fletListRef}
              getItemLayout={(data, index) => ({ length: 300, offset: 400 * index, index })}
              ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <></>
          )}
        </ContainerScrollCards>
      </BottomSheet>
    </>
  );
}
