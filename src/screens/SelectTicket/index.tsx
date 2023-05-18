import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container, GhostView, Header, MainTitle, ScrollContainer, ContainerBottom, ContainerTitleValue, ContainerTotalValue, ContainerValues, TextTitle, TextValue, TextTitleTotal, TextValueTotal, ContainerCoupon, IconCoupon, ContainerObservation, HightlightTextObservation, TextObservation, TouchableObservation, ContainerDateEvent, ContainerDateTime, ContainerInfosEvent, ContainerTimeEvent, ContainerTop, ImageEvent, TextDateEvent, TextTimeEvent, TextTitleEvent } from './styles';

import { HeaderButton } from '../../components/HeaderButton';
import { CounterTicket } from '../../components/CounterTicket'
import { InputForm } from '../../components/Form/InputForm'
import { Button } from '../../components/Form/Button'

const data = [
  {
    type: 'Meia',
    price: 30
  },
  {
    type: 'Inteira',
    price: 60
  },
  {
    type: 'Camarote',
    price: 160
  },
  {
    type: 'Camarote Premium',
    price: 185
  }
]

export function SelectTicket() {
  const navigation = useNavigation();

  const schema = Yup.object().shape({
    promotionalCode: Yup
      .string()
      .min(6, 'Mínimo 6 caracteres')
      .max(255, 'Máximo 100 caracteres')
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function GoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <HeaderButton onPress={GoBack}>
          <ArrowLeftIcon size={20} color={useTheme().colors.text} />
        </HeaderButton>
        <MainTitle>Selecionar ingresso</MainTitle>
        <GhostView />
      </Header>
      <ContainerTop>
        <ImageEvent source={{ uri: 'https://images.unsplash.com/photo-1542732351-fa2c82b0c746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80%201032w' }} />
        <ContainerInfosEvent>
          <TextTitleEvent>Solid | Halloween</TextTitleEvent>
          <ContainerDateTime>
            <ContainerDateEvent>
              <CalendarIcon size={20} color={useTheme().colors.text} />
              <TextDateEvent>Sex 22 de Out</TextDateEvent>
            </ContainerDateEvent>
            <ContainerTimeEvent>
              <ClockIcon size={20} color={useTheme().colors.text} />
              <TextTimeEvent>21:30 - 05:30</TextTimeEvent>
            </ContainerTimeEvent>
          </ContainerDateTime>
        </ContainerInfosEvent>
      </ContainerTop>
      <ScrollContainer
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => ( <CounterTicket type={item.type} price={item.price} /> )}
        />
      <ContainerBottom>
        <ContainerValues>
          <ContainerTitleValue>
            <TextTitle>Subtotal</TextTitle>
            <TextValue>R$ 150,00</TextValue>
          </ContainerTitleValue>
          <ContainerTitleValue>
            <TextTitle>Total de taxas</TextTitle>
            <TextValue>R$ 7,50</TextValue>
          </ContainerTitleValue>
          <ContainerTitleValue>
            <TextTitle>Código promocional</TextTitle>
            <TextValue>R$ -7,50</TextValue>
          </ContainerTitleValue>
          <ContainerTotalValue>
            <TextTitleTotal>Total</TextTitleTotal>
            <TextValueTotal>R$ 150,00</TextValueTotal>
          </ContainerTotalValue>
        </ContainerValues>
        <ContainerCoupon>
          <InputForm
            name='promotionalCode'
            control={control}
            placeholder="Código promocional"
            autoCorrect={false}
            autoCapitalize="none"
            error={errors.promotionalCode && errors.promotionalCode.message.toString()}
          />
          <IconCoupon />
        </ContainerCoupon>
        <Button title="Continuar" onPress={handleSubmit(() => { })} />
        <ContainerObservation>
          <TextObservation>Para meia entrada consulte os</TextObservation>
          <TouchableObservation>
            <HightlightTextObservation>Termos & Condições</HightlightTextObservation>
          </TouchableObservation>
        </ContainerObservation>
      </ContainerBottom>
    </Container>
  );
}



