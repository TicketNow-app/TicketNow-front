import React from 'react';
import { Keyboard } from 'react-native';
import { useTheme } from "styled-components";
import { FireIcon } from "react-native-heroicons/solid";
import { Square2StackIcon } from "react-native-heroicons/outline";

import { Container, Background, CardModalPromoter, CircleIcon, ContainerTexts, Title, Desc, ContainerCode, CodeLabel, ContainerInput, InputBox, ButtonCopy, ContainerButtons, ButtonCancel, ButtonConfirm, TextButton } from './styles';

import { Input } from '../Form/Input';

interface ModalPromoterProps {
  closeModal: () => void;
}

export function ModalPromoter({ closeModal }: ModalPromoterProps) {

  function setCloseModal() {
    closeModal();
  }

  return(
    <Container>
      <Background onPress={setCloseModal}/>
      <CardModalPromoter onPress={() => Keyboard.dismiss()}>
        <CircleIcon>
          <FireIcon size={40} color={useTheme().colors.text} />
        </CircleIcon>
        <ContainerTexts>
          <Title>Tornar-se promoter</Title>
          <Desc>Você poderá compartilhar seu código de divulgação e ao utilizarem, receberá uma parte do lucro da venda do ingresso.</Desc>
        </ContainerTexts>
        <ContainerCode>
          <CodeLabel>Escolha seu código</CodeLabel>
          <ContainerInput>
            <InputBox>
              <Input
                placeholder="Código"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() => { }}
              />
            </InputBox>
            {/* <ButtonCopy onPress={() => {}}>
              <Square2StackIcon size={30} color={useTheme().colors.text_inactive} />
            </ButtonCopy> */}
          </ContainerInput>
        </ContainerCode>
        <ContainerButtons>
          <ButtonCancel onPress={setCloseModal}>
            <TextButton>Cancelar</TextButton>
          </ButtonCancel>
          <ButtonConfirm onPress={() => {}}>
            <TextButton>Concluir</TextButton>
          </ButtonConfirm>
        </ContainerButtons>
      </CardModalPromoter>
    </Container>
  )
}
