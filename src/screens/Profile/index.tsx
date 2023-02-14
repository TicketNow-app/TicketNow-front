import React from 'react';
import { BookmarkIcon, Cog6ToothIcon, CreditCardIcon, FireIcon, PencilIcon, UsersIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { ButtonPromoter, CircleImage, Container, ContainerProfileOptions, ContainerTop, Header, TextName, TextPromoter, UserImage } from './styles';

import { HeaderButton } from '../../components/HeaderButton';
import { ProfileOptionButton } from '../../components/ProfileOptionButton';

export function Profile() {
  return (
    <Container>
      <Header>
        <HeaderButton>
          <UsersIcon size={20} color={useTheme().colors.text} />
        </HeaderButton>
        <HeaderButton>
          <Cog6ToothIcon size={20} color={useTheme().colors.text} />
        </HeaderButton>
      </Header>
      <ContainerTop>
        <CircleImage>
          <UserImage source={{ uri: 'https://images.unsplash.com/photo-1619714063956-8450bf433d8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }} />
        </CircleImage>
        <TextName>Lucas Silva</TextName>
        <ButtonPromoter>
          <FireIcon size={20} color={useTheme().colors.text} />
          <TextPromoter>Tornar-se promoter</TextPromoter>
        </ButtonPromoter>
      </ContainerTop>
      <ContainerProfileOptions>
        <ProfileOptionButton icon={<PencilIcon size={24} color={useTheme().colors.text} />} title="Editar" description="Editar informações pessoais" />
        <ProfileOptionButton icon={<BookmarkIcon size={24} color={useTheme().colors.text} />} title="Salvos" description="Visualizar eventos salvos" />
        <ProfileOptionButton icon={<CreditCardIcon size={24} color={useTheme().colors.text} />} title="Pagamentos" description="Configurações de pegamentos" />
      </ContainerProfileOptions>
    </Container>
  );
}

