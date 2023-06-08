import React from 'react';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';

import {
  ContainerOption,
  ContainerTexts,
  DescProfileOption,
  GroupIconTexts,
  TitleProfileOption,
} from './styles';

// import { Container } from './styles';

interface IConfigButtons {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  roundedBorder?: 'top' | 'bottom' | 'all';
  deleteColor?: string;
  separator?: string;
  onPress?: () => void;
}

export function ConfigButtons({
  icon,
  title,
  description,
  roundedBorder,
  deleteColor,
  separator,
  onPress,
}: IConfigButtons) {
  const theme = useTheme();

  return (
    <ContainerOption separator={separator} roundedBorder={roundedBorder} onPress={onPress}>
      <GroupIconTexts>
        {icon}
        <ContainerTexts>
          <TitleProfileOption deleteColor={deleteColor}>{title}</TitleProfileOption>
          {description && <DescProfileOption>{description}</DescProfileOption>}
        </ContainerTexts>
      </GroupIconTexts>
      <ChevronRightIcon size={24} color={theme.colors.text_inactive} />
    </ContainerOption>
  );
}
