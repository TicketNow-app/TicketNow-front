import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { XMarkIcon, CheckCircleIcon, InformationCircleIcon } from 'react-native-heroicons/outline';
import { useTheme } from 'styled-components';

import { Container, Content, Title, Main, SubTitle, Bottom } from './styles';

import { Header } from '../../components/Header';
import { HeaderButton } from '../../components/HeaderButton';

export function PaymentCompleted() {
  const navigation = useNavigation();
  const theme = useTheme();

  function goToTicketPage() {
    navigation.navigate('TicketList');
  }

  return (
    <Container>
      {/* <Header>

      </Header> */}
      <Header
        buttonLeft={
          <HeaderButton onPress={goToTicketPage}>
            <XMarkIcon size={20} color={theme.colors.text} />
          </HeaderButton>
        }
      />
      <Content>
        <Main>
          <CheckCircleIcon size={128} color={theme.colors.text_inactive} />
          <Title>Pagamento concluído</Title>
          <SubTitle>Obrigado por sua compra!</SubTitle>
          <SubTitle>Seu pedido foi recebido e está sendo processado.</SubTitle>
        </Main>
        <Bottom>
          <InformationCircleIcon size={20} color={theme.colors.text} />
          <SubTitle>
            Após confirmarmos o pagamento, o ingresso será adicionado a sua conta.{' '}
          </SubTitle>
        </Bottom>
      </Content>
    </Container>
  );
}
