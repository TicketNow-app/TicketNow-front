import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import {
  BoxCardTicket,
  Container,
  ContainerTicket,
  ContentScroll,
  Header,
  MainTitle,
  SubTitle,
} from './styles';

import { CardTicketsSold } from '../../components/CardTicketsSold';
import { HeaderButton } from '../../components/HeaderButton';

import { sortPromoterSoldTicketsByEvent } from '../../helpers/ordersHelper';
import { profit, profitByEvent } from '../../helpers/salesHelper';
import { useAuth } from '../../hooks/auth';
import { readSales, readSalesGroupByEvent } from '../../services/promoter';
import { formatMoney } from '../../utils/utils';

export function TicketsSold() {
  const navigation = useNavigation();
  const [sales, setSales] = useState([]);
  const [salesDetailed, setSalesDetailed] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    async function loadSales() {
      if (user.id) {
        const response = await readSales(user.id);
        setSales(response);
      }
    }

    async function loadSalesDetailed() {
      if (user.id) {
        const response = await readSalesGroupByEvent(user.id);
        const salesFormatted = sortPromoterSoldTicketsByEvent(response);
        setSalesDetailed(salesFormatted);
      }
    }

    Promise.all([loadSales(), loadSalesDetailed()]);
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <HeaderButton onPress={handleGoBack}>
          <ArrowLeftIcon size={20} color={useTheme().colors.text} />
        </HeaderButton>
        <MainTitle>Ingressos vendidos</MainTitle>
      </Header>
      <SubTitle>{sales.length} ingressos</SubTitle>
      <MainTitle>R$ {profit(sales).toFixed(2).replace('.', ',')}</MainTitle>
      <ContentScroll>
        <ContainerTicket>
          {salesDetailed.map((sale, index) => (
            <BoxCardTicket key={index}>
              <CardTicketsSold
                image={sale?.id_event?.images[0].url}
                title={sale?.id_event?.name}
                date={sale?.id_event?.dateStart}
                quantity={sale.orders?.length}
                sold={formatMoney(profitByEvent(sale.orders, sale?.id_event.earned))}
              />
            </BoxCardTicket>
          ))}
        </ContainerTicket>
      </ContentScroll>
    </Container>
  );
}
