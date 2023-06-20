import BottomSheet from '@gorhom/bottom-sheet';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { BookmarkIcon, CalendarDaysIcon, ClockIcon, ShareIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import { EventSkeleton } from './skeleton';
import {
  About,
  BuyButton,
  Container,
  ContainerAbout,
  ContainerBuy,
  ContainerDateTime,
  ContainerIconDateTime,
  ContainerIcons,
  ContainerImageEvent,
  ContainerLineUp,
  ContainerLineUpArtists,
  ContainerMap,
  ContainerScroll,
  ContainerTitleIcons,
  ContainerTopInfos,
  DateTime,
  EventMarker,
  IconTouchBox,
  ImageEvent,
  Map,
  MarkerPointer,
  ReadMore,
  TextButton,
  TitleAbout,
  TitleEvent,
  TitleLineUp,
  LineUpArtist,
  NameArtist,
  ImageArtist,
  ContainerOutCard,
  ContainerProducer,
  ImageProducer,
  NameProducer,
  ContainerFriends,
} from './styles';

import { AvatarsFriendsConfirmed } from '../../components/AvatarsFriendsConfirmed';
import { Header } from '../../components/Header';

import { readEvent } from '../../services/events';

import mapStyle from '../../utils/mapStyle.json';

const eventData = [
  'https://images.unsplash.com/photo-1598539962077-e4185f37104f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  'https://images.unsplash.com/photo-1485463598028-44d6c47bf23f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80',
  'https://images.unsplash.com/photo-1631902112544-2271267abb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
];

type EventRouteProp = RouteProp<{ Event: { id: number } }, 'Event'>;

export function Event() {
  const route = useRoute<EventRouteProp>();
  const theme = useTheme();
  const { id } = route.params;

  const [readMore, setReadMore] = useState(false);
  const [responseEvent, setResponseEvent]: any = useState(); //TODO: define response type

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = ['40%', '80%'];

  useEffect(() => {
    async function loadEvent() {
      const response = await readEvent(id);
      setResponseEvent(response);
    }

    loadEvent();
  }, []);

  return responseEvent ? (
    <Container>
      <Header buttonBack />
      <ContainerImageEvent>
        {responseEvent ? (
          <ImageEvent source={{ uri: responseEvent?.images[0].url }} />
        ) : (
          <ActivityIndicator size="large" color={theme.colors.text_inactive} />
        )}
      </ContainerImageEvent>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: theme.colors.background }}
        handleStyle={{ height: 40 }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.text_inactive }}
        detached
      >
        <ContainerOutCard>
          <ContainerProducer activeOpacity={0.6}>
            <ImageProducer
              source={{
                uri: 'https://images.unsplash.com/flagged/photo-1563205764-79ea509b3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80',
              }}
            />
            <NameProducer>Supra Events</NameProducer>
          </ContainerProducer>
          <ContainerFriends>
            <AvatarsFriendsConfirmed images={eventData} avatarSize={34} />
          </ContainerFriends>
        </ContainerOutCard>
        <ContainerScroll>
          <ContainerTopInfos>
            <ContainerTitleIcons>
              <TitleEvent>{responseEvent?.name}</TitleEvent>
              <ContainerIcons>
                <IconTouchBox>
                  <ShareIcon size={24} color={theme.colors.text} />
                </IconTouchBox>
                {/* <IconTouchBox>
                  <BookmarkIcon size={24} color={theme.colors.text} />
                </IconTouchBox> */}
              </ContainerIcons>
            </ContainerTitleIcons>
            <ContainerDateTime>
              <ContainerIconDateTime>
                <CalendarDaysIcon size={24} color={theme.colors.text} />
                <DateTime>{responseEvent?.dateStart.split('-').reverse().join('/')}</DateTime>
              </ContainerIconDateTime>
              <ContainerIconDateTime>
                <ClockIcon size={24} color={theme.colors.text} />
                <DateTime>
                  {responseEvent?.hourStart.split(':').slice(0, 2).join(':')}
                  {' - '}
                  {responseEvent?.hourFinish.split(':').slice(0, 2).join(':')}
                </DateTime>
              </ContainerIconDateTime>
            </ContainerDateTime>
          </ContainerTopInfos>
          <ContainerAbout>
            <TitleAbout>Sobre</TitleAbout>
            <About onPress={() => setReadMore(!readMore)}>
              {/* {event[1].about.substring(0, 200)}... <ReadMore>Ler mais</ReadMore> */}
              {readMore ? responseEvent?.ds_event : responseEvent?.description.substring(0, 200)}
              <ReadMore>{readMore ? '  Ler menos' : '  Ler mais'}</ReadMore>
            </About>
          </ContainerAbout>
          <ContainerMap>
            {responseEvent?.id_place ? (
              <Map
                customMapStyle={mapStyle}
                zoomEnabled
                initialRegion={{
                  latitude: Number(responseEvent?.id_place.latitude),
                  longitude: Number(responseEvent?.id_place.longitude),
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <EventMarker
                  coordinate={{
                    latitude: Number(responseEvent?.id_place.latitude),
                    longitude: Number(responseEvent?.id_place.longitude),
                  }}
                >
                  <MarkerPointer />
                </EventMarker>
              </Map>
            ) : (
              <ActivityIndicator size="large" color={theme.colors.text_inactive} />
            )}
          </ContainerMap>
          <ContainerLineUp>
            <TitleLineUp>Organização</TitleLineUp>
            <ContainerLineUpArtists>
              {responseEvent?.participants_events?.map((participant: any) => {
                return (
                  <LineUpArtist key={participant.id}>
                    <ImageArtist source={{ uri: participant.id_participant.name }} />
                    <NameArtist>{participant.id_participant.image}</NameArtist>
                  </LineUpArtist>
                );
              })}
            </ContainerLineUpArtists>
          </ContainerLineUp>
        </ContainerScroll>
      </BottomSheet>
      <ContainerBuy>
        <BuyButton>
          <TextButton>Comprar ingresso</TextButton>
        </BuyButton>
      </ContainerBuy>
    </Container>
  ) : (
    <EventSkeleton />
  );
}
