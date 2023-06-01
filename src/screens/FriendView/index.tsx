import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";
import { UserPlusIcon } from "react-native-heroicons/solid";

import { Container, Header, ScrollContainer, ButtonFollow, TextButton, ContainerImage, ContainerInfos, UserImage, UserName, BoxCardLargeEvent, BoxCardLargeEventPased, BoxTitle, ContainerEvent, ContentScroll, Title } from './styles';

import { HeaderButton } from '../../components/HeaderButton';
import { CardLargeEvent } from '../../components/CardLargeEvent';

import { userEvents } from '../../mock';


export function FriendView() {
  


  const navigation = useNavigation();

  function GoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
          <HeaderButton onPress={GoBack}>
            <ArrowLeftIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>      
        </Header>
      <ScrollContainer>   
        <ContainerInfos>
        <ContainerImage>
          <UserImage />
        </ContainerImage>
        <UserName>Thiaguinho</UserName>    
            <ButtonFollow>
              <UserPlusIcon size={20} color={useTheme().colors.text} />
              <TextButton>
                Seguir
              </TextButton>
            </ButtonFollow>    
      </ContainerInfos>
      <ContentScroll>
        <ContainerEvent>
          <BoxTitle>
            <Title>Eventos em comum</Title>
          </BoxTitle>
          {
            userEvents.map((item, index) => (
              <BoxCardLargeEvent key={index}>
                <CardLargeEvent eventsRecent={item} />
              </BoxCardLargeEvent>
            ))
          }
        </ContainerEvent>
        <ContainerEvent>
          <BoxTitle>
            <Title>Eventos anteriores</Title>
          </BoxTitle>
          {
            userEvents.map((item, index) => (
              <BoxCardLargeEventPased key={index}>
                <CardLargeEvent eventsRecent={item} />
              </BoxCardLargeEventPased>
            ))
          }
        </ContainerEvent>
      </ContentScroll>
      </ScrollContainer>
    </Container>
  );
}



