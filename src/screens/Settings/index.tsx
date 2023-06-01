import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ArrowLeftIcon, ArrowLeftOnRectangleIcon, CreditCardIcon, LockClosedIcon, QuestionMarkCircleIcon, TrashIcon, UserIcon, InformationCircleIcon, DocumentIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";
import { useAuth } from '../../hooks/auth';

import { Container, ContainerProfileOptions, ContainerScroll, Section, Title, GhostView } from './styles';

import { ConfigButtons } from '../../components/ConfigButtons';
import { HeaderButton } from '../../components/HeaderButton';
import { Header } from '../../components/Header';


export function Settings() {
  const {signOut} = useAuth();
  const navigation = useNavigation();

  function handleGoToPromoterPage() {
    navigation.navigate('AboutPromoters');
  }

  return (
    <Container>
      <ContainerScroll>
        <Header
        buttonBack
        title='Configurações'
        buttonRight={
          <GhostView />
        }
        />

        <Section>
          <Title>Conta</Title>
        </Section>
        <ContainerProfileOptions>
          <ConfigButtons separator="full" roundedBorder="top" icon={<UserIcon size={24} color={useTheme().colors.text} />} title="Preferências" description="Preferências do usuário" />
          <ConfigButtons separator="full" icon={<CreditCardIcon size={24} color={useTheme().colors.text} />} title="Pagamentos" description="Configurações de pagamento" />
          <ConfigButtons separator="full" icon={<LockClosedIcon size={24} color={useTheme().colors.text} />} title="Privacidade e Segurança" />
          <ConfigButtons roundedBorder="bottom" icon={<QuestionMarkCircleIcon size={24} color={useTheme().colors.text} />} title="Como é ser promoter?" description="Detalhes da função de promoção" onPress={handleGoToPromoterPage} />
        </ContainerProfileOptions>

        <Section>
          <Title>Conteúdo legal e políticas</Title>
        </Section>
        <ContainerProfileOptions>
          <ConfigButtons separator="full" roundedBorder="top" icon={<DocumentIcon size={24} color={useTheme().colors.text} />} title="Termos de uso"/>
          <ConfigButtons roundedBorder="bottom" icon={<InformationCircleIcon size={24} color={useTheme().colors.text} />} title="Ajuda" />
        </ContainerProfileOptions>
        <Section>
          <Title>Opções de saída</Title>
        </Section>
        <ContainerProfileOptions>
          <ConfigButtons onPress={signOut} separator="full" roundedBorder="top" icon={<ArrowLeftOnRectangleIcon size={24} color={useTheme().colors.text} />} title="Sair da conta" />
          <ConfigButtons deleteColor="true" roundedBorder="bottom" icon={<TrashIcon size={24} color={useTheme().colors.text} />} title="Excluir conta" />
        </ContainerProfileOptions>
      </ContainerScroll>
    </Container>
  );
}

