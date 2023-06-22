import React from 'react';

import { Keyboard } from 'react-native';
import { ArrowDownTrayIcon, ArrowsRightLeftIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import { Container, Background, MainContainer, ContainerOption, TitleOption } from './styles';

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
          <ArrowDownTrayIcon size={24} color={theme.colors.text} />
          <TitleOption>Baixar</TitleOption>
        </ContainerOption>
        <ContainerOption roundedBorder="bottom">
          <ArrowsRightLeftIcon size={24} color={theme.colors.text} />
          <TitleOption>Transferir Ingresso</TitleOption>
        </ContainerOption>
      </MainContainer>
    </Container>
  );
}
