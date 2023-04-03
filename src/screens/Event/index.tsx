import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { ArrowLeftIcon, BookmarkIcon, CalendarDaysIcon, ClockIcon, ShareIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { About, BuyButton, Container, ContainerAbout, ContainerBuy, ContainerDateTime, ContainerFriends, ContainerIconDateTime, ContainerIcons, ContainerImageEvent, ContainerLineUp, ContainerLineUpArtists, ContainerMap, ContainerOutCard, ContainerProducer, ContainerScroll, ContainerTitleIcons, ContainerTopInfos, DateTime, Header, IconTouchBox, ImageArtist, ImageEvent, ImageProducer, LineUpArtist, Map, NameArtist, NameProducer, ReadMore, TextButton, TitleAbout, TitleEvent, TitleLineUp } from './styles';

import { AvatarsFriendsConfirmed } from '../../components/AvatarsFriendsConfirmed';
import { HeaderButton } from '../../components/HeaderButton';
import theme from '../../global/styles/theme';
import { event } from '../../mock';
import mapStyle from '../../utils/mapStyle.json';

export function Event() {
  const navigation = useNavigation();
  const [readMore, setReadMore] = useState(false);

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = ['40%', '80%'];

  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color={useTheme().colors.text_inactive} />
        </HeaderButton>
      </Header>
      <ContainerImageEvent>
        <ImageEvent source={{ uri: event[1].image }} />
      </ContainerImageEvent>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: theme.colors.background }}
        handleStyle={{ height: 40 }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.text_inactive }}
      >
        <ContainerOutCard>
          <ContainerProducer activeOpacity={0.6}>
            <ImageProducer source={{ uri: 'https://images.unsplash.com/flagged/photo-1563205764-79ea509b3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80' }} />
            <NameProducer>Supra Events</NameProducer>
          </ContainerProducer>
          <ContainerFriends>
            <AvatarsFriendsConfirmed images={event[1].friends} />
          </ContainerFriends>
        </ContainerOutCard>
        <ContainerScroll>
          <ContainerTopInfos>
            <ContainerTitleIcons>
              <TitleEvent>{event[1].title}</TitleEvent>
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
                <DateTime>{event[1].date}</DateTime>
              </ContainerIconDateTime>
              <ContainerIconDateTime>
                <ClockIcon size={24} color={useTheme().colors.text} />
                <DateTime>{event[1].hour_start} - {event[1].hour_end}</DateTime>
              </ContainerIconDateTime>
            </ContainerDateTime>
          </ContainerTopInfos>
          <ContainerAbout>
            <TitleAbout>Sobre</TitleAbout>
            <About onPress={() => setReadMore(!readMore)}>
              {/* {event[1].about.substring(0, 200)}... <ReadMore>Ler mais</ReadMore> */}
              {readMore ? event[1].about : `${event[1].about.substring(0, 200)}...`}
              <ReadMore>{readMore ? '  Ler menos' : '  Ler mais'}</ReadMore>
            </About>
          </ContainerAbout>
          <ContainerMap>
            <Map customMapStyle={mapStyle} />
          </ContainerMap>
          <ContainerLineUp>
            <TitleLineUp>Organização</TitleLineUp>
            <ContainerLineUpArtists>
              {
                event[1].line_up.map((artist, index) => (
                  <LineUpArtist key={index}>
                    <ImageArtist source={{ uri: artist.image }} />
                    <NameArtist>{artist.name}</NameArtist>
                  </LineUpArtist>
                ))
              }
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



