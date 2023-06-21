import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import React, { useState, useEffect } from 'react';
import { Square2StackIcon } from 'react-native-heroicons/outline';
import {
  Cog6ToothIcon,
  CreditCardIcon,
  FireIcon,
  PencilIcon,
  TicketIcon,
  UsersIcon,
} from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import {
  ButtonPromoter,
  Container,
  ContainerConfigButtons,
  ContainerCopyIcon,
  ContainerImage,
  ContainerMetricsInfos,
  ContainerPromoterMetrics,
  ContainerSell,
  ContainerTopInfos,
  CopyButtonPromoter,
  MetricsDivisor,
  PromoterTag,
  TextButton,
  TextCopyButton,
  TextSell,
  TicketMiniSvg,
  TitleMetrics,
  UserImage,
  UserName,
} from './styles';

import { ConfigButtons } from '../../components/ConfigButtons';
import { Header } from '../../components/Header';
import { HeaderButton } from '../../components/HeaderButton';
import { ModalPromoter } from '../../components/ModalPromoter';

import { profit } from '../../helpers/salesHelper';
import { useAuth } from '../../hooks/auth';

import { readSales } from '../../services/promoter';

export function Profile() {
  const [modalPromoterVisible, setModalPromoterVisible] = useState(false);
  const [sales, setSales] = useState([]);
  const promoter = null; //only for example
  const navigation = useNavigation();
  const theme = useTheme();

  const { user } = useAuth();

  useEffect(() => {
    async function loadSales() {
      if (user.id) {
        const response = await readSales(user.id);
        setSales(response);
      }
    }

    loadSales();
  }, []);

  function goToFriendsList() {
    navigation.navigate('FriendsList');
  }

  function goToSettings() {
    navigation.navigate('Settings');
  }

  function goToTicketsSold() {
    navigation.navigate('TicketsSold');
  }

  function goToEditProfile() {
    navigation.navigate('EditProfile');
  }

  const copyToClipboard = async () => {
    if (user.coupon) {
      await Clipboard.setStringAsync(user.coupon);
    }
  };

  return (
    <>
      {modalPromoterVisible && <ModalPromoter closeModal={() => setModalPromoterVisible(false)} />}
      <Container>
        <Header
          buttonLeft={
            <HeaderButton onPress={goToFriendsList}>
              <UsersIcon size={20} color={theme.colors.text} />
            </HeaderButton>
          }
          buttonRight={
            <HeaderButton onPress={goToSettings}>
              <Cog6ToothIcon size={20} color={theme.colors.text} />
            </HeaderButton>
          }
        />
        <ContainerTopInfos>
          <ContainerImage>
            <UserImage source={{ uri: user.image }} />
            {user.category === 'P' && (
              <PromoterTag>
                <FireIcon size={20} color={theme.colors.primary} />
              </PromoterTag>
            )}
          </ContainerImage>
          <UserName>{user.name}</UserName>
          {user.category === 'P' ? (
            <>
              <CopyButtonPromoter onPress={copyToClipboard}>
                <TextCopyButton promoter={user.category}>{user.coupon}</TextCopyButton>
                <ContainerCopyIcon>
                  <Square2StackIcon size={20} color={theme.colors.text_inactive} />
                </ContainerCopyIcon>
              </CopyButtonPromoter>
              <ContainerPromoterMetrics onPress={goToTicketsSold}>
                <TicketMiniSvg />
                <ContainerMetricsInfos>
                  <TitleMetrics>Ingressos vendidos</TitleMetrics>
                  <ContainerSell>
                    <TextSell>{sales.length}</TextSell>
                    <MetricsDivisor />
                    <TextSell>R$ {profit(sales).toFixed(2).replace('.', ',')}</TextSell>
                  </ContainerSell>
                </ContainerMetricsInfos>
              </ContainerPromoterMetrics>
            </>
          ) : (
            <ButtonPromoter promoter={promoter} onPress={() => setModalPromoterVisible(true)}>
              <FireIcon size={20} color={theme.colors.text} />
              <TextButton promoter={user.category}>Tornar-se promoter</TextButton>
            </ButtonPromoter>
          )}
        </ContainerTopInfos>
        <ContainerConfigButtons>
          <ConfigButtons
            roundedBorder="all"
            icon={<PencilIcon size={24} color={theme.colors.text} />}
            title="Editar"
            description="Editar informações pessoais"
            onPress={goToEditProfile}
          />
          <ConfigButtons
            roundedBorder="all"
            icon={<TicketIcon size={24} color={theme.colors.text} />}
            title="Ingressos"
            description="Visualizar todos seus ingressos"
          />
          <ConfigButtons
            roundedBorder="all"
            icon={<CreditCardIcon size={24} color={theme.colors.text} />}
            title="Pagamentos"
            description="Visualizar configurações pegamentos"
          />
        </ContainerConfigButtons>
      </Container>
    </>
  );
}
