import BottomSheet from '@gorhom/bottom-sheet';
import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from "styled-components";

import { View } from 'react-native';
import { ButtonUserLocation, ContainerInputButton, ContainerScrollCards, ContainerScrollPills, IconUserLocation, InputMap, MapContent, ScrollCards, ScrollPills } from './styles';

import { CardLargeEvent } from '../../components/CardLargeEvent';
import { EventMarker } from '../../components/EventMarker';
import { Pill } from '../../components/Pill';

import mapStyle from '../../utils/mapStyle.json';

import { readCategories } from '../../helpers/requests/categories';
import { readEventsDetailed, readEventsMap } from '../../helpers/requests/events';

export function Map() {
  const [location, setLocation] = useState(null);
  const [bottomSheet, setBottomSheet] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);

  const fletListRef = useRef(2);
  const mapRef = useRef(null);
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['13%', '45%'];

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({ accuracy: 6 });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  useEffect(() => {
    async function loadCategories() {
      const categoryResponse = await readCategories();

      //add 'all' category
      const responseFormated = [{ id_category: 0, name: 'Todos', Image: '' }, ...categoryResponse];
      setCategories(responseFormated);
    }

    loadCategories();
  }, []);

  useEffect(() => {
    async function loadEvents() {
      const response = await readEventsMap();
      setEvents(response);
    }

    loadEvents();
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

  useEffect(() => {
    async function loadEventsDetailed() {
      const response = await readEventsDetailed(2);
      setEvents(response);
    }

    loadEventsDetailed();
  }, []);

  const animateToLocation = (latitude: number, longitude: number) => {
      mapRef.current.animateToRegion({
        latitude: latitude - 0.0018,
        longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }, 2000);
  };

  function handleMarker(eventIndex: number) {
    // setBottomSheet(!bottomSheet);
    fletListRef.current.scrollToIndex({ index: eventIndex - 1, animated: true });
  }

  function handleCard(eventIndex: number) {
    animateToLocation(events[eventIndex-1].cd_latitude, events[eventIndex-1].cd_longitude);
  }


  return (
    <>
      <MapContent
        customMapStyle={mapStyle}
        ref={mapRef}
        showsUserLocation={true}
        initialRegion={location}
        zoomEnabled={true}
        mapPadding={{ top: 0, right: 0, bottom: -40, left: 0 }}
        region={location}
      >
        {
          events?.map((event) => (
            <EventMarker key={event.id_event} image={event.imageEvent[0]} latitude={event.cd_latitude} longitude={event.cd_longitude} onPress={() => handleMarker(event.id_event)} />
          ))
        }
      </MapContent >
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: useTheme().colors.background }}
        handleStyle={{ height: 40 }}
        handleIndicatorStyle={{ backgroundColor: useTheme().colors.text_inactive }}
        enableOverDrag={false}
        enableContentPanningGesture={false}
        enablePanDownToClose={false}
        keyboardBlurBehavior="restore"
        style={{ paddingHorizontal: 16 }}
      >
        <ContainerInputButton>
          <InputMap placeholder='Buscar eventos' />
          <ButtonUserLocation onPress={() => animateToLocation(location.latitude, location.longitude)}>
            <IconUserLocation name='my-location' color={useTheme().colors.text} size={24} />
          </ButtonUserLocation>
        </ContainerInputButton>
        <ContainerScrollPills>
          <ScrollPills
            data={categories}
            renderItem={({ item }) => <Pill title={item.name} />}
          />
        </ContainerScrollPills>
        <ContainerScrollCards>
          <ScrollCards
            data={events}
            renderItem={({ item }) => <CardLargeEvent eventData={item} onPress={() => handleCard(item.id_event)} />}
            ref={fletListRef}
            getItemLayout={(data, index) => (
              { length: 300, offset: 312 * index, index }
            )}
            ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ContainerScrollCards>
      </BottomSheet>
    </>
  );
}
