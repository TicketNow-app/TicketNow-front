import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from "styled-components";
import { ShareIcon, BookmarkIcon, CalendarDaysIcon, ClockIcon, ArrowLeftIcon } from "react-native-heroicons/solid";


import { Container, Header, ContainerImageEvent, ImageEvent, ContainerDraggable, DragCard, ContainerDragComponent, DragComponent, ContainerScroll, ContainerTopInfos, ContainerTitleIcons, TitleEvent, ContainerIcons, IconTouchBox, ContainerDateTime, ContainerIconDateTime, DateTime, ContainerAbout, TitleAbout, About, ReadMore, ContainerBuy, BuyButton, TextButton, ContainerMap, Map, ContainerLineUp, TitleLineUp, ContainerLineUpArtists, LineUpArtist, ImageArtist, NameArtist } from './styles';

import { HeaderButton } from '../../components/HeaderButton';
import { event } from '../../mock';
import mapStyle from '../../utils/mapStyle.json';

export function Event() {
  const navigation = useNavigation();
  const [readMore, setReadMore] = useState(false);

  return (
    <Container>
      <Header>
        {/* GoBack don't work */}
        <HeaderButton onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color={useTheme().colors.text_inactive} />
        </HeaderButton>
      </Header>
      <ContainerImageEvent>
        <ImageEvent source={{ uri: event[1].image }} />
      </ContainerImageEvent>
      <ContainerDraggable>
        <DragCard>
          <ContainerDragComponent>
            <DragComponent />
          </ContainerDragComponent>
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
                <LineUpArtist>
                  <ImageArtist source={{ uri: 'https://images.unsplash.com/flagged/photo-1563205764-79ea509b3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80' }} />
                  <NameArtist>Marcelo D2</NameArtist>
                </LineUpArtist>
                <LineUpArtist>
                  <ImageArtist source={{ uri: 'https://images.unsplash.com/flagged/photo-1563205764-79ea509b3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80' }} />
                  <NameArtist>Marcelo D2</NameArtist>
                </LineUpArtist>
                <LineUpArtist>
                  <ImageArtist source={{ uri: 'https://images.unsplash.com/flagged/photo-1563205764-79ea509b3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80' }} />
                  <NameArtist>Marcelo D2</NameArtist>
                </LineUpArtist>
                <LineUpArtist>
                  <ImageArtist source={{ uri: 'https://images.unsplash.com/flagged/photo-1563205764-79ea509b3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80' }} />
                  <NameArtist>Marcelo D2</NameArtist>
                </LineUpArtist>
                <LineUpArtist>
                  <ImageArtist source={{ uri: 'https://images.unsplash.com/flagged/photo-1563205764-79ea509b3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80' }} />
                  <NameArtist>Marcelo D2</NameArtist>
                </LineUpArtist>
              </ContainerLineUpArtists>
            </ContainerLineUp>
          </ContainerScroll>
        </DragCard>
      </ContainerDraggable>
      <ContainerBuy>
        <BuyButton>
          <TextButton>Comprar ingresso</TextButton>
        </BuyButton>
      </ContainerBuy>
    </Container>
  );
}



