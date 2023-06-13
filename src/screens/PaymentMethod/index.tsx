import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useTheme } from 'styled-components';
import {
  Container,
  Header,
  MainTitle,
  ScrollContainer,
  Section,
  Title,
  ContainerBottom,
  ContainerTitle,
  ContainerTotal,
  ContainerValues,
  TextTitle,
  TextValue,
  TextTitleTotal,
  TextValueTotal,
} from './styles';
import { Button } from '../../components/Form/Button';

import { HeaderButton } from '../../components/HeaderButton';
import { PaymentMethods } from '../../components/Payment/PaymentMethods';
import { SavedCards } from '../../components/Payment/SavedCards';
export function PaymentMethod() {
  const [checked, setChecked] = React.useState('first');
  const navigation = useNavigation();
  const theme = useTheme();

  function GoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <HeaderButton onPress={GoBack}>
          <ArrowLeftIcon size={20} color={theme.colors.text} />
        </HeaderButton>
        <MainTitle>Forma de Pagamento</MainTitle>
      </Header>
      <ScrollContainer>
        <Section>
          <Title>Cartões Salvos</Title>
        </Section>
        <SavedCards type="Crédito" lastDigits={1234} />
        <SavedCards type="Crédito" lastDigits={1234} />
        <SavedCards type="Crédito" lastDigits={1234} />
        <Section>
          <Title>Método de Pagamento</Title>
        </Section>
        <PaymentMethods type="Cartão de Crédito" />
        <PaymentMethods type="Cartão de Débito" />
        <ContainerBottom>
          <ContainerValues>
            <ContainerTitle>
              <TextTitle>Código Promocional</TextTitle>
              <TextValue>#AILAYANE</TextValue>
            </ContainerTitle>
            <ContainerTotal>
              <TextTitleTotal>Total</TextTitleTotal>
              <TextValueTotal>R$ 165,00</TextValueTotal>
            </ContainerTotal>
          </ContainerValues>
        </ContainerBottom>
        <Button title="Continuar" />
      </ScrollContainer>
    </Container>
  );
}
