import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from "styled-components";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { ShareIcon, BookmarkIcon, CalendarDaysIcon, ClockIcon } from "react-native-heroicons/solid";


import { Container, Header, ContainerImageEvent, ImageEvent, ContainerDraggable, DragCard, ContainerDragComponent, DragComponent, ContainerTopInfos, ContainerTitleIcons, TitleEvent, ContainerIcons, IconTouchBox, ContainerDateTime, ContainerIconDateTime, DateTime, ContainerAbout, TitleAbout, About, ReadMore, ContainerBuy, BuyButton, TextButton } from './styles';

import { HeaderButton } from '../../components/HeaderButton';
import { event } from '../../mock';

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



