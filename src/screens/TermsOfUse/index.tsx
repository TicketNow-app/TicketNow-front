import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";

import { Container, GhostView, Header, MainTitle, ScrollContainer, ContainerTopic, TermsIntroduction, TopicText, TopicTitle, FooterDescription } from './styles';

import { HeaderButton } from '../../components/HeaderButton';

export function TermsOfUse() {
  const navigation = useNavigation();

  function GoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <ScrollContainer>
        <Header>
          <HeaderButton onPress={GoBack}>
            <ArrowLeftIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>
          <MainTitle>Termos de uso</MainTitle>
          <GhostView />
        </Header>
        <TermsIntroduction>Obrigado pelo acesso. Por favor, leia atentamente os nossos termos de uso antes de utilizar a aplicação.</TermsIntroduction>
        <ContainerTopic>
          <TopicTitle>1. Coleta e Tratamento de Dados de dados pessoais</TopicTitle>
          <TopicText>Nós coletamos dados pessoais, tais como nome completo, endereço de e-mail, data de nascimento e informações de pagamento, para processar as suas compras de ingressos de eventos e outras informações necessárias para a prestação dos serviços. A coleta e o tratamento dos dados pessoais serão realizados de acordo com os princípios estabelecidos na LGPD, incluindo a finalidade, a adequação, a necessidade, a transparência, a segurança e a não discriminação.</TopicText>
        </ContainerTopic>

        <ContainerTopic>
          <TopicTitle>2. Uso de Dados</TopicTitle>
          <TopicText>Os dados pessoais coletados serão utilizados exclusivamente para a prestação dos serviços oferecidos ao usuário, incluindo a comunicação entre as partes, a análise de perfil e a personalização da experiência do usuário. Os dados não serão compartilhados com terceiros sem o consentimento prévio do usuário ou para cumprir obrigações legais.</TopicText>
        </ContainerTopic>

        <ContainerTopic>
          <TopicTitle>3. Comunicações por e-mail</TopicTitle>
          <TopicText>Nós podemos enviar e-mails para resetar a senha, compras realizadas, e com informações sobre eventos futuros e promoções, mas é possível optar por não receber essas comunicações a qualquer momento.</TopicText>
        </ContainerTopic>

        <ContainerTopic>
          <TopicTitle>4. Direitos de privacidade</TopicTitle>
          <TopicText>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir e excluir os seus dados pessoais armazenados em nosso aplicativo. Para exercer esses direitos, ambas as opções estão disponíveis no perfil do usuário na aplicação.</TopicText>
        </ContainerTopic>

        <ContainerTopic>
          <TopicTitle>5. Armazenamento de Dados</TopicTitle>
          <TopicText>Os dados pessoais serão armazenados pelo tempo necessário para a prestação dos serviços, de acordo com a LGPD. Após esse período, os dados serão anonimizados ou excluídos de forma segura.</TopicText>
        </ContainerTopic>

        <ContainerTopic>
          <TopicTitle>6. Alterações aos termos de uso</TopicTitle>
          <TopicText>Nós podemos alterar esses termos de uso a qualquer momento, mediante notificação prévia. O uso continuado do aplicativo após a alteração dos termos de uso constitui aceitação dos novos termos.</TopicText>
        </ContainerTopic>

        <FooterDescription>
          Ao aceitar o "Termos de uso", o usuário reconhece que leu e entendeu estes termos de uso e concorda em cumprir com todos os termos e condições estabelecidos.
        </FooterDescription>
      </ScrollContainer>
    </Container>
  );
}



