import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";

import { Container, Header, MainTitle, ScrollContainer, ContainerTopic, Introduction, TopicText, TopicTitle, FooterDescription } from './styles';

import { HeaderButton } from '../../components/HeaderButton';
export function AboutPromoters() {
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
          <MainTitle>Tornar-se um Promoter</MainTitle>
        </Header>
        <Introduction>O TicketNow é um aplicativo que facilita a venda de ingressos para eventos de diversos tipos. E a função de promoter é uma oportunidade incrível para você ganhar dinheiro enquanto promove esses eventos. Vamos lá:</Introduction>
        <ContainerTopic>
          <TopicTitle>1. Sobre o cupom</TopicTitle>
          <TopicText>Ao se tornar promoter no TicketNow, você terá acesso a um código promocional personalizável. Esse código é sugerido que você coloque o seu usuário do Instagram, para deixá-lo mais identificável. A cada vez que alguém utilizar o seu código na compra de um ingresso, você receberá uma comissão automática. É uma forma de recompensar o seu esforço em divulgar e atrair pessoas para os eventos.</TopicText>
        </ContainerTopic>

        <ContainerTopic>
          <TopicTitle>2. Sobre os eventos</TopicTitle>
          <TopicText>Aqui está o melhor: ao se tornar promoter, você pode promover todos os eventos que habilitaram essa função no TicketNow. Não é necessário buscar cada evento individualmente. Basta compartilhar o seu código personalizado com seus amigos, seguidores e em suas redes sociais para que as pessoas o utilizem na hora de comprar os ingressos. Quanto mais pessoas usarem o seu código, mais oportunidades você tem de ganhar dinheiro.</TopicText>
        </ContainerTopic>

        <ContainerTopic>
          <TopicTitle>3. Sobre a comissão</TopicTitle>
          <TopicText>O valor da comissão que você recebe varia de acordo com o evento, mas a porcentagem mínima é de 5% sobre o valor do ingresso. Isso significa que a cada venda realizada com o seu código, você recebe uma parte do valor do ingresso. É uma forma justa e transparente de recompensar o seu trabalho como promoter.</TopicText>
        </ContainerTopic>
     
        <ContainerTopic>
          <TopicTitle>4. Seja Promoter!!!</TopicTitle>
          <TopicText>Ser promoter no TicketNow é uma ótima maneira de se envolver com eventos e ainda ganhar dinheiro. Além disso, você pode construir uma reputação como promoter, ganhando reconhecimento dos organizadores de eventos e até mesmo expandindo sua rede de contatos no mundo do entretenimento.</TopicText>
        </ContainerTopic>

        <FooterDescription>
          Agora que você sabe como funciona, aproveite essa oportunidade de ser promoter no aplicativo TicketNow, compartilhando o seu código e ganhando dinheiro enquanto ajuda as pessoas a se divertirem nos eventos mais incríveis.
        </FooterDescription>
      </ScrollContainer>
    </Container>
  );
}



