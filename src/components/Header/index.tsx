import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BellIcon, ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import { Container, LogoHorizontal, MainTitle } from './styles';

import { HeaderButton } from '../HeaderButton';

interface HeaderProps {
  buttonRight?: React.ReactNode;
  buttonLeft?: React.ReactNode;
  buttonBack?: boolean;
  logo?: boolean;
  title?: string;
}

export const Header = ({ buttonRight, buttonLeft, buttonBack, logo, title }: HeaderProps) => {
  const navigation = useNavigation();

  return(
    <Container>
      {
        buttonBack && (
          <HeaderButton onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>
      )}
      {buttonLeft}
      {
        title?.length > 0 && <MainTitle>{title}</MainTitle>
      }
      {logo && <LogoHorizontal source={require('../../../assets/logo-horizontal.png')} />}
      {buttonRight}
    </Container>
  )
}
