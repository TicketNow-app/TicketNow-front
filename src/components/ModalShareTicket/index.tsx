import React from 'react';

import { Keyboard } from 'react-native';
import { ArrowDownTrayIcon, ArrowsRightLeftIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import {
  Container,
  Background,
  MainContainer,
  ContainerOption,
  ContainerTexts,
  GroupIconTexts,
  TitleOption,
} from './styles';

interface ModalShareTicketProps {
  closeModal: () => void;
}

export function ModalShareTicket({ closeModal }: ModalShareTicketProps) {
  const theme = useTheme();

  function setCloseModal() {
    closeModal();
  }

  return (
    <Container>
      <Background onPress={setCloseModal} />
      <MainContainer onPress={() => Keyboard.dismiss()}>
        <ContainerOption separator="full" roundedBorder="top">
          <GroupIconTexts>
            <ArrowDownTrayIcon size={24} color={theme.colors.text} />
            <ContainerTexts>
              <TitleOption>Baixar</TitleOption>
            </ContainerTexts>
          </GroupIconTexts>
        </ContainerOption>
        <ContainerOption roundedBorder="bottom">
          <GroupIconTexts>
            <ArrowsRightLeftIcon size={24} color={theme.colors.text} />
            <ContainerTexts>
              <TitleOption>Transferir Ingresso</TitleOption>
            </ContainerTexts>
          </GroupIconTexts>
        </ContainerOption>
      </MainContainer>
    </Container>
  );
}
