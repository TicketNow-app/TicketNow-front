import React from 'react';
import { useTheme } from "styled-components";
import { Container, Title } from './styles';
import { ArrowLeftIcon, UserIcon, CreditCardIcon, LockClosedIcon, QuestionMarkCircleIcon, TrashIcon, ArrowLeftOnRectangleIcon } from "react-native-heroicons/solid";
import {  Header, ContainerProfileOptions, Section, MainTitle } from './styles';
import { HeaderButton } from '../../components/HeaderButton';
import { ConfigButtons } from '../../components/ConfigButtons';
import { ScrollView } from 'react-native';


export function Settings({ navigation }) {
  return (   
    <Container>
      <ScrollView>
      <Header>
        <HeaderButton>
          <ArrowLeftIcon onPress={() => navigation.navigate('Início')} size={20} color={useTheme().colors.text} />
        </HeaderButton>
        <MainTitle>Configurações</MainTitle>
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
        <ConfigButtons separator="full" roundedBorder="top" icon={<ArrowLeftOnRectangleIcon size={24} color={useTheme().colors.text} />} title="Sair da conta"/>
        <ConfigButtons deleteColor="true" roundedBorder="bottom" icon={<TrashIcon size={24} color={useTheme().colors.text} />} title="Excluir conta" />     
      </ContainerProfileOptions>
      </ScrollView>
    </Container>
    
    
  );
}

