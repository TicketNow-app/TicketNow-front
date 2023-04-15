import BottomSheet from '@gorhom/bottom-sheet';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeftIcon, BookmarkIcon, CalendarDaysIcon, ClockIcon, ShareIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { About, BuyButton, Container, ContainerAbout, ContainerBuy, ContainerDateTime, ContainerIconDateTime, ContainerIcons, ContainerImageEvent, ContainerLineUp, ContainerLineUpArtists, ContainerMap, ContainerScroll, ContainerTitleIcons, ContainerTopInfos, DateTime, Header, IconTouchBox, ImageEvent, Map, ReadMore, TextButton, TitleAbout, TitleEvent, TitleLineUp } from './styles';

import { readEvent } from '../../helpers/requests/events';

import { HeaderButton } from '../../components/HeaderButton';
import theme from '../../global/styles/theme';
import mapStyle from '../../utils/mapStyle.json';

type EventRouteProp = RouteProp<{ Event: { id: number } }, 'Event'>;

export function Event() {
  const navigation = useNavigation();
  const route = useRoute<EventRouteProp>();
  const { id } = route.params;

  const [readMore, setReadMore] = useState(false);
  const [responseEvent, setResponseEvent]: any = useState([]); //TODO: define response type

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = ['40%', '80%'];

  useEffect(() => {
    async function loadEvent() {
      const response = await readEvent(id);
      setResponseEvent(response);
    }

    loadEvent();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color={useTheme().colors.text_inactive} />
        </HeaderButton>
      </Header>
      <ContainerImageEvent>
        {
          responseEvent.length === 0 ? (
            <></>
          ) : (
              <ImageEvent source={{ uri: responseEvent.imageEvent[0] }} />
            )
        }
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
              {
                responseEvent.length === 0 ?
                  <TitleEvent></TitleEvent> :
                <TitleEvent>{responseEvent?.nm_event}</TitleEvent>
              }
              <ContainerIcons>
                <IconTouchBox>
                  <ShareIcon size={24} color={useTheme().colors.text} />
                </IconTouchBox>
                <IconTouchBox>
                  <BookmarkIcon size={24} color={useTheme().colors.text} />
                </IconTouchBox>
              </ContainerIcons>
            </ContainerTitleIcons>
            <ContainerDateTime>
              <ContainerIconDateTime>
                <CalendarDaysIcon size={24} color={useTheme().colors.text} />
                <DateTime>{
                  responseEvent.length === 0 ?
                    ''
                  :
                  responseEvent?.dt_start_event
                    .split('-')
                    .reverse()
                    .join('/')
                }
                </DateTime>
              </ContainerIconDateTime>
              <ContainerIconDateTime>
                <ClockIcon size={24} color={useTheme().colors.text} />
                <DateTime>
                  {
                    responseEvent.length === 0 ?
                      ''
                    :
                    responseEvent?.hr_start_event
                      .split(':')
                      .slice(0, 2)
                      .join(':')
                  }
                  {' - '}
                  {
                    responseEvent.length === 0 ?
                      ''
                    :
                    responseEvent?.hr_finish_event
                      .split(':')
                      .slice(0, 2)
                      .join(':')
                  }
                </DateTime>
              </ContainerIconDateTime>
            </ContainerDateTime>
          </ContainerTopInfos>
          <ContainerAbout>
            <TitleAbout>Sobre</TitleAbout>
            <About onPress={() => setReadMore(!readMore)}>
              {/* {event[1].about.substring(0, 200)}... <ReadMore>Ler mais</ReadMore> */}
              {
                readMore ?
                  responseEvent.length === 0 ?
                    ''
                  :
                    responseEvent?.ds_event
                  :
                  responseEvent.length === 0 ?
                    ''
                  :
                    responseEvent?.ds_event.substring(0, 200)
              }
              <ReadMore>{readMore ? '  Ler menos' : '  Ler mais'}</ReadMore>
            </About>
          </ContainerAbout>
          <ContainerMap>
            <Map customMapStyle={mapStyle} />
          </ContainerMap>
          <ContainerLineUp>
            <TitleLineUp>Organização</TitleLineUp>
            <ContainerLineUpArtists>
              {/* {
                event[1].line_up.map((artist, index) => (
                  <LineUpArtist key={index}>
                    <ImageArtist source={{ uri: artist.image }} />
                    <NameArtist>{artist.name}</NameArtist>
                  </LineUpArtist>
                ))
              } */}
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
