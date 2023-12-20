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
} from './styles';

import { Header } from '../../components/Header';

import { useReadEvent } from '../../services/events';

import mapStyle from '../../utils/mapStyle.json';

import { formatToWriteDate } from '../../utils/utils';

type EventRouteProp = RouteProp<{ Event: { id: number } }, 'Event'>;

export function Event() {
  const route = useRoute<EventRouteProp>();
  const theme = useTheme();
  const { id } = route.params;

  const [readMore, setReadMore] = useState(false);

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = ['40%', '80%'];

  const { isLoading, error, data: event } = useReadEvent(id.toString());

  return (
    <Container>
      <Header buttonBack />
      <ContainerImageEvent>
        {event ? (
          <ImageEvent source={{ uri: event.Images[0] }} />
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
      >
        {/* <ContainerOutCard>
          <ContainerProducer activeOpacity={0.6}>
            <ImageProducer source={{ uri: 'https://images.unsplash.com/flagged/photo-1563205764-79ea509b3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80' }} />
            <NameProducer>Supra Events</NameProducer>
          </ContainerProducer>
          <ContainerFriends>
            <AvatarsFriendsConfirmed images={event[1].friends} />
          </ContainerFriends>
        </ContainerOutCard> */}
        <ContainerScroll>
          <ContainerTopInfos>
            <ContainerTitleIcons>
              <TitleEvent>{event?.Event.name}</TitleEvent>
              <ContainerIcons>
                <IconTouchBox>
                  <ShareIcon size={24} color={theme.colors.text} />
                </IconTouchBox>
                <IconTouchBox>
                  <BookmarkIcon size={24} color={theme.colors.text} />
                </IconTouchBox>
              </ContainerIcons>
            </ContainerTitleIcons>
            <ContainerDateTime>
              <ContainerIconDateTime>
                <CalendarDaysIcon size={24} color={theme.colors.text} />
                <DateTime>{formatToWriteDate(event?.Event.start)}</DateTime>
              </ContainerIconDateTime>
              <ContainerIconDateTime>
                <ClockIcon size={24} color={theme.colors.text} />
                <DateTime>
                  {event?.hourStart.split(':').slice(0, 2).join(':')}
                  {' - '}
                  {event?.hourFinish.split(':').slice(0, 2).join(':')}
                </DateTime>
              </ContainerIconDateTime>
            </ContainerDateTime>
          </ContainerTopInfos>
          <ContainerAbout>
            <TitleAbout>Sobre</TitleAbout>
            <About onPress={() => setReadMore(!readMore)}>
              {/* {event[1].about.substring(0, 200)}... <ReadMore>Ler mais</ReadMore> */}
              {readMore ? event?.ds_event : event?.description.substring(0, 200)}
              <ReadMore>{readMore ? '  Ler menos' : '  Ler mais'}</ReadMore>
            </About>
          </ContainerAbout>
          <ContainerMap>
            {event?.id_place ? (
              <Map
                customMapStyle={mapStyle}
                zoomEnabled
                initialRegion={{
                  latitude: Number(event?.id_place.latitude),
                  longitude: Number(event?.id_place.longitude),
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <EventMarker
                  coordinate={{
                    latitude: Number(event?.id_place.latitude),
                    longitude: Number(event?.id_place.longitude),
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
              {event?.participants_events?.map((participant: any) => {
                return (
                  <LineUpArtist key={participant.id}>
                    <ImageArtist source={{ uri: participant.id_participant.image }} />
                    <NameArtist>{participant.id_participant.name}</NameArtist>
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
  );
}
