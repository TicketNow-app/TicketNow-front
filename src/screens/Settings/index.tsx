import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ArrowLeftIcon, ArrowLeftOnRectangleIcon, CreditCardIcon, LockClosedIcon, QuestionMarkCircleIcon, TrashIcon, UserIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";
import { ConfigButtons } from '../../components/ConfigButtons';
import { HeaderButton } from '../../components/HeaderButton';
import { Container, ContainerProfileOptions, ContainerScroll, GhostView, Header, MainTitle, Section, Title } from './styles';


export function Settings() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <ContainerScroll>
        <Header>
          <HeaderButton onPress={handleGoBack}>
            <ArrowLeftIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>
          <MainTitle>Configurações</MainTitle>
          <GhostView />
        </Header>

        <Section>
          <Title>Conta</Title>
        </Section>
        <ContainerProfileOptions>
          <ConfigButtons separator="full" roundedBorder="top" icon={<UserIcon size={24} color={useTheme().colors.text} />} title="Preferências" description="Preferências da área de promoção" />
          <ConfigButtons separator="full" icon={<CreditCardIcon size={24} color={useTheme().colors.text} />} title="Pagamentos" description="Preferências da área de promoção" />
          <ConfigButtons separator="full" icon={<LockClosedIcon size={24} color={useTheme().colors.text} />} title="Privacidade e Segurança" />
          <ConfigButtons roundedBorder="bottom" icon={<QuestionMarkCircleIcon size={24} color={useTheme().colors.text} />} title="Ajuda" />
        </ContainerProfileOptions>

        <Section>
          <Title>Conteúdo legal e políticas</Title>
        </Section>
        <ContainerProfileOptions>
          <ConfigButtons separator="full" roundedBorder="top" icon={<UserIcon size={24} color={useTheme().colors.text} />} title="Conta" description="Preferências da área de promoção" />
          <ConfigButtons roundedBorder="bottom" icon={<QuestionMarkCircleIcon size={24} color={useTheme().colors.text} />} title="Ajuda" />
        </ContainerProfileOptions>
        <Section>
          <Title>Opções de saída</Title>
        </Section>
        <ContainerProfileOptions>
          <ConfigButtons separator="full" roundedBorder="top" icon={<ArrowLeftOnRectangleIcon size={24} color={useTheme().colors.text} />} title="Sair da conta" />
          <ConfigButtons deleteColor="true" roundedBorder="bottom" icon={<TrashIcon size={24} color={useTheme().colors.text} />} title="Excluir conta" />
        </ContainerProfileOptions>
      </ContainerScroll>
    </Container>
  );
}

