import React from 'react';
import { Square2StackIcon } from "react-native-heroicons/outline";
import { Cog6ToothIcon, CreditCardIcon, FireIcon, PencilIcon, TicketIcon, UsersIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";
import { ButtonPromoter, Container, ContainerConfigButtons, ContainerImage, ContainerTopInfos, CopyButtonPromoter, Header, TextButton, TextCopyButton, UserImage, UserName } from './styles';

import { ConfigButtons } from '../../components/ConfigButtons';
import { HeaderButton } from '../../components/HeaderButton';

export function Profile() {
  const promoter = "#F23T08CE" //only for example

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
      <ContainerTopInfos>
        <ContainerImage>
          <UserImage source={{ uri: 'https://avatars.githubusercontent.com/u/45953201?v=4' }} />
        </ContainerImage>
        <UserName>Lucas Silva</UserName>
        {
          promoter ?
            <CopyButtonPromoter>
              <TextCopyButton promoter={promoter}>
                {promoter}
              </TextCopyButton>
              <Square2StackIcon size={20} color={useTheme().colors.text_inactive} />
            </CopyButtonPromoter>
            :
            <ButtonPromoter promoter={promoter}>
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
  );
}



