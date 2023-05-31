import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import { Square2StackIcon } from "react-native-heroicons/outline";
import { Cog6ToothIcon, CreditCardIcon, FireIcon, PencilIcon, TicketIcon, UsersIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { useAuth } from '../../hooks/auth';

import { ButtonPromoter, Container, ContainerConfigButtons, ContainerImage, ContainerMetricsInfos, ContainerPromoterMetrics, ContainerSell, ContainerTopInfos, CopyButtonPromoter, MetricsDivisor, TextButton, TextCopyButton, TextSell, TicketMiniSvg, TitleMetrics, UserImage, UserName } from './styles';

import { ModalPromoter } from '../../components/ModalPromoter';
import { ConfigButtons } from '../../components/ConfigButtons';
import { HeaderButton } from '../../components/HeaderButton';
import {Header} from '../../components/Header';

const data = {
  tickets: 55,
  money: 87.76,
}

export function Profile() {
  const [modalPromoterVisible, setModalPromoterVisible] = useState(false);
  const promoter = null //only for example
  const navigation = useNavigation();

  const {user} = useAuth();

  function goToFriendsList() {
    navigation.navigate('FriendsList')
  }

  function goToSettings() {
    navigation.navigate('Settings')
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(promoter);
    console.log('Copied to Clipboard!');
  }

  return (
    <>
      {modalPromoterVisible && <ModalPromoter closeModal={() => setModalPromoterVisible(false)} />}
      <Container>
        <Header
        buttonLeft={
          <HeaderButton onPress={goToFriendsList}>
            <UsersIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>
        }
        buttonRight={
          <HeaderButton onPress={goToSettings}>
            <Cog6ToothIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>
        }
        />
        <ContainerTopInfos>
          <ContainerImage>
            <UserImage source={{ uri: user.image }} />
          </ContainerImage>
          <UserName>{user.name}</UserName>
          {
            user.category === 'P' ?
              <>
                <CopyButtonPromoter onPress={copyToClipboard}>
                  <TextCopyButton promoter={promoter}>
                    {promoter}
                  </TextCopyButton>
                  <Square2StackIcon size={20} color={useTheme().colors.text_inactive} />
                </CopyButtonPromoter>
                <ContainerPromoterMetrics>
                  <TicketMiniSvg />
                  <ContainerMetricsInfos>
                    <TitleMetrics>Ingressos vendidos</TitleMetrics>
                    <ContainerSell>
                      <TextSell>{data.tickets}</TextSell>
                      <MetricsDivisor />
                      <TextSell>R$ {data.money.toFixed(2).replace('.', ',')}</TextSell>
                    </ContainerSell>
                  </ContainerMetricsInfos>
                </ContainerPromoterMetrics>
              </>
              :
              <ButtonPromoter promoter={promoter} onPress={() => setModalPromoterVisible(true)}>
                <FireIcon size={20} color={useTheme().colors.text} />
                <TextButton promoter={promoter}>
                  Tornar-se promoter
                </TextButton>
              </ButtonPromoter>
          }
        </ContainerTopInfos>
        <ContainerConfigButtons>
          <ConfigButtons roundedBorder='all' icon={<PencilIcon size={24} color={useTheme().colors.text} />} title="Editar" description="Editar informações pessoais" />
          <ConfigButtons roundedBorder='all' icon={<TicketIcon size={24} color={useTheme().colors.text} />} title="Ingressos" description="Visualizar todos seus ingressos" />
          <ConfigButtons roundedBorder='all' icon={<CreditCardIcon size={24} color={useTheme().colors.text} />} title="Pagamentos" description="Visualizar configurações pegamentos" />
        </ContainerConfigButtons>
      </Container>
    </>
  );
}
