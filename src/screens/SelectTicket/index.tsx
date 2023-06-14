import { yupResolver } from '@hookform/resolvers/yup';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CalendarIcon, ClockIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import {
  Container,
  GhostView,
  ScrollContainer,
  ContainerBottom,
  ContainerTitleValue,
  ContainerTotalValue,
  ContainerValues,
  TextTitle,
  TextValue,
  TextTitleTotal,
  TextValueTotal,
  ContainerCoupon,
  IconCoupon,
  ContainerObservation,
  HightlightTextObservation,
  TextObservation,
  TouchableObservation,
  ContainerDateEvent,
  ContainerDateTime,
  ContainerInfosEvent,
  ContainerTimeEvent,
  ContainerTop,
  ImageEvent,
  TextDateEvent,
  TextTimeEvent,
  TextTitleEvent,
} from './styles';

import { CounterTicket } from '../../components/CounterTicket';
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { Header } from '../../components/Header';

import { readTicketsByEvent } from '../../services/ticket';

import { formatMoney } from '../../utils/utils';

type SelectTicketRouteProp = RouteProp<{ SelectTicket: { id: number } }, 'SelectTicket'>;

export function SelectTicket() {
  const route = useRoute<SelectTicketRouteProp>();
  const { id } = route.params;

  const schema = Yup.object().shape({
    promotionalCode: Yup.string().min(6, 'Mínimo 6 caracteres').max(255, 'Máximo 100 caracteres'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [tickets, setTickets] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function loadTickets() {
      const response = await readTicketsByEvent(id);
      setTickets(response);
    }

    loadTickets();
  }, []);

  useEffect(() => {
    updateTotal();
  }, [subtotal, totalTax]);

  function valueIncrement(value: number) {
    setSubtotal(subtotal + value);
    setTotalTax(totalTax + value * 0.01);
  }

  function valueDecrement(value: number) {
    if (subtotal > 0) {
      setSubtotal(subtotal - value);
      if (totalTax > 0) setTotalTax(totalTax - value * 0.01);
    }
  }

  function updateTotal() {
    setTotal(subtotal + totalTax);
  }

  return (
    <Container>
      <Header buttonBack title="Selecionar ingresso" buttonRight={<GhostView />} />
      <ContainerTop>
        <ImageEvent
          source={{
            uri: 'https://images.unsplash.com/photo-1542732351-fa2c82b0c746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80%201032w',
          }}
        />
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
        data={tickets}
        renderItem={({ item }) => (
          <CounterTicket
            type={item.id_category_ticket.name}
            price={Number(item.price)}
            valueIncrement={valueIncrement}
            valueDecrement={valueDecrement}
          />
        )}
      />
      <ContainerBottom>
        <ContainerValues>
          <ContainerTitleValue>
            <TextTitle>Subtotal</TextTitle>
            <TextValue>{formatMoney(subtotal)}</TextValue>
          </ContainerTitleValue>
          <ContainerTitleValue>
            <TextTitle>Total de taxas</TextTitle>
            <TextValue>{formatMoney(totalTax)}</TextValue>
          </ContainerTitleValue>
          <ContainerTitleValue>
            <TextTitle>Código promocional</TextTitle>
            <TextValue>R$ -7,50</TextValue>
          </ContainerTitleValue>
          <ContainerTotalValue>
            <TextTitleTotal>Total</TextTitleTotal>
            <TextValueTotal>{formatMoney(total)}</TextValueTotal>
          </ContainerTotalValue>
        </ContainerValues>
        <ContainerCoupon>
          <InputForm
            name="promotionalCode"
            control={control}
            placeholder="Código promocional"
            autoCorrect={false}
            autoCapitalize="none"
            error={errors.promotionalCode?.message.toString()}
          />
          <IconCoupon />
        </ContainerCoupon>
        <Button title="Continuar" onPress={handleSubmit(() => {})} />
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
